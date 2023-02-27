import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { addItem } from "@/store/modules/cart/cart.slice";
import { ApolloError } from "@apollo/client";
import { CupcakeType } from "@/types";

// COMPONENTS
import { ActivityIndicator, Image } from "@/components/atomic";
import { Heading, Text } from "@/components/atomic/typography";
import { APIErrorMessage, Button } from "@/components/integrated";

// UTILS
import { numberUtils } from "@/utils";

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

  const fillerText =
    "Incidunt tempore, autem voluptatem modi, eaque obcaecati asperiores officiis nulla nisi, ullam numquam!";

  return (
    <div className={`min-h-screen flex flex-col items-center`}>
      {cupcake && (
        <div
          className={`flex flex-row items-center min-h-screen gap-8 -mt-12 ${
            isCartItemVisible || isSearchVisible ? "-z-10" : "z-0"
          } `}
        >
          <div className={`w-5/12 flex flex-col`}>
            <Heading title={cupcake?.name} variant="h2" />
            <Text copy={fillerText} size="xs" className={`mt-6`} />
            <div className={`flex flex-row items-center gap-6`}>
              <div className={`flex items-center gap-6 mt-8`}>
                <Button
                  variant="primary"
                  label="add to bag"
                  onClick={() => dispatch(addItem(cupcake))}
                  className={`z-10`}
                />

                <Heading
                  title={`${numberUtils.convertNumberToLocaleCurrency(
                    cupcake?.price
                  )}`}
                  variant="h3"
                />
              </div>
            </div>
          </div>

          <div
            className={`relative  w-4/12 max-h-[30rem] bg-gradient-to-b from-primary-300 via-fuchsia-300 to-purple-100`}
          >
            {/* <div className="w-full h-[30rem]" /> */}
            <Image
              src={cupcake?.url}
              alt={cupcake?.name}
              className={`absolute left-0 top-1/2 -translate-y-1/2 w-full aspect-square rounded-full object-cover opacity-90 p-4`}
            />
          </div>

          <div className={`flex flex-col gap-1 my-6 w-5/12`}>
            <Text copy={"description"} uppercase size="xs" bold />
            <Text copy={cupcake?.description} />

            <Text
              copy={"ingredients"}
              uppercase
              size="xs"
              bold
              className={`mt-6`}
            />
            <Text copy={fillerText} />

            <Heading
              title={`${cupcake?.pcs}pcs`}
              variant="h2"
              className={`mt-6 !text-purple-500`}
            />
          </div>
        </div>
      )}

      {loading && (
        <div className="w-full h-screen flex justify-center items-center -mt-14">
          <ActivityIndicator />
        </div>
      )}
      {error && (
        <APIErrorMessage
          title={error.name}
          message={error.message}
          onRetry={() => refetch()}
          className="h-screen -mt-40"
        />
      )}
    </div>
  );
};

export default CollectionItemTemplate;
