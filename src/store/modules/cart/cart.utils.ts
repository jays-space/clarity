import { CartItemType } from "@/types";

export const addItemToCart = (
  currentCartItems: CartItemType[],
  cartItemToAdd: CartItemType
) => {
  const existingCartItem = currentCartItems.find(
    (cartItem) => cartItem.id === cartItemToAdd.id
  );

  // if there is an existing cart item, create a new array of objects. Where a cartItems id === the items to add's id, add 1 to quantity. Where a cartItems id !== the items to add's id, create a quantity and add 1 to it.
  if (existingCartItem) {
    return currentCartItems.map((cartItem) =>
      cartItem.id === cartItemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  } else {
    return [...currentCartItems, { ...cartItemToAdd, quantity: 1 }];
  }
};

export const removeItemFromCart = (
  currentCartItems: CartItemType[],
  cartItemToRemove: CartItemType
) => {
  const existingCartItem = currentCartItems.find(
    (cartItem) => cartItem.id === cartItemToRemove.id
  );

  if (existingCartItem?.quantity === 1) {
    return currentCartItems.filter(
      (cartItem) => cartItem.id !== cartItemToRemove.id
    );
  }

  return currentCartItems.map((cartItem) =>
    cartItem.id === cartItemToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};
