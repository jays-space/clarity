import { useNavigate } from "react-router-dom";

// COMPONENTS
import { CollectionSelector } from "@/components/integrated";
import { Heading } from "@/components/atomic/typography";

// UTILS
import { stringUtils } from "@/utils";

interface ICollectionsTemplate {
  collections: {
    id: number;
    uri: string;
    name: string;
    alt: string;
  }[];
}

const CollectionsTemplate = ({ collections }: ICollectionsTemplate) => {
  const navigate = useNavigate();

  const onCollectionSelect = (collection: string) => {
    navigate(`${collection}`);
  };

  return (
    <>
      <div className={`w-/12 my-6`}>
        <Heading title="cupcakes" variant="h2" />
      </div>

      <div
        className={`flex flex-row justify-center items-center flex-wrap gap-6 w-9/12`}
      >
        {collections.map(({ alt, id, name, uri }) => {
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
    </>
  );
};

export default CollectionsTemplate;
