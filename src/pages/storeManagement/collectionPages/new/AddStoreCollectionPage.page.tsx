import { useMutation } from "@apollo/client";
import { useForm } from "react-hook-form";

// TYPES
import { AddCollectionFormType } from "./AddStoreCollectionPage.types";

// GQL
import {
  CreateCollectionMutation,
  CreateCollectionMutationVariables,
} from "@/API";
import { createCollection } from "../../gql/mutations.gql";

// COMPONENTS
import { Page } from "@/components/atomic";
import { Heading } from "@typography";
import { AddStoreCollectionPageTemplate } from "@/components/templates";
import { APIErrorMessage } from "@/components/integrated";
import { useNavigate } from "react-router-dom";

const AddStoreCollectionPage = () => {
  const { control, handleSubmit } = useForm<AddCollectionFormType>();
  const navigate = useNavigate();

  const [onCollectionCreateStart, { data, loading, error }] = useMutation<
    CreateCollectionMutation,
    CreateCollectionMutationVariables
  >(createCollection);

  const onAddCollectionFormSubmit = (formData: AddCollectionFormType) => {
    try {
      onCollectionCreateStart({
        variables: {
          input: {
            name: formData.name,
            nofProducts: 0,
            url: formData.image,
          },
        },
      });
      navigate(-1);
    } catch (e) {
      alert(e);
    }
  };

  return (
    <Page>
      <Heading title="Create new collection" variant="h2" />
      <AddStoreCollectionPageTemplate
        control={control}
        handleSubmit={handleSubmit}
        collectionFormSubmit={onAddCollectionFormSubmit}
        loading={loading}
        success={!!data?.createCollection?.id}
      />
      {error && <APIErrorMessage title={error.name} message={error.message} />}
    </Page>
  );
};

export default AddStoreCollectionPage;
