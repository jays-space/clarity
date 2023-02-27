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
      className={`group flex aspect-square justify-center items-center bg-gradient-to-b from-primary-300 via-fuchsia-300 to-purple-100
      rounded-3xl even:mx-4 p-2`}
      onClick={() => navigate(path)}
    >
      <div
        className={`bg-white w-full h-full rounded-2xl flex aspect-square justify-center items-center p-8 group-hover:bg-opacity-100 bg-opacity-0 transition duration-300`}
      >
        <Text
          copy={label}
          className={`text-text`}
          capitalize
          bold
        />
      </div>
    </button>
  );
};

export default StoreOptionPicker;
