import { CartItemType } from "@/types";

export type CartContextType = {
  cartItems: CartItemType[];
  setCartItems: React.Dispatch<React.SetStateAction<CartItemType[]>>;
  isCartItemVisible: boolean;
  setIsCartItemVisible: React.Dispatch<React.SetStateAction<boolean>>;
};
