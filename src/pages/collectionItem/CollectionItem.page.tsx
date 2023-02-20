// TEMPLATES
import { GetProductQuery, GetProductQueryVariables } from "@/API";
import { Page } from "@/components/atomic";
import { CollectionItemTemplate } from "@/components/templates/pages/CollectionItem";
import { useCartContext } from "@/contexts";

// MOCK
import { CollectionItemPageMock } from "@/mock/CollectionItemPage.mock";
import { CartItemType } from "@/types";
import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import { getCupcake } from "../collections/gql/queries.gql";

const CollectionItemPage = () => {
  const { setCartItems, cartItems } = useCartContext();
  const params = useParams();

  console.log(params);
  

  const { data, loading, error, refetch } = useQuery<
    GetProductQuery,
    GetProductQueryVariables
  >(getCupcake, { variables: { id: params.cupcakeID as string } });

  const cupcake = data?.getProduct;

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

  return (
    <Page>
      <CollectionItemTemplate
        description={cupcake?.description as string}
        name={cupcake?.name as string}
        price={cupcake?.price as number}
        uri={cupcake?.url as string}
        addToBagClick={() =>
          onAddToBagClick({
            id: cupcake?.id as string,
            name: cupcake?.name as string,
            price: cupcake?.price as number,
            quantity: cupcake?.pcs as number,
            url: cupcake?.url as string,
            units: cupcake?.units as number,
          })
        }
        removeFromBagClick={() =>
          onRemoveFromBagClick({
            id: cupcake?.id as string,
            name: cupcake?.name as string,
            price: cupcake?.price as number,
            quantity: cupcake?.pcs as number,
            url: cupcake?.url as string,
            units: cupcake?.units as number,
          })
        }
        loading={loading}
        error={error}
        refetch={refetch}
      />
    </Page>
  );
};

export default CollectionItemPage;
