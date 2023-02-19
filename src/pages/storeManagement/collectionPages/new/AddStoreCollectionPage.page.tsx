import { useForm } from "react-hook-form";

// TYPES
import { AddCollectionFormType } from "./AddStoreCollectionPage.types";

// COMPONENTS
import { Page } from "@/components/atomic";
import { Heading } from "@typography";
import { AddStoreCollectionPageTemplate } from "@/components/templates";

const AddStoreCollectionPage = () => {
  const { control, handleSubmit } = useForm<AddCollectionFormType>();

  const onAddCollectionFormSubmit = (formData: AddCollectionFormType) => {
    // TODO: logic here
  };

  return (
    <Page>
      <Heading title="Create new collection" variant="h2" />

      <AddStoreCollectionPageTemplate
        control={control}
        handleSubmit={handleSubmit}
        onAddCollectionFormSubmit={onAddCollectionFormSubmit}
      />
    </Page>
  );
};

export default AddStoreCollectionPage;
