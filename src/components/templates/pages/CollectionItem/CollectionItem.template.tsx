import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { addItem, removeItem } from "@/store/modules/cart/cart.slice";

// COMPONENTS
import { ActivityIndicator, Image, Page } from "@/components/atomic";
import { Heading, Text } from "@/components/atomic/typography";
import { APIErrorMessage, Button } from "@/components/integrated";

// UTILS
import { numberUtils } from "@/utils";
import { ApolloError } from "@apollo/client";
import { CupcakeType } from "@/types";

interface ICollectionItemTemplate {
  cupcake: CupcakeType;
  loading: boolean;
  error: ApolloError | undefined;
  refetch: () => void;
}

const CollectionItemTemplate = ({
  cupcake,
  error,
  loading,
  refetch,
}: ICollectionItemTemplate) => {
  const dispatch = useAppDispatch();
  const isCartItemVisible = useAppSelector((state) => state.cart.isVisible);
  const isSearchVisible = useAppSelector((state) => state.search.isVisible);

  return (
    <Page>
      {cupcake && (
        <div
          className={`flex flex-row gap-20 ${
            isCartItemVisible || isSearchVisible ? "-z-10" : "z-0"
          } `}
        >
          <div className={`overflow-hidden rounded-3xl flex-1`}>
            <Image
              src={cupcake?.url}
              alt={cupcake?.name}
              className={`w-full aspect-video rounded-3xl object-none object-center opacity-90`}
            />
          </div>
          <div className="flex flex-col flex-1 justify-between">
            <div>
              <Heading title={cupcake?.name} variant="h2" />
              <div className={`flex flex-col gap-1 my-6`}>
                <Text copy={"description"} uppercase size="xs" />
                <Text copy={cupcake?.description} className={`mt-1`} />
              </div>
            </div>

            <div className={`flex flex-row items-center gap-6`}>
              <div
                className={`flex lex-row justify-between items-baseline gap-1`}
              >
                <Text
                  copy={`${numberUtils.convertNumberToLocaleCurrency(
                    cupcake?.price
                  )}`}
                  size="3xl"
                />
                <Text copy={`/6pcs`} bold />
              </div>
              <Button
                variant="secondary"
                label="remove from bag"
                onClick={() => dispatch(removeItem(cupcake))}
                className={`z-10`}
                disabled={false}
              />
              <Button
                variant="primary"
                label="add to bag"
                onClick={() => dispatch(addItem(cupcake))}
                className={`z-10`}
              />
            </div>
          </div>
        </div>
      )}

      {loading && <ActivityIndicator />}
      {error && (
        <APIErrorMessage
          title={error.name}
          message={error.message}
          onRetry={() => refetch()}
        />
      )}
    </Page>
  );
};

export default CollectionItemTemplate;
