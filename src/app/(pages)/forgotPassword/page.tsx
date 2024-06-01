"use client";

import React, { useState, useEffect } from 'react';
import LabeledInput2 from "@/components/ui/labeledinput2";
import { useForm, SubmitHandler } from 'react-hook-form';
import { useNavbarType } from '@/components/navbarcontext';

interface ForgotPasswordInputs {
  email: string;
}

const ForgotPassword: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submittedEmail, setSubmittedEmail] = useState('');
  const { register: registerForgotPassword, handleSubmit: handleSubmitForgotPassword, formState: { errors: errorsForgotPassword } } = useForm<ForgotPasswordInputs>({
    mode: "all",
  });

  const onSubmitPassword: SubmitHandler<ForgotPasswordInputs> = data => {
    setSubmittedEmail(data.email);
    setIsSubmitted(true);
    console.log('Email request:', data);
  };

  const { setNavbarType } = useNavbarType();

  useEffect(() => {
    setNavbarType('blank');
  }, []);

  return (
    <div className="w-screen px-12 sm:px-20 md:px-28 lg:px-36 xl:px-[170px]">
      <div className="flex flex-col gap-[60px] bg-grey-dark rounded-[10px] border-[2px] border-grey-light mt-[55px] px-[40px] lg:px-[320px] py-[40px] lg:py-[60px] mb-[30px] justify-center">
        {isSubmitted ? (
          <>
            <div className="flex flex-col items-center gap-[20px]">
                <svg width="100px" height="100px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <rect x="0" fill="none" width="24" height="24"/>
                    <g>
                    <path fill="#C93420" d="M11 17.768l-4.884-4.884 1.768-1.768L11 14.232l8.658-8.658C17.823 3.39 15.075 2 12 2 6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10c0-1.528-.353-2.97-.966-4.266L11 17.768z"/>
                    </g>
                </svg>
                <h2 className="font-inter-700 text-[24px] text-white text-center">Request Successfully Sent</h2>
            </div>
            <p className="font-inter-400 text-[20px] text-white text-center">
              You may check your email inbox ({submittedEmail}) for the recovery password and link.
            </p>
          </>
        ) : (
          <>
            <h2 className="font-inter-700 text-[24px] text-white text-center">Forgot Password</h2>
            <form onSubmit={handleSubmitForgotPassword(onSubmitPassword)}>
              <div className="flex flex-col gap-y-[20px]">
                <LabeledInput2
                  label="Enter your Email"
                  id="email"
                  placeholder="Enter your email"
                  register={registerForgotPassword('email', {
                    required: 'Email is required',
                    pattern: {
                      value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                      message: 'Invalid email address',
                    },
                  })}
                  error={errorsForgotPassword.email}
                />
              </div>
              <div className="flex justify-center mt-[40px] w-full">
                <button
                  type="submit"
                  className="py-[15px] px-[50px] rounded-[5px] bg-[#0A51F1] font-inter-700 text-[16px] text-white hover:bg-[#517de5] duration-150"
                >
                  Submit
                </button>
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default ForgotPassword;