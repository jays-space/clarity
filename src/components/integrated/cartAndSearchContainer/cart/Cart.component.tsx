// TYPES
import { IconNames } from "@/components/atomic/icon/iconNames.types";

// COMPONENTS
import { Icon } from "@/components/atomic";
import { Text } from "@/components/atomic/typography";
import { CartDropDown } from "../cartDropdown";
import { CartItemType } from "@/types";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { toggleCartVisibility } from "@/store/modules/cart/cart.slice";

interface ICart {
  cartItems: CartItemType[];
  testID?: string;
}

const Cart = ({ cartItems, testID = "" }: ICart) => {
  const dispatch = useAppDispatch();
  const isCartItemVisible = useAppSelector((state) => state.cart.isVisible);

  return (
    <>
      <button
        className="relative p-2 my-1 rounded-full hover:bg-secondary-500 transition-colors duration-150 z-50"
        data-testid={testID}
        onClick={() => dispatch(toggleCartVisibility())}
      >
        <Icon name={IconNames.cart} color="light" />

        <div className="absolute flex -bottom-1 -right-1 w-5 h-5 bg-gray-800 text-white items-center justify-center rounded-full">
          <Text copy={cartItems.length.toString()} size="xs" color="light" />
        </div>
      </button>

      {isCartItemVisible && <CartDropDown cartItems={cartItems} />}
    </>
  );
};

export default Cart;
