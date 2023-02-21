import { ReactNode, createContext, useContext, useState } from "react";
import { CartContextType } from "./CartContext.types";
import { CartItemType } from "@/types";

const initialCartItems: CartItemType[] = [];

export const CartContext = createContext<CartContextType>({
  cartItems: initialCartItems,
  setCartItems: () => {},
  isCartItemVisible: false,
  setIsCartItemVisible: () => {},
});

const CartContextProvider = ({ children }: { children: ReactNode }) => {
  const [cartItems, setCartItems] = useState<CartItemType[]>([]);
  const [isCartItemVisible, setIsCartItemVisible] = useState<boolean>(false);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        setCartItems,
        isCartItemVisible,
        setIsCartItemVisible,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
export const useCartContext = () => useContext(CartContext);
