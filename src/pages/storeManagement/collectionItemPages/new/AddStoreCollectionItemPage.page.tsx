import { useForm } from "react-hook-form";

// TYPES
import { AddCupcakeFormType } from "./AddStoreCollectionItemPage.types";

// COMPONENTS
import { Page } from "@/components/atomic";
import { Heading } from "@typography";
import { AddStoreCollectionItemFormTemplate } from "@/components/templates/pages/storeManagement/AddStoreCollectionItemPage";

const AddStoreCollectionItemPage = () => {
  const { control, handleSubmit } = useForm<AddCupcakeFormType>();

  const onAddCupcakeFormSubmit = (formData: AddCupcakeFormType) => {
    // TODO: logic here
  };

  return (
    <Page>
      <Heading title="Create new cupcake" variant="h2" />
      <AddStoreCollectionItemFormTemplate
        control={control}
        handleSubmit={handleSubmit}
        onAddCupcakeFormSubmit={onAddCupcakeFormSubmit}
      />
    </Page>
  );
};

export default AddStoreCollectionItemPage;
