import { ApolloError } from "@apollo/client";
import { useNavigate } from "react-router-dom";

// TYPES
import { CollectionType } from "@/types";

// COMPONENTS
import {
  APIErrorMessage,
  Button,
  CollectionSelector,
} from "@components/integrated";
import { Heading } from "@/components/atomic/typography";
import { ActivityIndicator } from "@/components/atomic";

// UTILS
import { stringUtils } from "@/utils";
import { IconNames } from "@/components/atomic/icon/iconNames.types";

interface ICollectionsTemplate {
  loading: boolean;
  error: ApolloError | undefined;
  collections: (CollectionType | null)[];
  refetch: () => void;
}

const CollectionsTemplate = ({
  collections,
  error,
  loading,
  refetch,
}: ICollectionsTemplate) => {
  const navigate = useNavigate();

  const onCollectionSelect = (collection: string) => {
    navigate(`${collection}`);
  };

  return (
    <div className={`min-h-screen flex flex-col items-center`}>
      <div className={`w-/12 my-6 flex flex-col items-center`}>
        <Heading title="collections" variant="h2" />
        {!loading && (
          <Button
            icon={IconNames.refresh}
            onClick={() => refetch()}
            loading={loading}
          />
        )}
      </div>

      <div
        className={`flex flex-row justify-center items-center flex-wrap gap-6 w-full h-full`}
      >
        {loading && (
          <div className="w-full h-screen flex justify-center items-center -mt-40">
            <ActivityIndicator />
          </div>
        )}

        {error && (
          <APIErrorMessage
            title={error.name}
            message={error.message}
            onRetry={() => refetch()}
          />
        )}

        {collections &&
          collections.map((collection) => {
            return (
              <CollectionSelector
                key={collection?.id}
                label={collection?.name || ""}
                src={collection?.url || ""}
                alt={collection?.name || ""}
                onClick={() =>
                  onCollectionSelect(
                    stringUtils.splitAndJoin(collection?.name || "", " ", "_")
                  )
                }
              />
            );
          })}
      </div>
    </div>
  );
};

export default CollectionsTemplate;
