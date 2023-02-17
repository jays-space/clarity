// COMPONENTS
import { Page } from "@/components/atomic";
import { CollectionsTemplate } from "@/components/templates/pages/Collections";

// MOCK
import { collectionTypes } from "@/mock/CollectionsPage.mock";

const CollectionsPage = () => {
  return (
    <Page>
      <CollectionsTemplate collections={collectionTypes} />
    </Page>
  );
};

export default CollectionsPage;
