import { useQuery } from "@apollo/client";

// COMPONENTS
import { CollectionTemplate } from "@/components/templates/pages/Collection";
import { ActivityIndicator, Page } from "@/components/atomic";

// GQL
import { getCollection, listProductsByCollection } from "./gql/queries.gql";
import {
  GetCollectionQuery,
  GetCollectionQueryVariables,
  ListProductsQuery,
  ListProductsQueryVariables,
} from "@/API";
import { useParams } from "react-router-dom";
import { APIErrorMessage } from "@/components/integrated";

const CollectionPage = () => {
  const params = useParams();

  const {
    data: collectionData,
    loading: collectionLoading,
    error: collectionError,
  } = useQuery<GetCollectionQuery, GetCollectionQueryVariables>(getCollection);

  const {
    data: productsData,
    loading: productsLoading,
    error: productsError,
  } = useQuery<ListProductsQuery, ListProductsQueryVariables>(
    listProductsByCollection,
    { variables: { filter: { name: { eq: params.CollectionName } } } }
  );

  const collection = collectionData?.getCollection;
  const products = productsData?.listProducts?.items.filter(
    (product) => !product?._deleted
  );

  return (
    <Page>
      {collectionLoading || (productsLoading && <ActivityIndicator />)}
      <CollectionTemplate
        //FIXME: types
        // @ts-ignore
        collection={collection || []}
        //FIXME: types
        // @ts-ignore
        products={products || []}
        />
        {(collectionError || productsError) && (
          <APIErrorMessage
            title={collectionError?.name || productsError?.name || "Error"}
            message={
              collectionError?.message || productsError?.message || "Error"
            }
            onRetry={() => {}}
          />
        )}
    </Page>
  );
};

export default CollectionPage;
