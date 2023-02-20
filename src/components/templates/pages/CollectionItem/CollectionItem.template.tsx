// COMPONENTS
import { ActivityIndicator, Image, Page } from "@/components/atomic";
import { Heading, Text } from "@/components/atomic/typography";
import { APIErrorMessage, Button } from "@/components/integrated";
import { useCartContext } from "@/contexts";

// UTILS
import { numberUtils } from "@/utils";
import { ApolloError } from "@apollo/client";

interface ICollectionItemTemplate {
  description: string;
  name: string;
  price: number;
  uri: string;
  addToBagClick: () => void;
  removeFromBagClick: () => void;
  loading: boolean;
  error: ApolloError | undefined;
  refetch: () => void;
}

const CollectionItemTemplate = ({
  description,
  name,
  price,
  uri,
  addToBagClick = () => {},
  removeFromBagClick = () => {},
  error,
  loading,
  refetch,
}: ICollectionItemTemplate) => {
  const { cartItems, isCartItemVisible } = useCartContext();

  return (
    <Page>
      {name && description && price && uri && (
        <div
          className={`flex flex-row gap-20 ${
            isCartItemVisible ? "-z-10" : "z-0"
          } `}
        >
          <div className={`overflow-hidden rounded-3xl flex-1`}>
            <Image
              src={uri}
              alt={name}
              className={`w-full aspect-video rounded-3xl object-none object-center opacity-90`}
            />
          </div>
          <div className="flex flex-col flex-1 justify-between">
            <div>
              <Heading title={name} variant="h2" />
              <div className={`flex flex-col gap-1 my-6`}>
                <Text copy={"description"} uppercase size="xs" />
                <Text copy={description} className={`mt-1`} />
              </div>
            </div>

            <div className={`flex flex-row items-center gap-6`}>
              <div
                className={`flex lex-row justify-between items-baseline gap-1`}
              >
                <Text
                  copy={`${numberUtils.convertNumberToLocaleCurrency(price)}`}
                  size="3xl"
                />
                <Text copy={`/6pcs`} bold />
              </div>
              <Button
                variant="secondary"
                label="remove from bag"
                onClick={removeFromBagClick}
                className={`z-10`}
                disabled={false}
              />
              <Button
                variant="primary"
                label="add to bag"
                onClick={addToBagClick}
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
