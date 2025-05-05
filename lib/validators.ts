import { z } from "zod";
import { formatNumberWithDecimal } from "./utils";
// import { Prisma } from "@prisma/client";

const currency = z
  .string()
  //   .custom<Prisma.Decimal>()
  .refine(
    (val) => /^\d+(\.\d{2})?$/.test(formatNumberWithDecimal(Number(val))),
    "Price must have 2 decimal places"
  );

// Schema for Product Insert
export const insertProductSchema = z.object({
  name: z.string().min(3, "Name musr at least 3 characters"),
  slug: z.string().min(3, "Slug musr at least 3 characters"),
  category: z.string().min(3, "Category musr at least 3 characters"),
  brand: z.string().min(3, "Brand musr at least 3 characters"),
  description: z.string().min(3, "Description musr at least 3 characters"),
  stock: z.coerce.number(),
  images: z.array(z.string()).min(1, "Product must have at least 1 img"),
  isFeatured: z.boolean(),
  banner: z.string().nullable(),
  price: currency,
  //   rating: currency,
});

// Schema for signing users in
export const signInFormSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

// Schema for signing up a user
export const signUpFormSchema = z
  .object({
    name: z.string().min(3, "Name must be at least 3 characters"),
    email: z.string().email("Invalid email address"),
    password: z.string().min(6, "Password must be at least 6 characters"),
    confirmPassword: z
      .string()
      .min(6, "Confirm password must be at least 6 characters"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });
