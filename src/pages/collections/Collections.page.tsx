import { useQuery } from "@apollo/client";

// GQL
import { ListCollectionsQuery, ListCollectionsQueryVariables } from "@/API";
import { listCollections } from "./gql/queries.gql";

// COMPONENTS
import { Page } from "@/components/atomic";
import { CollectionsTemplate } from "@/components/templates/pages/Collections";

const CollectionsPage = () => {
  const { data, loading, error, refetch } = useQuery<
    ListCollectionsQuery,
    ListCollectionsQueryVariables
  >(listCollections);

  const collections = data?.listCollections?.items.filter(
    (collection) => !collection?._deleted
  );

  return (
    <Page>
      <CollectionsTemplate
        collections={collections || []}
        loading={loading}
        error={error}
        refetch={refetch}
      />
    </Page>
  );
};

export default CollectionsPage;
