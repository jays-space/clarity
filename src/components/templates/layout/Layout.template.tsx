import { Outlet } from "react-router-dom";

// COMPONENTS
import { Footer, NavBar } from "@/components/templates";

const Layout = () => {
  return (
    <div className="px-10">
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
