// COMPONENTS
import { Button } from "@components/integrated";
import { CartItem } from "./cartItem";
import { CartItemType } from "@/types";
import { useAppDispatch } from "@/store/hooks";
import { toggleCartVisibility } from "@/store/modules/cart/cart.slice";
import { Text } from "@/components/atomic/typography";
import { useNavigate } from "react-router";

interface ICartDropdown {
  cartItems: CartItemType[];
  total: number;
}

const CartDropdown = ({ cartItems, total }: ICartDropdown) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate()

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

      <Text copy={`Basket Total: R${total}`} bold size="lg" className="mb-2" />

      <div className="flex flex-row justify-center items-center">
        <Button
          label="checkout"
          onClick={() => {
            navigate("/checkout");
            dispatch(toggleCartVisibility());
          }}
        />
      </div>
    </div>
  );
};

export default CartDropdown;
