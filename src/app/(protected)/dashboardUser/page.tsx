"use client";

import React, { startTransition, useEffect, useMemo, useState } from "react";
import Link from "next/link";
import LabeledInput2 from "@/components/ui/labeledinput2";
import LabeledDropdown from "@/components/ui/labeleddropdown";
import { useForm, SubmitHandler } from "react-hook-form";
import { useNavbarType } from "@/components/navbarcontext";
import { getProfile, updateProfile } from "@/actions/profile";
import { ProfileSchema } from "@/schemas";
import { useTransition } from "react";
import { FormError } from "@/components/form-error";
import { FormSuccess } from "@/components/form-success";
import { logout } from "@/actions/logout";

interface DashboardInputs {
  firstName: string | null;
  lastName: string | null;
  age: number | null;
  phone: string | null;
  address: string | null;
  affiliation: string | null;
  hdyhau: string | null;
  interest: string | null;
}

interface PasswordInputs {
  email: string;
  password: string;
  newPassword: string;
  verifyNewPassword: string;
}

const Dashboard: React.FC = () => {
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");

  const [userProfile, setUserProfile] = useState<DashboardInputs>({
    firstName: "",
    lastName: "",
    age: 0,
    phone: "",
    address: "",
    affiliation: "",
    hdyhau: "",
    interest: "",
  });

  useEffect(() => {
    getProfile().then((response) => {
      if (response.status === "success" && response.data) {
        const data = response.data;
        setUserProfile({
          firstName: data.first_name,
          lastName: data.last_name,
          age: data.Profile?.age || 0,
          phone: data.Profile?.phone || "",
          address: data.Profile?.address || "",
          affiliation: data.Profile?.affiliate || "",
          hdyhau: data.Profile?.reference || "",
          interest: data.Profile?.interest || "",
        });
      }
    });
  }, []);

  const {
    register: registerProfile,
    handleSubmit: handleSubmitProfile,
    formState: { errors: errorsProfile },
    reset,
  } = useForm<DashboardInputs>({
    mode: "all",
    defaultValues: {
      firstName: userProfile.firstName,
      lastName: userProfile.lastName,
      age: userProfile.age,
      phone: userProfile.phone,
      address: userProfile.address,
      affiliation: userProfile.affiliation,
      hdyhau: userProfile.hdyhau,
      interest: userProfile.interest,
    },
  });

  useEffect(() => {
    reset(userProfile);
  }, [userProfile, reset]);

  const {
    register: registerPassword,
    handleSubmit: handleSubmitPassword,
    formState: { errors: errorsPassword },
  } = useForm<PasswordInputs>({
    mode: "all",
    defaultValues: {
      email: "useremail@mail.com",
      password: "123456",
    },
  });

  const onSubmitProfile: SubmitHandler<DashboardInputs> = (data) => {
    // map into profile schema
    const profileData = ProfileSchema.parse({
      firstName: data.firstName,
      lastName: data.lastName,
      age: data.age,
      phone: data.phone,
      address: data.address,
      affiliate: data.affiliation,
      reference: data.hdyhau,
      interest: data.interest,
    });

    // send to backend
    startTransition(() => {
      updateProfile(profileData)
        .then((response) => {
          if (response.status === "success") {
            setSuccess("Profile updated successfully");
            setError("");
          }
        })
        .catch((error) => {
          setError("Failed to update profile");
          setSuccess("");
        });
    });
  };

  // const onSubmitPassword: SubmitHandler<PasswordInputs> = (data) => {
  //     console.log("Password Data:", data);
  // };

  const onClickLogout = () => {
    logout();
  };

  const { setNavbarType } = useNavbarType();
  const [selectedOption, setSelectedOption] = useState<string>(
    "Inferiority Complex",
  );

  const handleSelectChange = (selectedValue: string) => {
    setSelectedOption(selectedValue);
  };

  useEffect(() => {
    setNavbarType("profile");
  }, []);

  return (
    <div className="w-screen px-12 sm:px-20 md:px-28 lg:px-36 xl:px-[170px]">
      <div className="bg-red-normal mt-[55px] flex flex-col justify-between rounded-[10px] px-8 py-8 md:flex-row md:px-10 md:py-10 xl:px-[50px] xl:py-[40px]">
        <div className="flex flex-col gap-[8px]">
          <h1 className="font-inter-900 text-center text-[33px] text-white md:text-left md:text-[37px]">
            The Flavors of Wisdom
          </h1>
          <h2 className="font-inter-700 text-center text-[16px] text-white/[.8] md:text-left md:text-[20px]">
            A place where wisdom can be seen and discovered
          </h2>
          <p className="font-inter-600 md:-[14px] text-center text-[12px] text-white/[.8] md:text-left">
            TEDx Padjadjaran University
          </p>
          <p className="font-inter-600 md:-[14px] text-center text-[12px] text-white/[.8] md:text-left">
            COMING SOON
          </p>
        </div>
        <div className="mt-[30px] flex flex-col place-content-end items-center gap-[5px]">
          <h3 className="font-inter-600 text-center text-[14px] text-white">
            Follow Us On:
          </h3>
          <div className="flex flex-row items-center">
            <a href="https://www.instagram.com/tedxpadjadjaranuniversity/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="41px"
                height="41px"
                viewBox="0 0 32 32"
              >
                <path
                  d="M 11.46875 5 C 7.917969 5 5 7.914063 5 11.46875 L 5 20.53125 C 5 24.082031 7.914063 27 11.46875 27 L 20.53125 27 C 24.082031 27 27 24.085938 27 20.53125 L 27 11.46875 C 27 7.917969 24.085938 5 20.53125 5 Z M 11.46875 7 L 20.53125 7 C 23.003906 7 25 8.996094 25 11.46875 L 25 20.53125 C 25 23.003906 23.003906 25 20.53125 25 L 11.46875 25 C 8.996094 25 7 23.003906 7 20.53125 L 7 11.46875 C 7 8.996094 8.996094 7 11.46875 7 Z M 21.90625 9.1875 C 21.402344 9.1875 21 9.589844 21 10.09375 C 21 10.597656 21.402344 11 21.90625 11 C 22.410156 11 22.8125 10.597656 22.8125 10.09375 C 22.8125 9.589844 22.410156 9.1875 21.90625 9.1875 Z M 16 10 C 12.699219 10 10 12.699219 10 16 C 10 19.300781 12.699219 22 16 22 C 19.300781 22 22 19.300781 22 16 C 22 12.699219 19.300781 10 16 10 Z M 16 12 C 18.222656 12 20 13.777344 20 16 C 20 18.222656 18.222656 20 16 20 C 13.777344 20 12 18.222656 12 16 C 12 13.777344 13.777344 12 16 12 Z"
                  fill="#FFFFFF"
                />
              </svg>
            </a>
            <a href="https://www.linkedin.com/company/tedx-padjadjaran-university/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="41px"
                height="41px"
                viewBox="0 0 50 50"
              >
                <path
                  d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z"
                  fill="#FFFFFF"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div className="my-[40px] flex flex-col justify-center rounded-[10px] border-[2px] border-grey-light bg-grey-dark px-[40px] py-[40px] lg:px-[160px] lg:py-[60px]">
        <h2 className="font-inter-700 text-center text-[24px] text-white">
          Profile
        </h2>

        <div className="flex justify-center">
          <a
            className="mt-[25px] flex max-w-fit flex-col items-center gap-[16px]"
            href="#"
          >
            <div className="flex h-[80px] w-[80px] items-center justify-center rounded-full bg-[#ECECEE]">
              <svg
                height="26px"
                viewBox="0 0 512 512"
                width="26px"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title />
                <circle cx="256" cy="272" r="64" fill="#414141" />
                <path
                  d="M456,144H373c-3,0-6.72-1.94-9.62-5l-27.28-42.8C325,80,320,80,302,80H210c-18,0-24,0-34.07,16.21L148.62,139c-2.22,2.42-5.34,5-8.62,5V128a8,8,0,0,0-8-8H92a8,8,0,0,0-8,8v16H56a24,24,0,0,0-24,24V408a24,24,0,0,0,24,24H456a24,24,0,0,0,24-24V168A24,24,0,0,0,456,144ZM260.51,367.9a96,96,0,1,1,91.39-91.39A96.11,96.11,0,0,1,260.51,367.9Z"
                  fill="#414141"
                />
              </svg>
            </div>
            {/* <p className="font-inter-600 text-white text-[14px] hover:underline">
                            Upload Photo
                        </p> */}
          </a>
        </div>
        <div className="mt-2">
          <FormError message={error} />
          <FormSuccess message={success} />
        </div>
        <form onSubmit={handleSubmitProfile(onSubmitProfile)}>
          <div className="mt-[60px] grid grid-cols-1 grid-rows-4 gap-x-[60px] gap-y-[20px] lg:grid-cols-2">
            <LabeledInput2
              label="First Name"
              id="firstName"
              placeholder="Enter your first name"
              register={registerProfile("firstName", {
                required: "First name is required",
                pattern: {
                  value: /^[A-Za-zÀ-ÖØ-öø-ÿ' -]{1,50}$/,
                  message: "Can only contain alphabetic characters",
                },
              })}
              error={errorsProfile.firstName}
            />
            <LabeledInput2
              label="Last Name"
              id="lastName"
              placeholder="Enter your last name"
              register={registerProfile("lastName", {
                required: "Last name is required",
                pattern: {
                  value: /^[A-Za-zÀ-ÖØ-öø-ÿ' -]{1,50}$/,
                  message: "Can only contain alphabetic characters",
                },
              })}
              error={errorsProfile.lastName}
            />
            <LabeledInput2
              label="Age"
              id="age"
              placeholder="Enter your age"
              register={registerProfile("age", {
                required: "Age is required",
                pattern: {
                  value: /^(?:1[01][0-9]|120|[1-9]?[0-9])$/,
                  message: "Age must be a number",
                },
                setValueAs: (value) => {
                  return parseInt(value);
                },
              })}
              error={errorsProfile.lastName}
            />
            <LabeledInput2
              label="Phone"
              id="phone"
              placeholder="Enter your phone number"
              register={registerProfile("phone", {
                required: "Phone number is required",
                pattern: {
                  value: /^08\d{7,13}$/,
                  message: 'Phone number must start with "08"',
                },
              })}
              error={errorsProfile.phone}
            />
            <LabeledInput2
              label="Address"
              id="address"
              placeholder="Enter your address"
              register={registerProfile("address", {
                required: "Address is required",
                pattern: {
                  value: /^[a-zA-Z0-9\s,.'-]{1,100}$/,
                  message: "Address must be 1-100 characters long",
                },
              })}
              error={errorsProfile.address}
            />
            <LabeledInput2
              label="Affiliation"
              id="affiliation"
              placeholder="Enter your affiliation (ex: Padjadjaran University)"
              register={registerProfile("affiliation", {
                required: "Affiliation is required",
                pattern: {
                  value: /^[A-Za-zÀ-ÖØ-öø-ÿ' -]{1,50}$/,
                  message: "Can only contain alphabetic characters",
                },
              })}
              error={errorsProfile.affiliation}
            />
            <LabeledInput2
              label="How Did You Hear About Us?"
              id="hdyhau"
              placeholder="(ex: Instagram, Tiktok, Friends, ....)"
              register={registerProfile("hdyhau", {
                required: "Source is required",
                pattern: {
                  value: /^.{1,100}$/,
                  message: "Source must be 1-100 characters long",
                },
              })}
              error={errorsProfile.hdyhau}
            />
            <LabeledDropdown
              label="Interest"
              id="interest"
              register={registerProfile("interest", {
                required: "You must choose 1",
              })}
              error={errorsProfile.interest}
              options={[
                "Inferiority Complex",
                "Personalized Algorithm",
                "Quarter Life Crisis",
                "Economics & Entrepreneurship",
              ]}
              selectedOption={selectedOption}
              onSelectChange={handleSelectChange}
            />
          </div>

          <div className="mt-[40px] flex w-full justify-center">
            <button
              type="submit"
              className="font-inter-700 rounded-[5px] bg-[#0A51F1] px-[50px] py-[15px] text-[16px] text-white duration-150 hover:bg-[#517de5]"
            >
              Save
            </button>
          </div>
        </form>
      </div>

      {/* Change Password */}
      {/* <div className="flex flex-col gap-[60px] bg-grey-dark rounded-[10px] border-[2px] border-grey-light px-[40px] lg:px-[320px] py-[40px] lg:py-[60px] mb-[30px] justify-center">
                <h2 className="font-inter-700 text-[24px] text-white text-center">
                    Change Password
                </h2>
                <form onSubmit={handleSubmitPassword(onSubmitPassword)}>
                    <div className="flex flex-col gap-y-[20px]">
                        <LabeledInput2
                            label="Email"
                            id="email"
                            placeholder="Enter your email"
                            disabled={true}
                            register={registerPassword("email", {
                                required: "Email is required",
                                pattern: {
                                    value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                                    message: "Invalid email address",
                                },
                            })}
                            error={errorsPassword.email}
                        />
                        <div className="relative">
                            <LabeledInput2
                                label="Password"
                                id="password"
                                placeholder="Enter your password"
                                register={registerPassword("password", {
                                    required: "Password is required",
                                    minLength: {
                                        value: 6,
                                        message:
                                            "Password must be at least 6 characters long",
                                    },
                                })}
                                error={errorsPassword.password}
                            />
                            <Link
                                href="#"
                                className="flex justify-end pt-[13px] text-white text-[14px] text-right font-inter-400 ml-[10px] hover:underline"
                            >
                                Forget Password?
                            </Link>
                        </div>
                        <LabeledInput2
                            label="New Password"
                            id="password"
                            placeholder="Enter New Password"
                            register={registerPassword("newPassword", {
                                required: "Password is required",
                                minLength: {
                                    value: 6,
                                    message:
                                        "Password must be at least 6 characters long",
                                },
                            })}
                            error={errorsPassword.newPassword}
                        />
                        <LabeledInput2
                            label="Verify New Password"
                            id="password"
                            placeholder="Verify New Password"
                            register={registerPassword("verifyNewPassword", {
                                required: "Password is required",
                                minLength: {
                                    value: 6,
                                    message:
                                        "Password must be at least 6 characters long",
                                },
                            })}
                            error={errorsPassword.verifyNewPassword}
                        />
                    </div>
                    <div className="flex justify-center mt-[40px] w-full">
                        <button
                            type="submit"
                            className="py-[15px] px-[50px] rounded-[5px] bg-[#0A51F1] font-inter-700 text-[16px] text-white hover:bg-[#517de5] duration-150"
                        >
                            Save
                        </button>
                    </div>
                </form>
            </div> */}

      <div className="flex justify-end">
        <button
          onClick={onClickLogout}
          className="bg-red-dark font-inter-700 hover:bg-red-normal rounded-[5px] border-[1px] border-white px-[30px] py-[15px] text-[16px] text-white duration-150"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
