// COMPONENTS
import { Image, Page } from "@/components/atomic";
import { Heading, Text } from "@/components/atomic/typography";
import { Button } from "@/components/integrated";
import { useCartContext } from "@/contexts";

// UTILS
import { numberUtils } from "@/utils";

interface IEditStoreCollectionItemPageTemplate {
  description: string;
  name: string;
  price: number;
  uri: string;
  addToBagClick: () => void;
  removeFromBagClick: () => void;
}

const EditStoreCollectionItemPageTemplate = ({
  description,
  name,
  price,
  uri,
  addToBagClick = () => {},
  removeFromBagClick = () => {},
}: IEditStoreCollectionItemPageTemplate) => {
  const { cartItems, isCartItemVisible } = useCartContext();

  return (
    <Page>
      <div
        className={`flex flex-row gap-20 ${
          isCartItemVisible ? "-z-10" : "z-0"
        } `}
      >
        <div className={`overflow-hidden rounded-3xl flex-1`}>
          <Image
            src={uri}
            alt={name}
            className={`w-full aspect-video rounded-3xl object-none object-center opacity-90`}
          />
        </div>
        <div className="flex flex-col flex-1 justify-between">
          <div>
            <Heading title={name} variant="h2" />
            <div className={`flex flex-col gap-1 my-6`}>
              <Text copy={"description"} uppercase size="xs" />
              <Text copy={description} className={`mt-1`} />
            </div>
          </div>

          <div className={`flex flex-row items-center gap-6`}>
            <div
              className={`flex lex-row justify-between items-baseline gap-1`}
            >
              <Text
                copy={`${numberUtils.convertNumberToLocaleCurrency(price)}`}
                size="3xl"
              />
              <Text copy={`/6pcs`} bold />
            </div>
            <Button
              label="delete cupcake"
              onClick={() => {}}
              className={`z-10`}
              disabled={false}
            />
            <Button
              variant="secondary"
              label="save cupcake"
              onClick={() => {}}
              className={`z-10`}
            />
          </div>
        </div>
      </div>
    </Page>
  );
};

export default EditStoreCollectionItemPageTemplate;
