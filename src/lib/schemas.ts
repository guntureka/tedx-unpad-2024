import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().email("Email is required!"),
  password: z.string().min(1, "Password is required!"),
});

export const registerSchema = z
  .object({
    firstName: z.string().min(1, "First name is required!"),
    lastName: z.string().min(1, "Last name is required!"),
    email: z.string().email("Email is required!"),
    password: z.string().min(6, "Password is required!"),
    confirmPassword: z.string().min(6, "Password is required!"),
    address: z.string().min(1, "Address is required!"),
    phone: z
      .string()
      .min(1, "Phone number is required!")
      .regex(/^[0-9]+$/, "Phone number must contain only digits")
      .regex(/^(08|62)/, "Phone number must start with 62 or 08"),
    born: z.coerce.date(),
    affiliation: z.string().min(1, "Affiliation is required!"), // Uncommented line
    reference: z.string().min(1, "Reference is required!"), // Uncommented line
    interest: z.string().min(1, "Interest is required!"), // Uncommented line
  })
  .refine(
    (data) => {
      return data.confirmPassword === data.password;
    },
    {
      message: "Password do not match!",
      path: ["confirmPassword"],
    },
  );

export const profileSchema = z.object({
  firstName: z.string().min(1, "First name is required!"),
  lastName: z.string().min(1, "Last name is required!"),
  born: z.coerce.date(),
  phone: z
    .string()
    .min(1, "Phone number is required!")
    .regex(/^[0-9]+$/, "Phone number must contain only digits")
    .regex(/^(08|62)/, "Phone number must start with 62 or 08"),
  address: z.string().min(1, "Address is required!"),
  affiliation: z.string().min(1, "Affiliation is required!"),
  reference: z.string().min(1, "Reference is required!"),
  interest: z.string().min(1, "Interest is required!"),
  // image: z.any()
});

export const riddleSchema = z.object({
  answer: z.string().min(1, "Required answer!"),
});

export const forgotPasswordSchema = z.object({
  email: z.string().email("Email is required!"),
});

export const newPasswordSchema = z
  .object({
    password: z.string().min(6, "Password is required!"),
    confirmPassword: z.string().min(6, "Confirmation password is required!"),
  })
  .refine(
    (data) => {
      return data.confirmPassword === data.password;
    },
    {
      message: "Password do not match!",
      path: ["confirmPassword"],
    },
  );
