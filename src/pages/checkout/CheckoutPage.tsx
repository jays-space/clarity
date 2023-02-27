import { Image, Page } from "@/components/atomic";
import { Heading, Text } from "@/components/atomic/typography";
import { Button } from "@/components/integrated";
import { routerConfig } from "@/router";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import {
  addItem,
  clearItemFromCart,
  removeItem,
} from "@/store/modules/cart/cart.slice";
import { useNavigate } from "react-router-dom";

const CheckoutPage = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const cartItems = useAppSelector((state) => state.cart.items);
  const selectCartItemsCount = cartItems.reduce(
    (accumulatedQuantity, cartItem) => accumulatedQuantity + cartItem.quantity,
    0
  );
  const selectCartItemsTotal = cartItems.reduce(
    (accumulatedPrice, cartItem) =>
      accumulatedPrice + cartItem.quantity * cartItem.price,
    0
  );

  return (
    <Page>
      {selectCartItemsTotal <= 0 ? (
        <div className="min-h-screen flex flex-col justify-center items-center -mt-12">
          <Heading variant="h3" title="No items in cart" className="mb-4" />
          <Button
            variant="primary"
            label="shop cupcakes"
            onClick={() => navigate(routerConfig.CollectionsPage.path)}
          />
        </div>
      ) : (
        <div className="min-h-screen flex justify-center flex-col items-center">
          <div className="grid grid-cols-5 items-center justify-center self-center my-12 gap-y-8 mx-4">
            <Heading variant="h6" title="Product" className="text-center" />
            <Heading variant="h6" title="Description" className="text-center" />
            <Heading variant="h6" title="Quantity" className="text-center" />
            <Heading variant="h6" title="Price" className="text-center" />
            <Heading variant="h6" title="Remove" className="text-center" />

            {cartItems.map((cartItem) => (
              <>
                <div className="flex items-center justify-center">
                  <div className="rounded-2xl overflow-hidden w-20 aspect-square">
                    <Image
                      alt={cartItem.name}
                      src={cartItem.url}
                      className="object-cover"
                    />
                  </div>
                </div>

                <Text copy={cartItem.name} className="text-center" />

                <span className="flex flex-row justify-center items-center">
                  <div
                    className="flex flex-row justify-center items-start cursor-pointer"
                    onClick={() => dispatch(removeItem(cartItem))}
                  >
                    &#10094;
                  </div>
                  <Text copy={cartItem.quantity.toString()} className="mx-3" />
                  <div
                    className="flex flex-row justify-center items-start cursor-pointer"
                    onClick={() => dispatch(addItem(cartItem))}
                  >
                    &#10095;
                  </div>
                </span>

                <Text copy={`R ${cartItem.price}`} className="text-center" />

                <div
                  className="cursor-pointer flex justify-center items-center"
                  onClick={() => dispatch(clearItemFromCart(cartItem))}
                >
                  &#10005;
                </div>
              </>
            ))}
          </div>

          <div className="my-2 mb-6 flex justify-end w-full">
            <Heading variant="h4" title={`TOTAL: R${selectCartItemsTotal}`} />
          </div>

          <Button
            variant="primary"
            label={`Pay R${selectCartItemsTotal}`}
            onClick={() => alert(`Paid R${selectCartItemsTotal}`)}
          />
        </div>
      )}
    </Page>
  );
};

export default CheckoutPage;
