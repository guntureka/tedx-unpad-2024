import { cn } from "@/lib/utils";
import React from "react";
import { UseFormRegisterReturn } from "react-hook-form";

interface TextareaProps {
  id: string;
  placeholder?: string;
  className?: string;
  register: UseFormRegisterReturn;
  isPassword?: boolean; // ditambahkan mas radit
  type?: string;
  disabled?: boolean;
  value?: string;
}

const Textarea = ({
  placeholder,
  className,
  register,
  id,
  isPassword = false, // ditambahkan mas radit
  type = "text",
  disabled = false,
  value,
}: TextareaProps) => {
  return (
    <textarea
      className={cn(
        "text-gray-light w-full border-b-2 border-white bg-transparent placeholder-opacity-0 duration-150 focus:outline-0 disabled:border-gray-dark py-4 relative resize-none",
        className
      )}
      placeholder={placeholder}
      rows={3}
      {...register}
      id={id}
    />
  );
};

export default Textarea;
