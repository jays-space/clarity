import { Image } from "@/components/atomic";
import { Text } from "@/components/atomic/typography";
import { CartItemType } from "@/types";

interface ICartItem {
  item: CartItemType;
}

const CartItem = ({ item: { name, url, price, quantity } }: ICartItem) => (
  <div className="flex flex-row justify-between my-2">
    <Image alt={name} src={url} className="h-12 aspect-square rounded-md" />

    <div className="ml-4">
      <Text copy={`${name}: `} className="mr-2" />
      <Text copy={`${quantity} x R${price}`} bold />
    </div>
  </div>
);

export default CartItem;
