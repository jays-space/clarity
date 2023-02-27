import { useNavigate } from "react-router-dom";

// TYPES
import { CupcakeType } from "@/types";
import { Text } from "@/components/atomic/typography";
import { useAppDispatch } from "@/store/hooks";
import {
  clearSearchResults,
  toggleSearchVisibility,
} from "@/store/modules/search/search.slice";

interface ISearchDropdown {
  searchResults: CupcakeType[];
  setIsInputVisible: React.Dispatch<React.SetStateAction<boolean>>
  setSearchParam: React.Dispatch<React.SetStateAction<string>>
}

const SearchDropdown = ({ searchResults, setIsInputVisible, setSearchParam }: ISearchDropdown) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleSearchItemSelect = (item: CupcakeType) => {
    dispatch(clearSearchResults());
    dispatch(toggleSearchVisibility(false));
    setIsInputVisible(false)
    setSearchParam("")
    navigate(`/cupcakes/${item?.Collection?.name}/${item?.id}`);
  };

  if (searchResults.length <= 0) return null;
  return (
    <div
      className={`absolute w-80 flex flex-col p-3 border-2 border-primary-300 bg-white top-12 -right-14 z-50`}
    >
      <div className="h-full flex flex-col overflow-y-auto">
        {searchResults.map((item) => {
          return (
            <div
              onClick={() => handleSearchItemSelect(item)}
              className={`flex flex-col justify-center items-start py-2 px-2 my-1 bg-white hover:bg-fuchsia-50 cursor-pointer transform-color duration-150`}
            >
              <Text
                copy={item?.name as string}
                capitalize
                bold
                size="sm"
                className="text-opacity-80"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SearchDropdown;
