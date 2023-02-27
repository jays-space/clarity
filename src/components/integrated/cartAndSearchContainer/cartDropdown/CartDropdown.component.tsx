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
  const navigate = useNavigate();

  return (
    <div
      className={`absolute w-80 h-[540px] flex flex-col p-3 border-2 border-primary-300 bg-white top-16 right-0 z-50`}
    >
      <div className="h-full flex flex-col">
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <div className="w-full h-full flex justify-center items-center">
            <Text copy="Your cart is empty" />
          </div>
        )}
      </div>

      <Text
        copy={`Basket Total: R${total.toFixed(2)}`}
        bold
        size="lg"
        className="mb-2 font-cursive tracking-wider text-center"
      />

      <div className="flex flex-row justify-center items-center">
        <Button
          variant="primary"
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
