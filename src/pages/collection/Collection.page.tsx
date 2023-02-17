import { useNavigate, useParams } from "react-router-dom";

// COMPONENTS
import { Page } from "@/components/atomic";
import { CollectionItemSelector } from "@/components/integrated";

// MOCK
import { collectionMock } from "@/mock/CollectionPage.mock";
import { Heading } from "@/components/atomic/typography";

interface ICollectionPage {}

const CollectionPage = ({}: ICollectionPage) => {
  const navigate = useNavigate();
  const params = useParams();

  const onCollectionItemSelect = (collectionItemID: string) => {
    navigate(`${collectionItemID}`, {
      state: { collectionItemID },
    });
  };

  return (
    <Page>
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
        {collectionMock.map(({ id, name, price, src }) => {
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
    </Page>
  );
};

export default CollectionPage;
