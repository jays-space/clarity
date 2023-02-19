import { Page } from "@/components/atomic";
import { StoreCollectionItemPageTemplate } from "@/components/templates";

import { CollectionItemPageMock } from "@/mock/CollectionItemPage.mock";

const StoreCollectionItemPage = () => {
  const { description, name, price, url } = CollectionItemPageMock;

  return (
    <Page>
      <StoreCollectionItemPageTemplate
        description={description}
        name={name}
        price={price}
        uri={url}
        addToBagClick={() => {}}
        removeFromBagClick={() => {}}
      />
    </Page>
  );
};

export default StoreCollectionItemPage;
