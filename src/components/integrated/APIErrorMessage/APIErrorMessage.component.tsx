import { IconNames } from "@/components/atomic/icon/iconNames.types";
import { Text } from "@/components/atomic/typography";
import { Icon } from "@components/atomic";
import { Button } from "../button";

interface IAPIErrorMessage {
  title: string;
  message: string;
  onRetry?: () => void;
}

const APIErrorMessage = ({
  message,
  onRetry = () => {},
  title,
}: IAPIErrorMessage) => {
  return (
    <div>
      <Icon name={IconNames.apiError} className={`text-primary-600`} />
      <Text copy={title} />
      <Text copy={message} />
      <Button label="Retry" onClick={onRetry} />
    </div>
  );
};

export default APIErrorMessage;
