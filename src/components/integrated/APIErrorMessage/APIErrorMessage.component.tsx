import { IconNames } from "@/components/atomic/icon/iconNames.types";
import { Text } from "@/components/atomic/typography";
import { Icon } from "@components/atomic";
import { Button } from "../button";

interface IAPIErrorMessage {
  title: string;
  message: string;
  onRetry?: () => void;
  className?: string;
}

const APIErrorMessage = ({
  message,
  onRetry = () => {},
  title,
  className ="",
}: IAPIErrorMessage) => {
  return (
    <div
      className={`w-full flex flex-col justify-center items-center ${className}`}
    >
      <Icon name={IconNames.apiError} className={`text-primary-600`} />
      <Text copy={title} />
      <Text copy={message} />
      <Button label="Retry" onClick={onRetry} />
    </div>
  );
};

export default APIErrorMessage;
