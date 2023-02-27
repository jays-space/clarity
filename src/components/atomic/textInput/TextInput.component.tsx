import {
  Control,
  Controller,
  FieldValues,
  Path,
  RegisterOptions,
} from "react-hook-form";
import { Text } from "../typography";

interface ITextInput<ContentType extends FieldValues> {
  control?: Control<ContentType, object>;
  name: Path<ContentType>;
  variant?: React.HTMLInputTypeAttribute | undefined;
  placeholder?: string;
  secureTextEntry?: boolean;
  label: string;
  rules?:
    | Omit<
        RegisterOptions<ContentType, Path<ContentType>>,
        "valueAsNumber" | "valueAsDate" | "setValueAs" | "disabled"
      >
    | undefined;
  maxLength?: number;
  capitalize?: boolean;
  uppercase?: boolean;
  required?: boolean;
  inputClassName?: string;
  inputContainerClassName?: string;
  fullWidth?: boolean;
  textArea?: boolean;
  min?: number;
  max?: number;
  step?: number
}

function TextInput<ContentType extends FieldValues>({
  control,
  capitalize = false,
  uppercase = false,
  label,
  maxLength,
  name,
  rules,
  placeholder = "",
  inputClassName = "",
  inputContainerClassName = "",
  required,
  fullWidth = false,
  textArea = false,
  variant = "text",
  max,
  min,
  step
}: ITextInput<ContentType>) {
  return textArea ? (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({
        field: { value, onBlur, onChange },
        fieldState: { error },
      }) => {
        return (
          <div
            className={`flex flex-col mb-6 ${
              fullWidth ? "w-full" : ""
            } ${inputContainerClassName}`}
          >
            <label htmlFor={`input-${name}`} className={`flex flex-row mb-1`}>
              <Text copy={label} size="sm" capitalize />
              {required && (
                <Text
                  copy={"(required)"}
                  size="sm"
                  capitalize
                  className="ml-1"
                />
              )}
            </label>
            <textarea
              name={name}
              id={`input-${name}`}
              value={value}
              required={required}
              onBlur={onBlur}
              maxLength={maxLength}
              rows={4}
              className={`outline-2 border-2 ${
                error
                  ? "text-primary-600 outline-primary-600 border-primary-300"
                  : "text-text outline-primary-800 border-primary-200"
              } rounded-md font-body tracking-wide transition-all duration-300 self-stretch ${inputClassName}`}
              onChange={onChange}
              placeholder={placeholder}
            />

            {error && (
              <span>
                <Text
                  copy={error.message || "Error"}
                  className={`text-primary-600 self-stretch`}
                  size="sm"
                  capitalize={capitalize}
                  uppercase={uppercase}
                />
              </span>
            )}
          </div>
        );
      }}
    />
  ) : (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({
        field: { value, onBlur, onChange },
        fieldState: { error },
      }) => {
        return (
          <div
            className={`flex flex-col mb-6 ${
              fullWidth ? "w-full" : ""
            } ${inputContainerClassName}`}
          >
            <label htmlFor={`input-${name}`} className={`flex flex-row mb-1`}>
              <Text copy={label} size="sm" capitalize />
              {required && (
                <Text
                  copy={"(required)"}
                  size="sm"
                  capitalize
                  className="ml-1"
                />
              )}
            </label>
            <input
              name={name}
              id={`input-${name}`}
              value={value}
              required={required}
              type={variant}
              onBlur={onBlur}
              maxLength={maxLength}
              min={min}
              max={max}
              step={step}
              className={`outline-2 border-2 ${
                error
                  ? "text-primary-600 outline-primary-600 border-primary-300"
                  : "text-text outline-primary-800 border-primary-200"
              } rounded-md font-body tracking-wide transition-all duration-300 self-stretch ${inputClassName}`}
              onChange={onChange}
              placeholder={placeholder}
            />

            {error && (
              <span>
                <Text
                  copy={error.message || "Error"}
                  className={`text-primary-600 self-stretch`}
                  size="sm"
                  capitalize={capitalize}
                  uppercase={uppercase}
                />
              </span>
            )}
          </div>
        );
      }}
    />
  );
}

export default TextInput;
