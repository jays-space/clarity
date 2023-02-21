import { Link, useMatch } from "react-router-dom";

interface INavButton {
  label: string;
  path?: string;
}

/**
 * 
 * @param label String displayed as label in button
 * @param path Path to navigate to
 * 
 * @returns a custom router Link button that detects if the link is currently active
 */

const NavButton = ({ label, path = "#" }: INavButton) => {
  const isPathMatch = useMatch(path);

  const isActiveLink = () => {
    return isPathMatch
      ? "bg-primary-50 text-opacity-100"
      : "hover:bg-primary-100 text-opacity-60";
  };

  return (
    <Link
      to={path}
      className={`mr-4 last-of-type:mr-0 rounded-md text-text  hover:text-opacity-100 ${isActiveLink()} transition duration-150`}
    >
      <div className="px-6 py-2 font-raleway font-semibold text-xs uppercase tracking-wider">
        {label}
      </div>
    </Link>
  );
};

export default NavButton;
