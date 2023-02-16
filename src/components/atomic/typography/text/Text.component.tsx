interface IText {
  copy: string | string[];
  variant?: "span" | "paragraph";
  size?:
    | "xs"
    | "sm"
    | "base"
    | "lg"
    | "xl"
    | "2xl"
    | "3xl"
    | "4xl"
    | "5xl"
    | "6xl"
    | "7xl"
    | "8xl"
    | "9xl";
  className?: string;
  bold?: boolean;
  capitalize?: boolean;
  uppercase?: boolean;
}

const Text = ({
  variant = "span",
  copy,
  className = "",
  size = "base",
  bold = false,
  capitalize = false,
  uppercase = false,
}: IText) => {
  const styles = `text-${size} ${bold} ${capitalize} ${uppercase} ${className} font-raleway!`;

  return variant === "span" ? (
    <span className={styles}>{copy}</span>
  ) : (
    <p className={styles}>{copy}</p>
  );
};

export default Text;
