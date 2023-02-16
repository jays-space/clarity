// ROUTER
import { getNavLinks } from "@/router/utils.router";

// COMPONENTS
import { NavButton } from "@/components/atomic";

const NavBarButtons = () => {
  return (
    <div className="flex flex-1 flex-row justify-between items-center">
      <div className="flex flex-row">
        {getNavLinks().map(({ label, path }) => (
          <NavButton key={path} label={label} path={path} />
        ))}
      </div>
    </div>
  );
};

export default NavBarButtons;
