import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";

// GQL
import { ListCollectionsQuery, ListCollectionsQueryVariables } from "@/API";

// COMPONENTS
import { CollectionTemplate } from "@/components/templates/pages/Collection";
import { Page } from "@/components/atomic";
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
        error={error}
        loading={loading}
      />
    </Page>
  );
};

export default CollectionPage;
