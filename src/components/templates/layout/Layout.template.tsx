// COMPONENTS
import { Footer, MainContent, NavBar } from "@/components/templates";

const Layout = () => {
  return (
    <div className="px-10 flex flex-col min-h-screen">
      <NavBar />
      <MainContent />
      <Footer />
    </div>
  );
};

export default Layout;
