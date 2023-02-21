import { Image, Page } from "@/components/atomic";
import { Text } from "@/components/atomic/typography";
import { Button } from "@/components/integrated";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import {
  addItem,
  clearItemFromCart,
  removeItem,
} from "@/store/modules/cart/cart.slice";

const CheckoutPage = () => {
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
      <div className="flex flex-col items-center w-8/12 my-12">
        <div className="flex flex-row justify-around w-full">
          <div className="header-block">
            <span>Product</span>
          </div>
          <div className="header-block">
            <span>Description</span>
          </div>
          <div className="header-block">
            <span>Quantity</span>
          </div>
          <div className="header-block">
            <span>Price</span>
          </div>
          <div className="header-block">
            <span>Remove</span>
          </div>
        </div>

        {cartItems.map((cartItem) => (
          <div
            key={cartItem.id}
            className="flex flex-row justify-around w-full"
          >
            <Image
              alt={cartItem.name}
              src={cartItem.url}
              className="w-16 aspect-square"
            />
            <Text copy={cartItem.name} className="w-2/12" />

            <span className="flex flex-row w-2/12">
              <div
                className="flex flex-row justify-center items-start cursor-pointer"
                onClick={() => dispatch(removeItem(cartItem))}
              >
                &#10094;
              </div>
              <span className="mx-3">{cartItem.quantity}</span>
              <div
                className="flex flex-row justify-center items-start cursor-pointer"
                onClick={() => dispatch(addItem(cartItem))}
              >
                &#10095;
              </div>
            </span>

            <span className="flex flex-row w-2/12">R {cartItem.price}</span>

            <div className="cursor-pointer" onClick={() => dispatch(clearItemFromCart(cartItem))}>
              &#10005;
            </div>
          </div>
        ))}

        <div className="my-2">
          <span>TOTAL: R {selectCartItemsTotal}</span>
        </div>
        
        <Button
          variant="primary"
          label={`Pay R${selectCartItemsTotal}`}
          onClick={() => alert(`Paid R${selectCartItemsTotal}`)}
        />
      </div>
    </Page>
  );
};

export default CheckoutPage;
