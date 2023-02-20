// COMPONENTS
import { Image, Page, TextInput } from "@/components/atomic";
import { Heading, Text } from "@/components/atomic/typography";
import { Button } from "@/components/integrated";
import { useCartContext } from "@/contexts";
import { AddCupcakeFormType } from "@/pages/storeManagement/collectionItemPages/new/AddStoreCollectionItemPage.types";
import { CollectionType } from "@/types";

// UTILS
import { numberUtils } from "@/utils";
import { Control, UseFormHandleSubmit, UseFormSetValue } from "react-hook-form";

interface IEditStoreCollectionItemPageTemplate {
  control: Control<AddCupcakeFormType, any>;
  onUpdateCupcakeFormSubmit: (formData: AddCupcakeFormType) => void;
  handleSubmit: UseFormHandleSubmit<AddCupcakeFormType>;
  loading: boolean;
  success: boolean;
  collections: CollectionType[];
  setValue: UseFormSetValue<AddCupcakeFormType>;
}

const EditStoreCollectionItemPageTemplate = ({
  control,
  handleSubmit,
  onUpdateCupcakeFormSubmit,
  loading,
  success,
  collections,
  setValue,
}: IEditStoreCollectionItemPageTemplate) => {
  const { cartItems, isCartItemVisible } = useCartContext();

  return (
    <>
      <div
        className={`flex flex-row gap-20 w-2/3 mt-12 ${
          isCartItemVisible ? "-z-10" : "z-0"
        }`}
      >
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
            variant="number"
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
          <div>
            <label
              htmlFor={`select-collections`}
              className={`flex flex-row mb-1`}
            >
              <Text copy={"Collections"} size="sm" capitalize />
              <Text copy={"(required)"} size="sm" capitalize className="ml-1" />
            </label>
            <select
              className={`w-full mb-6 outline-2 border-2 text-text outline-primary-800 border-primary-200
            rounded-md font-raleway tracking-wide transition-all duration-300 self-stretch`}
              onChange={(e) => {
                setValue("collection", e.target.value);
              }}
            >
              <option value={""}></option>
              {collections.map((collection) => (
                <option value={collection.id} className="text-text capitalize">
                  {collection.name}
                </option>
              ))}
            </select>
          </div>

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
      <Button
        label="update"
        loading={loading}
        success={success}
        onClick={handleSubmit(onUpdateCupcakeFormSubmit)}
      />
    </>
  );
};

export default EditStoreCollectionItemPageTemplate;
