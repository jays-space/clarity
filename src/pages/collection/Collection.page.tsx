// COMPONENTS
import { CollectionTemplate } from "@/components/templates/pages/Collection";
import { Page } from "@/components/atomic";

// MOCK
import { collectionMock } from "@/mock/CollectionPage.mock";

const CollectionPage = () => {
  return (
    <Page>
      <CollectionTemplate collection={collectionMock} />;
    </Page>
  );
};

export default CollectionPage;
