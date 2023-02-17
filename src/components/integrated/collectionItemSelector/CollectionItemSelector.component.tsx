// COMPONENTS
import { Image } from "@/components/atomic";
import { Text } from "@/components/atomic/typography";
import { Button } from "@components/integrated";

// UTILS
import { numberUtils } from "@/utils";

interface ICollectionItemSelector {
  src: string;
  name: string;
  price: number;
  onAddToBagClick: () => void;
  onViewCupcakeClick: () => void;
}

const CollectionItemSelector = ({
  src,
  name,
  price,
  onAddToBagClick,
  onViewCupcakeClick,
}: ICollectionItemSelector) => {
  return (
    <div className={`group rounded-3xl border max-w-xs`}>
      {/* image */}
      <div
        className={`overflow-hidden rounded-t-3xl group-hover:bg-primary-600 transition-color duration-300`}
      >
        <Image
          src={src}
          alt={name}
          className={`max-w-xs aspect-video object-none object-center opacity-90 group-hover:scale-110 hover:opacity-60 transition-transform duration-700`}
        />
      </div>
      <div className={`px-6 py-4`}>
        <div className={`flex flex-col mb-4`}>
          {/* name */}
          <Text copy={name} capitalize bold className={`whitespace-normal`} />

          {/* price */}
          <Text
            copy={`${numberUtils.convertNumberToLocaleCurrency(price)}`}
            capitalize
            bold
            size="lg"
            className={`mt-4`}
          />
          {/* pcs */}
          <Text copy={`6 pcs`} uppercase bold />
        </div>

        {/* add to cart */}
        <div className={`flex flex-row justify-between`}>
          <Button
            variant="secondary"
            label="view"
            onClick={onViewCupcakeClick}
            className={`z-10`}
          />
          <Button
            variant="primary"
            label="add to bag"
            onClick={onAddToBagClick}
            className={`z-10`}
          />
        </div>
      </div>
    </div>
  );
};

export default CollectionItemSelector;
