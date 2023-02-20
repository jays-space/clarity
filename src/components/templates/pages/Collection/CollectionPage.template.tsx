import { useNavigate, useParams } from "react-router-dom";

// TYPES
import { CupcakeType } from "@/types/Product.Types";

// COMPONENTS
import { Button, CollectionItemSelector } from "@/components/integrated";
import { Heading } from "@/components/atomic/typography";

interface ICollectionPageTemplate {
  products: CupcakeType[];
  refetch: () => void;
  loading: boolean;
}

const CollectionTemplate = ({
  products,
  refetch,
  loading,
}: ICollectionPageTemplate) => {
  const navigate = useNavigate();
  const params = useParams();

  const onCollectionItemSelect = (collectionItemID: string) => {
    navigate(`${collectionItemID}`, {
      state: { collectionItemID },
    });
  };

  return (
    <>
      <div className={`w-/12 my-6`}>
        <Heading
          title={`${
            params?.collectionName ? params?.collectionName : ""
          } cupcakes`}
          variant="h2"
        />
        <Button
          label="refresh"
          onClick={() => refetch()}
          loading={loading}
          success={products && products.length > 0}
          className={`mb-6`}
        />
      </div>

      {
        <div
          className={`flex flex-row justify-center items-center flex-wrap gap-6`}
        >
          {products.map(({ id, name, url, price }) => {
            return (
              <CollectionItemSelector
                key={id}
                name={name}
                price={price}
                src={url}
                onAddToBagClick={() => {}}
                onViewCupcakeClick={() => onCollectionItemSelect(id.toString())}
              />
            );
          })}
        </div>
      }
    </>
  );
};

export default CollectionTemplate;
