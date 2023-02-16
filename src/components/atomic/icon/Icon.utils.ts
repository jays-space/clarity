// TYPES
import { IconColorType } from "./iconNames.types";

export const getIconColor = (color: IconColorType) => {
  const darkColor: string = "#3A3A3A";
  const lightColor: string = "#FFF";

  return color === "dark" ? darkColor : lightColor;
};
