// TYPES
import { IconNames } from "@/components/atomic/icon/iconNames.types";

// COMPONENTS
import { Icon } from "@/components/atomic";
import { ChangeEvent, useState } from "react";

interface ISearch {
  testID?: string;
}

const Search = ({ testID = "" }: ISearch) => {
  const [isInputVisible, setIsInputVisible] = useState<boolean>(false);
  const [searchParam, setSearchParam] = useState<string>("");

  const toggleInputVisibility = () => {
    setIsInputVisible((v) => !v);
  };

  const handleSearchInput = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchParam(event.target.value);
    console.log(searchParam);
    
  };

  return (
    <div className={`my-1 flex flex-row justify-between items-center`}>
      <input
        className={`flex-1 ${
          isInputVisible
            ? "w-full pointer-events-auto"
            : "w-0 pointer-events-none"
        } transition-all duration-300 bg-transparent border-b-2 text-white`}
        onChange={handleSearchInput}
        value={searchParam}
      />

      <button
        className={`relative ml-1 p-2 rounded-full transition-colors duration-150 hover:bg-secondary-500`}
        data-testid={testID}
        onClick={toggleInputVisibility}
      >
        <Icon name={IconNames.search} color="light" />
      </button>
    </div>
  );
};

export default Search;
