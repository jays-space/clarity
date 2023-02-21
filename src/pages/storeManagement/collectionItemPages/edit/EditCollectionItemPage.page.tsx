import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useMutation, useQuery } from "@apollo/client";

// TYPES
import { AddCupcakeFormType } from "../new/AddStoreCollectionItemPage.types";

// GQL
import {
  GetProductQuery,
  GetProductQueryVariables,
  ListCollectionsQuery,
  ListCollectionsQueryVariables,
  UpdateProductMutation,
  UpdateProductMutationVariables,
} from "@/API";
import {
  getCupcake,
  listCollections,
  updateCupcake,
} from "../../gql/queries.gql";

// COMPONENTS
import { ActivityIndicator, Page } from "@components/atomic";
import { Heading } from "@typography";
import { EditStoreCollectionItemPageTemplate } from "@/components/templates";
import { APIErrorMessage, Button } from "@components/integrated";

const EditStoreCollectionItemPage = () => {
  const params = useParams();
  const { data: defaultData } = useQuery<
    GetProductQuery,
    GetProductQueryVariables
  >(getCupcake, {
    variables: { id: params.cupcakeID as string },
  });

  const defaultCupcakeData = defaultData?.getProduct;

  const { control, handleSubmit, setValue } = useForm<AddCupcakeFormType>({
    defaultValues: {
      collection: defaultCupcakeData?.collectionID,
      description: defaultCupcakeData?.description,
      image: defaultCupcakeData?.url,
      name: defaultCupcakeData?.name,
      pcs: defaultCupcakeData?.pcs,
      price: defaultCupcakeData?.price,
      units: defaultCupcakeData?.units,
    },
  });

  const {
    data: collectionsData,
    loading: collectionsLoading,
    error: collectionsError,
    refetch: collectionsRefetch,
  } = useQuery<ListCollectionsQuery, ListCollectionsQueryVariables>(
    listCollections
  );

  const [onCupcakeUpdateStart, { data, loading, error }] = useMutation<
    UpdateProductMutation,
    UpdateProductMutationVariables
  >(updateCupcake);

  const onUpdateCupcakeFormSubmit = async (formData: AddCupcakeFormType) => {
    if (!params?.productID) return;

    onCupcakeUpdateStart({
      variables: {
        input: {
          id: params?.productID,
          collectionID: formData.collection,
          name: formData.name,
          pcs: formData.pcs,
          price: formData.price,
          units: formData.units,
          description: formData.description,
          url: formData.image,
          _version: defaultCupcakeData?._version,
        },
      },
    });
  };

  const collections = collectionsData?.listCollections?.items.filter(
    (collection) => !collection?._deleted
  );

  return (
    <Page>
      <Heading title="Edit cupcake" variant="h2" />
      <Button
        label="refresh"
        onClick={() => collectionsRefetch()}
        loading={loading}
        success={collections && collections?.length > 0}
        className={`mb-6`}
      />

      {collectionsLoading && <ActivityIndicator />}
      {collectionsError && (
        <APIErrorMessage
          title={collectionsError.name}
          message={collectionsError.message}
          onRetry={() => collectionsRefetch()}
        />
      )}
      {collections && (
        <EditStoreCollectionItemPageTemplate
          control={control}
          handleSubmit={handleSubmit}
          onUpdateCupcakeFormSubmit={onUpdateCupcakeFormSubmit}
          loading={loading}
          success={!!data?.updateProduct?.id}
          // FIXME: types
          // @ts-ignore
          collections={collections || []}
          setValue={setValue}
        />
      )}
      {error && <APIErrorMessage title={error.name} message={error.message} />}
    </Page>
  );
};

export default EditStoreCollectionItemPage;
