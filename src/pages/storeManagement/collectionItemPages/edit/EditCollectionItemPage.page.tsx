import { Page } from "@/components/atomic";
import { EditStoreCollectionItemPageTemplate } from "@/components/templates";

import { CollectionItemPageMock } from "@/mock/CollectionItemPage.mock";

const EditStoreCollectionItemPage = () => {
  const { description, name, price, url } = CollectionItemPageMock;

  return (
    <Page>
      <EditStoreCollectionItemPageTemplate
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

export default EditStoreCollectionItemPage;
