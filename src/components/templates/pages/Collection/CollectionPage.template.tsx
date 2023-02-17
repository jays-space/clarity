import { useNavigate, useParams } from "react-router-dom";

// COMPONENTS
import { CollectionItemSelector } from "@/components/integrated";
import { Heading } from "@/components/atomic/typography";

interface ICollectionPageTemplate {
  collection: {
    id: number;
    src: string;
    name: string;
    price: number;
  }[];
}

const CollectionTemplate = ({ collection }: ICollectionPageTemplate) => {
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
      </div>

      <div
        className={`flex flex-row justify-center items-center flex-wrap gap-6`}
      >
        {collection.map(({ id, name, price, src }) => {
          return (
            <CollectionItemSelector
              key={id}
              name={name}
              price={price}
              src={src}
              onAddToBagClick={() => {}}
              onViewCupcakeClick={() => onCollectionItemSelect(id.toString())}
            />
          );
        })}
      </div>
    </>
  );
};

export default CollectionTemplate;
