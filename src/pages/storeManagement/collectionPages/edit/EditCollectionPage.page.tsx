import { useNavigate, useParams } from "react-router-dom";
import { useMutation, useQuery } from "@apollo/client";
import { useForm } from "react-hook-form";

// TYPES
import { AddCollectionFormType } from "../new/AddStoreCollectionPage.types";

// GQL
import { listCollectionsOnly, updateCollection } from "../../gql/queries.gql";
import {
  ListCollectionsQuery,
  ListCollectionsQueryVariables,
  UpdateCollectionMutation,
  UpdateCollectionMutationVariables,
} from "@/API";

// COMPONENTS
import { Heading } from "@typography";
import { APIErrorMessage } from "@/components/integrated";
import { Page } from "@/components/atomic";
import { AddStoreCollectionPageTemplate } from "@/components/templates";

const EditStoreCollectionPage = () => {
  const params = useParams();
  const navigate = useNavigate();

  const { data: collectionData } = useQuery<
    ListCollectionsQuery,
    ListCollectionsQueryVariables
  >(listCollectionsOnly);

  const currentCollectionData = collectionData?.listCollections?.items.find(
    (collection) => collection?.name === params.collectionName
  );

  const { control, handleSubmit } = useForm<AddCollectionFormType>({
    defaultValues: {
      image: currentCollectionData?.url,
      name: currentCollectionData?.name,
    },
  });

  const [onCollectionCreateStart, { data, loading, error }] = useMutation<
    UpdateCollectionMutation,
    UpdateCollectionMutationVariables
  >(updateCollection);

  const onUpdateCollectionFormSubmit = (formData: AddCollectionFormType) => {
    try {
      onCollectionCreateStart({
        variables: {
          input: {
            id: currentCollectionData?.id as string,
            name: formData.name,
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
      <Heading title="Update collection" variant="h2" />
      <AddStoreCollectionPageTemplate
        control={control}
        handleSubmit={handleSubmit}
        collectionFormSubmit={onUpdateCollectionFormSubmit}
        loading={loading}
        success={!!data?.updateCollection?.id}
      />
      {error && <APIErrorMessage title={error.name} message={error.message} />}
    </Page>
  );
};

export default EditStoreCollectionPage;
