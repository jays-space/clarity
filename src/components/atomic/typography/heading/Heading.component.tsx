// TYPES
import { HeadingVariantType } from "./Heading.types";

// UTILS
import { getHeadingStyles, isUpperCase } from "./Heading.utils";

interface IHeading {
  title: string;
  variant: HeadingVariantType;
  uppercase?: boolean;
  testID?: string;
  className?: string;
}

const Heading = ({
  title,
  variant,
  uppercase = false,
  testID = "",
  className = "",
}: IHeading) => {
  switch (variant) {
    case "h1": {
      return (
        <h1
          className={`${getHeadingStyles(variant)} ${isUpperCase(
            uppercase
          )} ${className}`}
          data-testid={testID}
        >
          {title}
        </h1>
      );
    }

    case "h2": {
      return (
        <h2
          className={`${getHeadingStyles(variant)} ${isUpperCase(
            uppercase
          )} ${className}`}
          data-testid={testID}
        >
          {title}
        </h2>
      );
    }

    case "h3": {
      return (
        <h3
          className={`${getHeadingStyles(variant)} ${isUpperCase(
            uppercase
          )} ${className}`}
          data-testid={testID}
        >
          {title}
        </h3>
      );
    }

    case "h4": {
      return (
        <h4
          className={`${getHeadingStyles(variant)} ${isUpperCase(
            uppercase
          )} ${className}`}
          data-testid={testID}
        >
          {title}
        </h4>
      );
    }

    case "h5": {
      return (
        <h5
          className={`${getHeadingStyles(variant)} ${isUpperCase(
            uppercase
          )} ${className}`}
          data-testid={testID}
        >
          {title}
        </h5>
      );
    }

    case "h6": {
      return (
        <h6
          className={`${getHeadingStyles(variant)} ${isUpperCase(
            uppercase
          )} ${className}`}
          data-testid={testID}
        >
          {title}
        </h6>
      );
    }

    default: {
      return null;
    }
  }
};

export default Heading;
