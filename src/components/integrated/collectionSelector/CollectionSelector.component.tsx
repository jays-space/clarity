// COMPONENTS
import { Image } from "@/components/atomic";
import { Heading } from "@/components/atomic/typography";

interface ICollectionSelector {
  src: string;
  label: string;
  alt: string;
  onClick: () => void;
}

const CollectionSelector = ({
  alt,
  label,
  onClick,
  src,
}: ICollectionSelector) => {
  return (
    <button
      className={`group relative drop-shadow-md hover:drop-shadow-lg rounded-3xl cursor-pointer transition-shadow duration-300`}
      onClick={onClick}
    >
      {/* image */}
      <div className={`overflow-hidden rounded-3xl`}>
        <Image
          src={src}
          alt={alt}
          className={`max-w-xs aspect-square object-none object-bottom opacity-90 group-hover:scale-110 transition-transform duration-700`}
        />
      </div>
      {/* type */}
      <div
        className={`absolute bottom-0 left-0 right-0 top-0 w-full rounded-3xl py-2 px-3 flex justify-center items-center bg-opacity-50 group-hover:bg-opacity-70 bg-gray-700 hover:bg-primary-400 duration-700`}
      >
        <Heading
          title={label}
          variant="h3"
          className="!text-white border-4 border-white border-opacity-0 px-2 py-3 group-hover:border-opacity-100 transition-all duration-300"
        />
      </div>
    </button>
  );
};

export default CollectionSelector;
