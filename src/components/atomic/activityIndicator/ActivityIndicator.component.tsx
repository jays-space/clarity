import { Icon } from "@components/atomic";
import { IconNames } from "../icon/iconNames.types";

const ActivityIndicator = ({ className }: { className?: string }) => {
  return (
    <div className="my-6">
      <Icon
        name={IconNames.loading}
        className={`!text-primary-600 animate-spin ${className}`}
      />
    </div>
  );
};

export default ActivityIndicator;
