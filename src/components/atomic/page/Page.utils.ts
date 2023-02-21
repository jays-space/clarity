// TYPES
import { PageAlignmentType } from "./Page.types";

export const getAlignment = (align: PageAlignmentType) => {
  if (align === "left") return "items-start";
  if (align === "right") return "items-end";
  return "items-center";
};
