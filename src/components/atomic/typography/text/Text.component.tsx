// TYPES
import { TextSizeType, TextColorType } from "./Text.types";

// UTILS
import {
  getTextColor,
  setBold,
  setCapitalize,
  setUpperCase,
} from "./Text.utils";

interface IText {
  copy: string | string[];
  variant?: "span" | "paragraph";
  size?: TextSizeType;
  className?: string;
  bold?: boolean;
  capitalize?: boolean;
  uppercase?: boolean;
  color?: TextColorType;
}

const Text = ({
  variant = "span",
  copy,
  className = "",
  size = "base",
  bold = false,
  capitalize = false,
  uppercase = false,
  color = "dark",
}: IText) => {
  const styles = `text-${size} ${setBold(bold)} ${setCapitalize(
    capitalize
  )} ${setUpperCase(uppercase)} ${getTextColor(
    color
  )} ${className} font-raleway! `;

  if (variant === "span") return <span className={styles}>{copy}</span>;
  if (variant === "paragraph" && typeof copy === "string")
    return <p className={styles}>{copy}</p>;
  if (variant === "paragraph" && typeof copy !== "string")
    return (
      <>
        {copy.map((p) => (
          <p key={p} className={`${styles} leading-relaxed`}>
            {p}
          </p>
        ))}
      </>
    );

  return <span>Invalid text variant</span>;
};

export default Text;
