import { Image } from "@/components/atomic";
import { CartItemType } from "@/types";

interface ICartItem {
  item: CartItemType;
}

const CartItem = ({ item: { name, url, price, quantity } }: ICartItem) => (
  <div className="cart-item">
    <Image alt={name} src={url} className="w-12" />
    <div className="item-details">
      <span className="name">{name}</span>
      <span className="price">
        {quantity} x R{price}
      </span>
    </div>
  </div>
);

export default CartItem;
