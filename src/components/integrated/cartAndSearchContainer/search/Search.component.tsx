import Fuse from "fuse.js";

// TYPES
import { IconNames } from "@/components/atomic/icon/iconNames.types";

// COMPONENTS
import { Icon } from "@/components/atomic";
import { ChangeEvent, useEffect, useState } from "react";
import { gql, useQuery } from "@apollo/client";
import { ListProductsCartsQueryVariables, ListProductsQuery } from "@/API";
import { CupcakeType } from "@/types";
import { SearchDropdown } from "./searchDropdown";
import { useCartContext } from "@/contexts";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import {
  search,
  setSearchDataSet,
  toggleSearchVisibility,
} from "@/store/modules/search/search.slice";

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
        Collection {
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
  const searchResults = useAppSelector((state) => state.search.results);
  const dispatch = useAppDispatch();

  const [isInputVisible, setIsInputVisible] = useState<boolean>(false);
  const [searchParam, setSearchParam] = useState<string>("");

  const toggleInputVisibility = () => {
    setIsInputVisible((v) => !v);
  };

  const { data } = useQuery<ListProductsQuery, ListProductsCartsQueryVariables>(
    listProducts
  );

  const allCupcakes = data?.listProducts?.items;

  useEffect(() => {
    dispatch(setSearchDataSet(allCupcakes));
  }, [allCupcakes, dispatch]);

  useEffect(() => {
    if (searchResults.length > 0) {
      dispatch(toggleSearchVisibility(true));
    } else {
      dispatch(toggleSearchVisibility(false));
    }
  }, [searchResults, dispatch]);

  useEffect(() => {
    if (searchResults.length <= 0) {
      setSearchParam("");
      setIsInputVisible(false);
    }
  }, [searchResults]);

  const handleSearchInput = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchParam(event.target.value);
    dispatch(search(event.target.value));
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
