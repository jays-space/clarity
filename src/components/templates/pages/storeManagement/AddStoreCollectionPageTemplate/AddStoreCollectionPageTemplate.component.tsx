import { Control, UseFormHandleSubmit } from "react-hook-form";

// TYPES
import { AddCollectionFormType } from "@/pages/storeManagement/collectionPages/new/AddStoreCollectionPage.types";

import { TextInput } from "@/components/atomic";
import { Button } from "@/components/integrated";

interface ITextInput {
  control: Control<AddCollectionFormType, any>;
  onAddCollectionFormSubmit: (formData: AddCollectionFormType) => void;
  handleSubmit: UseFormHandleSubmit<AddCollectionFormType>;
}

const AddStoreCollectionItemFormTemplate = ({
  control,
  handleSubmit,
  onAddCollectionFormSubmit,
}: ITextInput) => {
  return (
    <>
      <div className={`flex flex-row w-2/3 mt-12`}>
        <div className={`flex-1 px-4`}>
          {/* collection name */}
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
              required: "Please add the collection name",
            }}
            fullWidth
          />
        </div>
        <div className={`flex-1 px-4`}>
          {/* collection image */}
          <TextInput
            name="image"
            control={control}
            label="image"
            required
            variant="url"
            rules={{
              required: "Add the collection image url",
            }}
            fullWidth
          />
        </div>
      </div>
      <Button label="submit" onClick={handleSubmit(onAddCollectionFormSubmit)} />
    </>
  );
};

export default AddStoreCollectionItemFormTemplate;
