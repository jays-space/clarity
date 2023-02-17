// TEMPLATES
import { Page } from "@/components/atomic";
import { CollectionItemTemplate } from "@/components/templates/pages/CollectionItem";
import { useCartContext } from "@/contexts";

// MOCK
import { CollectionItemPageMock } from "@/mock/CollectionItemPage.mock";
import { CartItemType } from "@/types";

const CollectionItemPage = () => {
  const { setCartItems, cartItems } = useCartContext();

  const onAddToBagClick = (cartItemToAdd: CartItemType) => {
    //looks through the currentCartItems array of objects to find an instance where cart ids match. If no match, returns undefined
    setCartItems((currentCartItems) => {
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
    });
  };

  const onRemoveFromBagClick = (cartItemToRemove: CartItemType) => {
    setCartItems((currentCartItems) => {
      const existingCartItem = cartItems.find(
        (cartItem) => cartItem.id === cartItemToRemove.id
      );

      if (existingCartItem?.quantity === 1) {
        return cartItems.filter(
          (cartItem) => cartItem.id !== cartItemToRemove.id
        );
      }

      return cartItems.map((cartItem) =>
        cartItem.id === cartItemToRemove.id
          ? { ...cartItem, quantity: cartItem.quantity - 1 }
          : cartItem
      );
    });
  };

  const { description, name, price, url, quantity, id, units } =
    CollectionItemPageMock;

  return (
    <Page>
      <CollectionItemTemplate
        description={description}
        name={name}
        price={price}
        uri={url}
        addToBagClick={() =>
          onAddToBagClick({ id, name, price, quantity, url, units })
        }
        removeFromBagClick={() =>
          onRemoveFromBagClick({ id, name, price, quantity, url, units })
        }
      />
    </Page>
  );
};

export default CollectionItemPage;
