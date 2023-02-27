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

  const fillerText =
    "Incidunt tempore, autem voluptatem modi, eaque obcaecati asperiores officiis nulla nisi, ullam numquam!";

  return (
    <Page>
      {name && description && price && uri && (
        <div
          className={`flex flex-row items-center min-h-screen gap-8 -mt-24 ${
            isCartItemVisible || isSearchVisible ? "-z-10" : "z-0"
          } `}
        >
          <div className={`w-5/12 flex flex-col`}>
            <Heading title={name} variant="h2" />
            <Text copy={fillerText} size="xs" className={`mt-6`} />
            <div className={`flex flex-row items-center gap-6`}>
              <div className={`flex items-center gap-6 mt-8`}>
                <Button
                  variant="secondary"
                  label="edit cupcake"
                  onClick={() => navigate(`${location.pathname}/edit`)}
                  className={`z-10`}
                />

                <Heading
                  title={`${numberUtils.convertNumberToLocaleCurrency(
                    price
                  )}`}
                  variant="h3"
                />
              </div>
            </div>
          </div>

          <div
            className={`relative rounded-full w-3/12 max-h-[30rem] bg-gradient-to-b from-primary-300 via-fuchsia-300 to-purple-100`}
          >
            {/* <div className="w-full h-[30rem]" /> */}
            <Image
              src={uri}
              alt={name}
              className={`absolute left-0 top-1/2 -translate-y-1/2 w-full aspect-square rounded-full object-cover opacity-90`}
            />
          </div>

          <div className={`flex flex-col gap-1 my-6 w-5/12`}>
            <Text copy={"description"} uppercase size="xs" bold />
            <Text copy={description} />

            <Text
              copy={"ingredients"}
              uppercase
              size="xs"
              bold
              className={`mt-6`}
            />
            <Text copy={fillerText} />

            <Heading
              title={`${pcs}pcs`}
              variant="h2"
              className={`mt-6 !text-primary-500`}
            />
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
