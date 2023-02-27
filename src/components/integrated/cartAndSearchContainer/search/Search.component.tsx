import { ChangeEvent, useEffect, useState, useRef } from "react";
import { gql, useQuery } from "@apollo/client";

// GQL
import { ListProductsCartsQueryVariables, ListProductsQuery } from "@/API";

// TYPES
import { IconNames } from "@/components/atomic/icon/iconNames.types";

// COMPONENTS
import { Icon } from "@/components/atomic";
import { SearchDropdown } from "./searchDropdown";

// REDUX
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import {
  clearSearchResults,
  search,
  setSearchDataSet,
  toggleSearchVisibility,
} from "@/store/modules/search/search.slice";
import { setCartVisibilityHidden } from "@/store/modules/cart/cart.slice";

interface ISearch {
  testID?: string;
  inputProps: {
    setIsInputVisible: React.Dispatch<React.SetStateAction<boolean>>;
    isInputVisible: boolean;
  };
  searchProps: {
    searchParam: string;
    setSearchParam: React.Dispatch<React.SetStateAction<string>>;
  };
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

const Search = ({
  testID = "",
  inputProps: { isInputVisible, setIsInputVisible },
  searchProps: { searchParam, setSearchParam },
}: ISearch) => {
  const searchResults = useAppSelector((state) => state.search.results);
  const dispatch = useAppDispatch();

  const inputRef = useRef<HTMLInputElement>(null);

  const toggleInputVisibility = () => {
    dispatch(setCartVisibilityHidden());
    setIsInputVisible((v) => !v);

    if (isInputVisible === false && searchResults.length > 0) {
      dispatch(clearSearchResults());
    }

    if (isInputVisible) {
      dispatch(toggleSearchVisibility(false));
      setSearchParam("");
    } else {
      dispatch(toggleSearchVisibility(true));
    }
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

  // useEffect(() => {
  //   if (searchParam === "") {
  //     setSearchParam("");
  //     setIsInputVisible(false);
  //   }
  // }, [searchParam]);

  useEffect(() => {
    if (isInputVisible) {
      inputRef.current?.focus();
    }
  }, [isInputVisible]);

  const handleSearchInput = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchParam(event.target.value);
    dispatch(search(event.target.value));
  };

  return (
    <div className={`relative my-1 flex flex-row justify-between items-center`}>
      <input
        ref={inputRef}
        className={`flex-1 ${
          isInputVisible
            ? "w-60 pointer-events-auto"
            : "w-0 pointer-events-none"
        } transition-width duration-300 bg-transparent border-b-2 border-white text-white outline-fuchsia-400`}
        onChange={handleSearchInput}
        value={searchParam}
      />

      <button
        className={`relative ml-1 p-2 rounded-full transition-colors duration-150 hover:bg-primary-200 hover:bg-opacity-80`}
        data-testid={testID}
        onClick={toggleInputVisibility}
      >
        <Icon name={IconNames.search} color="light" />
      </button>

      {(isInputVisible || searchParam) && (
        <SearchDropdown
          searchResults={searchResults}
          setIsInputVisible={setIsInputVisible}
          setSearchParam={setSearchParam}
        />
      )}
    </div>
  );
};

export default Search;
