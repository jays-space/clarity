// COMPONENTS
import { Cart } from "./cart";
import { Search } from "./search";

interface ICartAndSearchContainer {
  testID?: string;
}

const CartAndSearchContainer = ({
  testID = "cart-and-search-container",
}: ICartAndSearchContainer) => {
  return (
    <div
      className="flex flex-row justify-between items-center bg-secondary-600 gap-4 rounded-2xl px-4 py-1 drop-shadow-lg"
      data-testid={testID}
    >
      {/* search component */}
      <Search />

      {/* cart component */}
      <Cart cartItems={0} />
    </div>
  );
};

export default CartAndSearchContainer;
