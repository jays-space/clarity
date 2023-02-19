import { Text } from "@typography";
import { useNavigate } from "react-router";

interface IStoreOptionPicker {
  label: string;
  path: string;
}

const StoreOptionPicker = ({ label, path }: IStoreOptionPicker) => {
  const navigate = useNavigate();
  return (
    <button
      className={`group flex aspect-square justify-center items-center p-8  bg-white hover:bg-primary-700 border-4 border-primary-700 rounded-3xl even:mx-4`}
      onClick={() => navigate(path)}
    >
      <Text copy={label} className={`text-text group-hover:text-white group-hover:bold transition-all duration-300`} capitalize />
    </button>
  );
};

export default StoreOptionPicker;
