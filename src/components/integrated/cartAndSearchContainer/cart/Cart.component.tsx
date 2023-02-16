// TYPES
import { IconNames } from "@/components/atomic/icon/iconNames.types";

// COMPONENTS
import { Icon } from "@/components/atomic";
import { Text } from "@/components/atomic/typography";

interface ICart {
  cartItems: number;
  testID?: string;
}

const Cart = ({ cartItems, testID = "" }: ICart) => {
  return (
    <button
      className="relative p-2 my-1 rounded-full hover:bg-secondary-500 transition-colors duration-150"
      data-testid={testID}
    >
      <Icon name={IconNames.cart} color="light" />

      <div className="absolute flex -bottom-1 -right-1 w-5 h-5 bg-gray-800 text-white items-center justify-center rounded-full">
        <Text copy={cartItems.toString()} size="xs" />
      </div>
    </button>
  );
};

export default Cart;
