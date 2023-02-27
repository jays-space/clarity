import { useState } from "react";
import ClickAwayListener from "react-click-away-listener";

// REDUX
import { useAppDispatch, useAppSelector } from "@/store/hooks";

// COMPONENTS
import { Cart } from "./cart";
import { Search } from "./search";
import { setCartVisibilityHidden } from "@/store/modules/cart/cart.slice";
import { clearSearchResults } from "@/store/modules/search/search.slice";

interface ICartAndSearchContainer {
  testID?: string;
}

const CartAndSearchContainer = ({
  testID = "cart-and-search-container",
}: ICartAndSearchContainer) => {
  const dispatch = useAppDispatch();
  const cartItems = useAppSelector((state) => state.cart.items);

  const [isInputVisible, setIsInputVisible] = useState<boolean>(false);
  const [searchParam, setSearchParam] = useState<string>("");

  const handleHide = () => {
    dispatch(setCartVisibilityHidden());
    dispatch(clearSearchResults());
    setIsInputVisible(false);
    setSearchParam("");
  };

  return (
    <ClickAwayListener onClickAway={handleHide}>
      <div
        className="fixed top-3 right-8 flex flex-row justify-between items-center bg-primary-300 gap-4 rounded-2xl px-4 py-1 drop-shadow-[3px_5px_4px_rgba(240,171,252,0.7)] !opacity-100"
        data-testid={testID}
      >
        {/* search component */}
        <Search
          inputProps={{ setIsInputVisible, isInputVisible }}
          searchProps={{ searchParam, setSearchParam }}
        />

        {/* cart component */}
        <Cart
          cartItems={cartItems}
          searchSetterProps={{
            setIsSearchInputVisible: setIsInputVisible,
            setSearchParam,
          }}
        />
      </div>
    </ClickAwayListener>
  );
};

export default CartAndSearchContainer;
