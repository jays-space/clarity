import { Control, UseFormHandleSubmit } from "react-hook-form";

// TYPES
import { AddCupcakeFormType } from "@/pages/storeManagement/collectionItemPages/new/AddStoreCollectionItemPage.types";

import { TextInput } from "@/components/atomic";
import { Button } from "@/components/integrated";

interface ITextInput {
  control: Control<AddCupcakeFormType, any>;
  onAddCupcakeFormSubmit: (formData: AddCupcakeFormType) => void;
  handleSubmit: UseFormHandleSubmit<AddCupcakeFormType>;
}

const AddStoreCollectionItemFormTemplate = ({
  control,
  handleSubmit,
  onAddCupcakeFormSubmit,
}: ITextInput) => {
  return (
    <>
      <div className={`flex flex-row w-2/3 mt-12`}>
        <div className={`flex-1 px-4`}>
          {/* cupcake name */}
          <TextInput
            name="name"
            control={control}
            label="name"
            required
            rules={{
              minLength: {
                value: 3,
                message: "Name should be at least 3 characters long",
              },
              required: "Please add the cupcake name",
            }}
            fullWidth
          />
          {/* cupcake pcs */}
          <TextInput
            name="pcs"
            control={control}
            label="pieces"
            required
            variant="number"
            rules={{
              required: "How many pieces per serving?",
            }}
            fullWidth
          />
          {/* cupcake price */}
          <TextInput
            name="price"
            control={control}
            label="price"
            required
            rules={{
              required: "How much does a service cost? (In ZAR)",
              min: 1,
              max: 10000,
            }}
            fullWidth
          />
        </div>
        <div className={`flex-1 px-4`}>
          {/* cupcake collection type */}
          
          {/* cupcake description */}
          <TextInput
            textArea
            name="description"
            control={control}
            label="description"
            required
            rules={{
              minLength: {
                value: 3,
                message: "Description should be at least 3 characters long",
              },
              required: "Tell us more about the cupcake",
            }}
            fullWidth
          />

          {/* cupcake units */}
          <TextInput
            name="units"
            control={control}
            label="units"
            required
            variant="number"
            rules={{
              required: "How many units if this cupcake in stock?",
            }}
            fullWidth
          />
          {/* cupcake image */}
          <TextInput
            name="image"
            control={control}
            label="image"
            required
            variant="url"
            rules={{
              required: "Add the cupcake image url",
            }}
            fullWidth
          />
        </div>
      </div>
      <Button label="submit" onClick={handleSubmit(onAddCupcakeFormSubmit)} />
    </>
  );
};

export default AddStoreCollectionItemFormTemplate;
