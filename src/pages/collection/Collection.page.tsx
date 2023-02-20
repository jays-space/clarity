import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";

// GQL
import { ListCollectionsQuery, ListCollectionsQueryVariables } from "@/API";

// COMPONENTS
import { CollectionTemplate } from "@/components/templates/pages/Collection";
import { ActivityIndicator, Page } from "@/components/atomic";
import { APIErrorMessage } from "@/components/integrated";
import { listCollections } from "../collections/gql/queries.gql";

const CollectionPage = () => {
  const params = useParams();

  const { data, error, loading, refetch } = useQuery<
    ListCollectionsQuery,
    ListCollectionsQueryVariables
  >(listCollections);

  const collection = data?.listCollections?.items.filter(
    (collection) =>
      collection?.name === params?.collectionName && !collection?._deleted
  );

  return (
    <Page>
      <CollectionTemplate
        //FIXME: types
        // @ts-ignore
        products={collection?.[0]?.Products?.items || []}
        refetch={refetch}
      />
      {loading && <ActivityIndicator />}
      {error && (
        <APIErrorMessage
          title={error?.name || "Error"}
          message={error?.message || "Error"}
          onRetry={() => refetch()}
        />
      )}
    </Page>
  );
};

export default CollectionPage;
