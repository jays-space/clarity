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
}

const SearchDropdown = ({ searchResults }: ISearchDropdown) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleSearchItemSelect = (item: CupcakeType) => {
    dispatch(clearSearchResults());
    dispatch(toggleSearchVisibility(false));
    navigate(`/cupcakes/${item?.Collection?.name}/${item?.id}`);
  };

  if (searchResults.length <= 0) return null;
  return (
    <div
      className={`absolute w-80 flex flex-col p-5 border-2 border-secondary-600 bg-white top-12 -right-14 z-50`}
    >
      <div className="h-full flex flex-col overflow-y-auto">
        {searchResults.map((item) => {
          return (
            <div
              onClick={() => handleSearchItemSelect(item)}
              className={`flex flex-col justify-center items-start py-2 px-1 my-1 hover:bg-gray-100 cursor-pointer`}
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
