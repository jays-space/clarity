import { ApolloError } from "@apollo/client";
import { useLocation, useNavigate } from "react-router-dom";

// COMPONENTS
import { ActivityIndicator, Image, Page } from "@/components/atomic";
import { Heading, Text } from "@/components/atomic/typography";
import { APIErrorMessage, Button } from "@/components/integrated";

// UTILS
import { numberUtils } from "@/utils";
import { useAppSelector } from "@/store/hooks";

interface IStoreCollectionItemPageTemplate {
  description: string;
  name: string;
  price: number;
  uri: string;
  loading: boolean;
  pcs: number;
  error: ApolloError | undefined;
  refetch: () => void;
}

const StoreCollectionItemPageTemplate = ({
  description,
  name,
  price,
  uri,
  error,
  loading,
  pcs,
  refetch,
}: IStoreCollectionItemPageTemplate) => {
  const isCartItemVisible = useAppSelector((state) => state.cart.isVisible);
  const isSearchVisible = useAppSelector((state) => state.search.isVisible);

  const navigate = useNavigate();
  const location = useLocation();

  return (
    <Page>
      {name && description && price && uri && (
        <div
          className={`flex flex-row gap-20 ${
            isCartItemVisible ||isSearchVisible ? "-z-10" : "z-0"
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

            <div className={`flex flex-row justify-between items-center gap-6`}>
              <div
                className={`flex lex-row justify-between items-baseline gap-1`}
              >
                <Text
                  copy={`${numberUtils.convertNumberToLocaleCurrency(price)}`}
                  size="3xl"
                />
                <Text copy={`/${pcs}pcs`} bold />
              </div>
              <Button
                variant="secondary"
                label="edit cupcake"
                onClick={() => navigate(`${location.pathname}/edit`)}
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

export default StoreCollectionItemPageTemplate;
