interface ILogo {
  setWidth?: boolean;
  variant?: "dark" | "light";
}

const Logo = ({ setWidth = true, variant = "dark" }: ILogo) => {
  return (
    <span
      className={`font-cursive text-5xl text ${
        setWidth ? "w-5/12" : "w-full flex justify-center items-center"
      } ${variant === "dark" ? "text-text" : "text-white"}`}
    >
      The Cupcake Factory
    </span>
  );
};

export default Logo;
