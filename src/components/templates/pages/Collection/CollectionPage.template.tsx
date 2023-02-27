import { useNavigate, useParams } from "react-router-dom";

// TYPES
import { CupcakeType } from "@/types/Product.Types";

// COMPONENTS
import { APIErrorMessage, Button, CollectionItemSelector } from "@/components/integrated";
import { Heading } from "@/components/atomic/typography";
import { useAppDispatch } from "@/store/hooks";
import { addItem } from "@/store/modules/cart/cart.slice";
import { IconNames } from "@/components/atomic/icon/iconNames.types";
import { stringUtils } from "@/utils";
import { ActivityIndicator } from "@/components/atomic";
import { ApolloError } from "@apollo/client";

interface ICollectionPageTemplate {
  products: CupcakeType[];
  refetch: () => void;
  loading: boolean;
  error: ApolloError | undefined
}

const CollectionTemplate = ({
  products,
  refetch,
  loading,
  error
}: ICollectionPageTemplate) => {
  const navigate = useNavigate();
  const params = useParams();
  const dispatch = useAppDispatch();

  const onCollectionItemSelect = (collectionItemID: string) => {
    navigate(`${collectionItemID}`, {
      state: { collectionItemID },
    });
  };

  return (
    <div className={`min-h-screen flex flex-col items-center`}>
      <div className={`w-/12 my-6 flex flex-col items-center`}>
        <Heading
          title={`${
            params?.collectionName
              ? stringUtils.splitAndJoin(params?.collectionName, "_", " ")
              : ""
          } cupcakes`}
          variant="h2"
        />
        <Button
          icon={IconNames.refresh}
          onClick={() => refetch()}
          loading={loading}
        />
      </div>

      <div
        className={`flex flex-row justify-center items-center flex-wrap gap-6`}
      >
        {loading && (
          <div className="w-full h-screen flex justify-center items-center -mt-14">
            <ActivityIndicator />
          </div>
        )}

        {error && (
          <APIErrorMessage
            title={error?.name || "Error"}
            message={error?.message || "Error"}
            onRetry={() => refetch()}
          />
        )}

        {products &&
          products.map((cupcake) => {
            return (
              <CollectionItemSelector
                key={cupcake?.id}
                name={cupcake?.name}
                price={cupcake?.price}
                src={cupcake?.url}
                pcs={cupcake?.pcs}
                onAddToBagClick={() => dispatch(addItem(cupcake))}
                onViewCupcakeClick={() =>
                  onCollectionItemSelect(cupcake?.id.toString())
                }
              />
            );
          })}
      </div>
    </div>
  );
};

export default CollectionTemplate;
