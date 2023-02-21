// TYPES
import { TextColorType } from "@/components/atomic/typography/text/Text.types";
import { ButtonVariantTypes } from "./Button.types";

export const getButtonVariantStyles = (variant: ButtonVariantTypes) => {
  const baseStyles = `w-fit border-2 rounded-full transform duration-150`;
  const spacing = `px-8 py-2`;
  const color = `bg-white`;

  switch (variant) {
    case "primary":
      return `${baseStyles} ${spacing} text-white bg-secondary-600 drop-shadow-lg active:drop-shadow-none border-secondary-600`;

    case "secondary":
      return `${baseStyles} ${spacing} ${color} border-gray-200 hover:border-secondary-400 hover:drop-shadow-lg active:drop-shadow-none`;

    default:
      return `${baseStyles} ${spacing} ${color} border-white hover:bg-gray-100`;
  }
};

export const getButtonTextColor = (variant: ButtonVariantTypes) => {
  if (variant === "primary") return "light" as TextColorType;
  if (variant === "secondary") return "dark" as TextColorType;
  return "dark" as TextColorType;
};
