import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function convertToPlainObj<T>(val: T): T {
  return JSON.parse(JSON.stringify(val));
}

export function formatNumberWithDecimal(num: number): string {
  //Get the Int and float
  const [int, decimal] = num.toString().split(".");
  return decimal ? `${int}.${decimal.padEnd(2, "0")}` : `${int}.00`;
}
