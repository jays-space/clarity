// TYPES
import { ButtonVariantTypes } from "./Button.types";

// COMPONENTS
import { Text } from "@/components/atomic/typography";

// UTILS
import { getButtonTextColor, getButtonVariantStyles } from "./Button.utils";
import { Icon } from "@/components/atomic";
import { IconNames } from "@/components/atomic/icon/iconNames.types";

interface IButton {
  label?: string;
  icon?: IconNames;
  variant?: ButtonVariantTypes;
  onClick: () => void;
  className?: string;
  disabled?: boolean;
  loading?: boolean;
  success?: boolean;
}

const Button = ({
  label,
  icon,
  variant = "default",
  onClick,
  className = "",
  disabled = false,
  loading,
  success,
}: IButton) => {
  return icon && !label ? (
    <button
      className={`${className} ${
        loading ? "cursor-not-allowed" : ""
      } ${getButtonVariantStyles(
        variant
      )} px-4 py-4 group flex flex-row justify-center items-center font-body rounded-full`}
      onClick={onClick}
      disabled={disabled || loading}
    >
      <Icon
        name={icon}
        className={` ${
          variant === "primary" ? "!text-white" : "!text-primary-600"
        } ${loading ? "animate-spin" : "animate-none"}`}
      />
    </button>
  ) : !icon && label ? (
    <button
      className={`${className} ${
        loading ? "cursor-not-allowed" : ""
      } ${getButtonVariantStyles(
        variant
      )} px-8 py-4 group flex flex-row justify-between items-center font-body`}
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
        className={`tracking-widest font-body ${
          variant === "primary"
            ? "underline decoration-primary-300 group-hover:decoration-white underline-offset-4 decoration-2"
            : ""
        } transition-color duration-300`}
        color={getButtonTextColor(variant)}
      />
    </button>
  ) : null;
};

export default Button;
