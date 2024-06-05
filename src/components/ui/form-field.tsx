import React, { useEffect, useState } from "react";
import {
  FieldError,
  UseFormRegister,
  UseFormRegisterReturn,
} from "react-hook-form";
import Input from "./input";
import Label from "./label";
import { cn } from "@/lib/utils";
import { Span } from "next/dist/trace";
import Textarea from "./textarea";

interface FormFieldProps {
  label: string;
  placeholder?: string;
  id: string;
  className?: string;
  register: UseFormRegisterReturn;
  error?: FieldError;
  isPassword?: boolean; // ditambahkan mas radit
  type?: string;
  disabled?: boolean;
  variants?: "input" | "textarea";
  required?: boolean;
  value?: string;
}

const FormField = ({
  label,
  placeholder,
  id,
  className,
  register,
  error,
  isPassword = false, // ditambahkan mas radit
  type = "text",
  disabled = false,
  variants = "input",
  required = false,
  value,
}: FormFieldProps) => {
  return (
    <div className={cn("relative w-full space-y-1", className)}>
      <Label id={id} label={label} className={""} />
      {variants == "textarea" ? (
        <Textarea
          className={""}
          id={id}
          type={type}
          register={register}
          disabled={disabled}
          isPassword={isPassword}
          placeholder={placeholder}
        />
      ) : (
        <Input
          className={""}
          id={id}
          type={type}
          register={register}
          disabled={disabled}
          isPassword={isPassword}
          placeholder={placeholder}
          required={required}
        />
      )}
      {error && <p className="text-sm text-red-500 py-2">{error.message}</p>}
    </div>
  );
};

export default FormField;
