import Fuse from "fuse.js";

// TYPES
import { IconNames } from "@/components/atomic/icon/iconNames.types";

// COMPONENTS
import { Icon } from "@/components/atomic";
import { ChangeEvent, useState } from "react";
import { gql, useQuery } from "@apollo/client";
import { ListProductsCartsQueryVariables, ListProductsQuery } from "@/API";
import { CupcakeType } from "@/types";
import { SearchDropdown } from "./searchDropdown";
import { useCartContext } from "@/contexts";

interface ISearch {
  testID?: string;
}

export const listProducts = gql`
  query ListProducts(
    $filter: ModelProductFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProducts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        price
        units
        pcs
        url
        Collection{
          id
          name
        }
        collectionID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;

const Search = ({ testID = "" }: ISearch) => {
  const { setIsCartItemVisible, isCartItemVisible } = useCartContext();

  const [isInputVisible, setIsInputVisible] = useState<boolean>(false);
  const [searchParam, setSearchParam] = useState<string>("");
  const [searchResults, setSearchResults] =
    useState<Fuse.FuseResult<CupcakeType | null>[]>();

  const toggleInputVisibility = () => {
    setIsInputVisible((v) => !v);
  };

  const { data } = useQuery<ListProductsQuery, ListProductsCartsQueryVariables>(
    listProducts
  );

  const allCupcakes = data?.listProducts?.items;

  const handleSearchInput = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchParam(event.target.value);
    setIsCartItemVisible(event.target.value.length > 0 ? true : false)

    const options = {
      includeScore: true,
      // Search in `name` and in `description` per cupcake
      keys: ["name", "description"],
    };

    if (!allCupcakes) return;
    const fuse = new Fuse(allCupcakes || [], options);
    const results = fuse.search(event.target.value);
    setSearchResults(results);
  };

  return (
    <div className={`relative my-1 flex flex-row justify-between items-center`}>
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

      {searchResults && <SearchDropdown searchResults={searchResults} />}
    </div>
  );
};

export default Search;
