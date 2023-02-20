// TYPES
import { ButtonVariantTypes } from "./Button.types";

// COMPONENTS
import { Text } from "@/components/atomic/typography";

// UTILS
import { getButtonTextColor, getButtonVariantStyles } from "./Button.utils";
import { Icon } from "@/components/atomic";
import { IconNames } from "@/components/atomic/icon/iconNames.types";

interface IButton {
  label: string;
  variant?: ButtonVariantTypes;
  onClick: () => void;
  className?: string;
  disabled?: boolean;
  loading?: boolean;
  success?: boolean;
}

const Button = ({
  label,
  variant = "default",
  onClick,
  className = "",
  disabled = false,
  loading,
  success,
}: IButton) => {
  return (
    <button
      className={`${className} ${
        loading ? "cursor-not-allowed" : ""
      } ${getButtonVariantStyles(
        variant
      )} flex flex-row justify-between items-center`}
      onClick={onClick}
      disabled={disabled || loading}
    >
      {loading && (
        <Icon
          name={IconNames.loading}
          className={` ${
            variant === "primary" ? "!text-white" : "!text-primary-600"
          } mr-2 animate-spin`}
        />
      )}
      {success && (
        <Icon
          name={IconNames.success}
          className={` ${
            variant === "primary" ? "!text-white" : "!text-primary-600"
          } mr-2`}
        />
      )}
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
