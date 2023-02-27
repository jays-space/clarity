// COMPONENTS
import { Image } from "@/components/atomic";
import { Text } from "@/components/atomic/typography";
import { Button } from "@components/integrated";

// UTILS
import { numberUtils } from "@/utils";
import { useAppSelector } from "@/store/hooks";
import { IconNames } from "@/components/atomic/icon/iconNames.types";

interface ICollectionItemSelector {
  src: string;
  name: string;
  price: number;
  pcs: number;
  onAddToBagClick: () => void;
  onViewCupcakeClick: () => void;
}

const CollectionItemSelector = ({
  src,
  name,
  price,
  pcs,
  onAddToBagClick,
  onViewCupcakeClick,
}: ICollectionItemSelector) => {
  const isCartItemVisible = useAppSelector((state) => state.cart.isVisible);
  const isSearchVisible = useAppSelector((state) => state.search.isVisible);

  return (
    <div
      className={`border border-fuchsia-300 border-opacity-30 rounded-3xl
      hover:drop-shadow-[3px_5px_3px_rgba(240,171,252,0.35)] transform duration-300`}
    >
      <div className={`bg-white rounded-3xl`}>
        {/* image */}
        <div className={`relative overflow-hidden rounded-t-2xl`}>
          <Image
            src={src}
            alt={name}
            className={`min-w-full h-52 object-cover opacity-90`}
          />

          <div
            className={`absolute bottom-0 left-0 right-0 top-0 w-full rounded-t-2xl bg-opacity-40 `}
          />
        </div>

        <div
          className={`rounded-3xl w-[320px] h-[220px]  ${
            isCartItemVisible || isSearchVisible ? "-z-10" : "-z-0"
          } 
    `}
        >
          <div
            className={`px-6 py-4 w-full flex flex-col justify-around items-start h-[13rem]`}
          >
            <div className={`w-full flex flex-col flex-1 justify-between mb-4`}>
              {/* name */}
              <Text
                copy={name}
                capitalize
                className={`whitespace-normal`}
                size="xl"
              />

              <div>
                {/* price */}
                <Text
                  copy={`${numberUtils.convertNumberToLocaleCurrency(price)}`}
                  capitalize
                  size="xl"
                  bold
                  className={`mt-4`}
                />
                {/* pcs */}
                <Text copy={`/${pcs} pcs`} size="xs" className={`ml-1`} />
              </div>
            </div>

            {/* add to cart */}
            <div className={`flex flex-row justify-between w-full gap-4`}>
              <Button
                variant="secondary"
                label="view"
                onClick={onViewCupcakeClick}
                className={`z-10 flex-1 !justify-center`}
              />
              <Button
                variant="primary"
                icon={IconNames.add}
                onClick={onAddToBagClick}
                className={`z-10`}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollectionItemSelector;
