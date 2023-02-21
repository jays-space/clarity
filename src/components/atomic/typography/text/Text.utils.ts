// TYPES
import { TextColorType } from "./Text.types";

export const setUpperCase = (uppercase: boolean) => {
  return uppercase ? "uppercase" : "";
};

export const setCapitalize = (capitalize: boolean) => {
  return capitalize ? "capitalize" : "";
};

export const setBold = (bold: boolean) => {
  return bold ? "font-bold" : "";
};

export const getTextColor = (color: TextColorType) => {
  return color === "dark" ? "text-text" : "text-white";
};
