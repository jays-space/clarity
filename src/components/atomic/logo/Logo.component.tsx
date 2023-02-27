import { routerConfig } from "@/router";
import { useNavigate } from "react-router-dom";

interface ILogo {
  setWidth?: boolean;
  variant?: "dark" | "light";
}

const Logo = ({ setWidth = true, variant = "dark" }: ILogo) => {
  const navigate = useNavigate();
  return (
    <span
      className={`font-cursive text-2xl text ${
        setWidth ? "w-5/12" : "w-full flex justify-center items-center"
      } ${
        variant === "dark" ? "text-text" : "text-white"
      } cursor-pointer underline decoration-2 underline-offset-4 decoration-white hover:decoration-primary-400 transition duration-150`}
      onClick={() => navigate(routerConfig.HomePage.path)}
    >
      The Cupcake Factory
    </span>
  );
};

export default Logo;
