import { BsBag, BsSearch, BsHandThumbsUp } from "react-icons/bs";
import { AiOutlineLoading, AiOutlineWarning } from "react-icons/ai";

// TYPES
import { IconColorType, IconNames } from "./iconNames.types";

// UTILS
import { getIconColor } from "./Icon.utils";

interface IIcon {
  name: IconNames;
  size?: number;
  color?: IconColorType;
  className?: string;
  testID?: string;
}

const Icon = ({
  name,
  size = 18,
  color = "dark",
  className = "",
  testID = "",
}: IIcon) => {
  switch (name) {
    case IconNames.cart: {
      return (
        <BsBag
          size={size}
          color={getIconColor(color)}
          className={className}
          data-testid={testID}
        />
      );
    }

    case IconNames.search: {
      return (
        <BsSearch
          size={size}
          color={getIconColor(color)}
          className={className}
          data-testid={testID}
        />
      );
    }

    case IconNames.success: {
      return (
        <BsHandThumbsUp
          size={size}
          color={getIconColor(color)}
          className={className}
          data-testid={testID}
        />
      );
    }

    case IconNames.loading: {
      return (
        <AiOutlineLoading
          size={size}
          color={getIconColor(color)}
          className={className}
          data-testid={testID}
        />
      );
    }

    case IconNames.apiError: {
      return (
        <AiOutlineWarning
          size={size}
          color={getIconColor(color)}
          className={className}
          data-testid={testID}
        />
      );
    }

    default:
      return null;
  }
};

export default Icon;
