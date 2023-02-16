// TYPES
import { ButtonVariantTypes } from "./Button.types";

// COMPONENTS
import { Text } from "@/components/atomic/typography";

// UTILS
import { getButtonTextColor, getButtonVariantStyles } from "./Button.utils";

interface IButton {
  label: string;
  variant?: ButtonVariantTypes;
  onClick: () => void;
  className?: string;
}

const Button = ({
  label,
  variant = "default",
  onClick,
  className = "",
}: IButton) => {
  return (
    <button
      className={`${className} ${getButtonVariantStyles(variant)}`}
      onClick={onClick}
    >
      <Text
        copy={label}
        size="xs"
        uppercase
        bold
        className="tracking-widest"
        color={getButtonTextColor(variant)}
      />
    </button>
  );
};

export default Button;
