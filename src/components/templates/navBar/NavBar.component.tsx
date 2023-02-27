// COMPONENTS
import { Logo } from "@components/atomic";
import { NavBarButtons, CartAndSearchContainer } from "@components/integrated";

const NavBar = () => {
  return (
    <nav className="h-16 flex flex-grow-0 flex-row justify-between items-center z-50">
      <Logo />

      <div className="relative flex flex-1 flex-row justify-between items-center">
        {/* <NavBarButtons /> */}
        <CartAndSearchContainer />
      </div>
    </nav>
  );
};

export default NavBar;
