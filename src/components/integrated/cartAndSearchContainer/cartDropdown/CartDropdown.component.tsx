// COMPONENTS
import { Button } from "@components/integrated";
import { CartItem } from "./cartItem";
import { CartItemType } from "@/types";
import { useCartContext } from "@/contexts";

interface ICartDropdown {
  cartItems: CartItemType[];
}

const CartDropdown = ({ cartItems }: ICartDropdown) => {
  const { setIsCartItemVisible } = useCartContext();

  return (
    <div
      className={`absolute w-80 h-[540px] flex flex-col p-5 border-2 border-secondary-600 bg-white top-16 right-0 z-50`}
    >
      <div className="h-full flex flex-col overflow-x-scroll">
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
          setIsCartItemVisible((v) => !v);
        }}
      />
    </div>
  );
};

export default CartDropdown;
