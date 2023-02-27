import { Image } from "@/components/atomic";
import { Text } from "@/components/atomic/typography";
import { useAppDispatch } from "@/store/hooks";
import { toggleCartVisibility } from "@/store/modules/cart/cart.slice";
import { CartItemType } from "@/types";
import { useNavigate } from "react-router-dom";

interface ICartItem {
  item: CartItemType;
}

const CartItem = ({ item: { name, url, price, quantity, id } }: ICartItem) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleCartItemSelect = (id: string) => {
    dispatch(toggleCartVisibility());
    navigate(`/cupcakes/cupcake/${id}`);
  };

  return (
    <div
      className="flex flex-row gap-x-4 items-center my-2 bg-white hover:bg-fuchsia-50 cursor-pointer transform-color duration-150 px-2 py-1"
      onClick={() => handleCartItemSelect(id)}
    >
      <Image alt={name} src={url} className="h-12 aspect-square rounded-md" />

      <div className="flex flex-col">
        <Text copy={`${name}`} />
        <Text copy={`${quantity} x R${price}`} bold />
      </div>
    </div>
  );
};

export default CartItem;
