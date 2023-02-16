import { BsBag, BsSearch } from "react-icons/bs";

// TYPES
import { IconColorType, IconNames } from "./iconNames.types";

// UTILS
import { getIconColor } from "./Icon.utils";

interface IIcon {
  name: IconNames;
  size?: number;
  color?: IconColorType;
  testID?: string;
}

const Icon = ({
  name,
  size = 18,
  color = "dark",
  testID = "",
}: IIcon) => {
  switch (name) {
    case IconNames.cart: {
      return (
        <BsBag
          size={size}
          color={getIconColor(color)}
          data-testid={testID}
        />
      );
    }

    case IconNames.search: {
      return (
        <BsSearch
          size={size}
          color={getIconColor(color)}
          data-testid={testID}
        />
      );
    }

    default:
      return null;
  }
};

export default Icon;
