// TYPES
import { TextColorType } from "@/components/atomic/typography/text/Text.types";
import { ButtonVariantTypes } from "./Button.types";

export const getButtonVariantStyles = (variant: ButtonVariantTypes) => {
  const baseStyles = `w-fit border-2 transform duration-150`;
  const color = `bg-white`;

  switch (variant) {
    case "primary":
      return `${baseStyles} text-white bg-primary-300 border-primary-300 hover:bg-opacity-90`;
    // case "primary":
    //   return `${baseStyles} text-white bg-primary-300 active:drop-shadow-none shadow-md shadow-fuchsia-[2px_4px_3px_rgba(240,171,252,0.7)] hover:drop-shadow-[2px_4px_3px_rgba(240,171,252,0.7)] border-primary-300`;

    case "secondary":
      return `${baseStyles} ${color} border-gray-200 hover:border-primary-300`;

    default:
      return `${baseStyles} ${color} border-white hover:bg-gray-100`;
  }
};

export const getButtonTextColor = (variant: ButtonVariantTypes) => {
  if (variant === "primary") return "light" as TextColorType;
  if (variant === "secondary") return "dark" as TextColorType;
  return "dark" as TextColorType;
};
