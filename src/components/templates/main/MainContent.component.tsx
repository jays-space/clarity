import { Outlet } from "react-router-dom";

const MainContent = () => {
  return (
    <main className="flex flex-col flex-auto justify-center items-center">
      <Outlet />
    </main>
  );
};

export default MainContent;
