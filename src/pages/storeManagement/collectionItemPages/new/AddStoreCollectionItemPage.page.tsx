import { ApolloError, useMutation, useQuery } from "@apollo/client";
import { useForm } from "react-hook-form";

// TYPES
import { AddCupcakeFormType } from "./AddStoreCollectionItemPage.types";

// GQL
import {
  listCollections,
  updateCollection,
} from "../../gql/queries.gql";
import {
  CreateProductMutation,
  CreateProductMutationVariables,
  ListCollectionsQuery,
  ListCollectionsQueryVariables,
  UpdateCollectionMutation,
  UpdateCollectionMutationVariables,
} from "@/API";
import { createCupcake } from "../../gql/mutations.gql";

// COMPONENTS
import { ActivityIndicator, Page } from "@components/atomic";
import { Heading } from "@typography";
import { AddStoreCollectionItemFormTemplate } from "@/components/templates/pages/storeManagement/AddStoreCollectionItemPage";
import { APIErrorMessage, Button } from "@/components/integrated";

const AddStoreCollectionItemPage = () => {
  const { control, handleSubmit, setValue } = useForm<AddCupcakeFormType>();

  const {
    data: collectionsData,
    loading: collectionsLoading,
    error: collectionsError,
    refetch: collectionsRefetch,
  } = useQuery<ListCollectionsQuery, ListCollectionsQueryVariables>(
    listCollections
  );

  const [onCupcakeCreateStart, { data, loading, error }] = useMutation<
    CreateProductMutation,
    CreateProductMutationVariables
  >(createCupcake);

  const [onCollectionUpdateStart] = useMutation<
    UpdateCollectionMutation,
    UpdateCollectionMutationVariables
  >(updateCollection);

  const onAddCupcakeFormSubmit = async (formData: AddCupcakeFormType) => {
    onCupcakeCreateStart({
      variables: {
        input: {
          collectionID: formData.collection,
          name: formData.name,
          pcs: formData.pcs,
          price: formData.price,
          units: formData.units,
          description: formData.description,
          url: formData.image,
        },
      },
    });

    const collectionToUpdate = collectionsData?.listCollections?.items.find(
      (item) => item?.id === formData.collection
    );

    onCollectionUpdateStart({
      variables: {
        input: {
          id: formData.collection,
          nofProducts: (collectionToUpdate?.nofProducts as number) + 1,
        },
      },
    });
  };

  const collections = collectionsData?.listCollections?.items.filter(
    (collection) => !collection?._deleted
  );

  return (
    <Page>
      <Heading title="Create new cupcake" variant="h2" />
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
        <AddStoreCollectionItemFormTemplate
          control={control}
          handleSubmit={handleSubmit}
          onAddCupcakeFormSubmit={onAddCupcakeFormSubmit}
          loading={loading}
          success={!!data?.createProduct?.id}
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

export default AddStoreCollectionItemPage;
