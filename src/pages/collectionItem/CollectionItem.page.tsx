// TEMPLATES
import { CollectionItemTemplate } from "@/components/templates/pages/CollectionItem";

// MOCK
import { CollectionItemPageMock } from "@/mock/CollectionItemPage.mock";

const CollectionItemPage = () => {
  const onAddToBagClick = () => {};

  const { description, name, price, uri } = CollectionItemPageMock;

  return (
    <CollectionItemTemplate
      addToBagClick={onAddToBagClick}
      description={description}
      name={name}
      price={price}
      uri={uri}
    />
  );
};

export default CollectionItemPage;
