// TYPES
import { HeadingVariantType } from "./Heading.types";

export const isUpperCase = (uppercase: boolean) => {
  return uppercase ? "uppercase" : "";
};

export const getHeadingStyles = (variant: HeadingVariantType) => {
  const fontFamily = "font-cursive text-primary-700";
  const capitalize = "capitalize";

  switch (variant) {
    case "h1":
      return `${fontFamily} text-6xl font-semibold ${capitalize} tracking-widest`;
    case "h2":
      return `${fontFamily} text-4xl font-semibold ${capitalize} tracking-widest`;
    case "h3":
      return `${fontFamily} text-3xl font-semibold ${capitalize} tracking-widest`;
    case "h4":
      return `${fontFamily} text-2xl font-semibold ${capitalize} tracking-widest`;
    case "h5":
      return `${fontFamily} text-xl font-semibold ${capitalize} tracking-widest`;
    case "h6":
      return `${fontFamily} text-lg font-semibold ${capitalize} tracking-widest`;

    default:
      return "";
  }
};
