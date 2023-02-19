// COMPONENTS
import { Logo } from "@components/atomic";
import { NavBarButtons, CartAndSearchContainer } from "@components/integrated";

const NavBar = () => {
  return (
    <nav className="h-16 flex flex-grow-0 flex-row justify-between items-center">
      <Logo />

      <div className="flex flex-1 flex-row justify-between items-center">
        <NavBarButtons />
        <CartAndSearchContainer />
      </div>
    </nav>
  );
};

export default NavBar;
