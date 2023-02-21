// COMPONENTS
import { Button } from "@components/integrated";
import { CartItem } from "./cartItem";
import { CartItemType } from "@/types";
import { useAppDispatch } from "@/store/hooks";
import { toggleCartVisibility } from "@/store/modules/cart/cart.slice";

interface ICartDropdown {
  cartItems: CartItemType[];
}

const CartDropdown = ({ cartItems }: ICartDropdown) => {
  const dispatch = useAppDispatch();

  return (
    <div
      className={`absolute w-80 h-[540px] flex flex-col p-5 border-2 border-secondary-600 bg-white top-16 right-0 z-50`}
    >
      <div className="h-full flex flex-col">
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <span className="empty-message">Your cart is empty</span>
        )}
      </div>

      <Button
        label="checkout"
        onClick={() => {
          // history.push("/checkout");
          dispatch(toggleCartVisibility());
        }}
      />
    </div>
  );
};

export default CartDropdown;
