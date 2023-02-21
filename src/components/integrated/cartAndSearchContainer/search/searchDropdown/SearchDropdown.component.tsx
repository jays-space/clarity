import Fuse from "fuse.js";
import { Link } from "react-router-dom";

// TYPES
import { CupcakeType } from "@/types";
import { Text } from "@/components/atomic/typography";

interface ISearchDropdown {
  searchResults: Fuse.FuseResult<CupcakeType | null>[];
}

const SearchDropdown = ({ searchResults }: ISearchDropdown) => {
  return (
    <div
      className={`absolute w-80 h-[540px] flex flex-col p-5 border-2 border-secondary-600 bg-white top-12 -right-14 z-50`}
    >
      <div className="h-full flex flex-col overflow-x-scroll">
        {searchResults.length > 0 ? (
          searchResults.map(({ item }) => {
            return (
              <Link
                to={`/cupcakes/${item?.Collection?.name}/${item?.id}`}
                className={`flex flex-col justify-center items-start py-2 px-1 my-1 hover:bg-gray-100 cursor-pointer`}
              >
                <Text
                  copy={item?.name as string}
                  capitalize
                  bold
                  size="sm"
                  className="text-opacity-80"
                />
              </Link>
            );
          })
        ) : (
          <span className="empty-message">Your cart is empty</span>
        )}
      </div>
    </div>
  );
};

export default SearchDropdown;
