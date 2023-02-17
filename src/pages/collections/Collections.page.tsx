import { useNavigate } from "react-router-dom";

// COMPONENTS
import { Page } from "@/components/atomic";
import { Heading } from "@/components/atomic/typography";
import { CollectionSelector } from "@/components/integrated";

// UTILS
import { stringUtils } from "@/utils";

// MOCK
import { collectionTypes } from "@/mock/CollectionsPage.mock";

const CollectionsPage = () => {
  const navigate = useNavigate();

  const onCollectionSelect = (collection: string) => {
    navigate(`${collection}`);
  };

  return (
    <Page>
      <div className={`w-/12 my-6`}>
        <Heading title="cupcakes" variant="h2" />
      </div>

      <div
        className={`flex flex-row justify-center items-center flex-wrap gap-6 w-9/12`}
      >
        {collectionTypes.map(({ alt, id, name, uri }) => {
          return (
            <CollectionSelector
              key={id}
              label={name}
              src={uri}
              alt={alt}
              onClick={() =>
                onCollectionSelect(stringUtils.splitAndJoin(name, " ", "_"))
              }
            />
          );
        })}
      </div>
    </Page>
  );
};

export default CollectionsPage;
