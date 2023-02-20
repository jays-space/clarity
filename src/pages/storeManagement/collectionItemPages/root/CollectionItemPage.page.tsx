import { GetProductQuery, GetProductQueryVariables } from "@/API";
import { Page } from "@/components/atomic";
import { StoreCollectionItemPageTemplate } from "@/components/templates";

import { CollectionItemPageMock } from "@/mock/CollectionItemPage.mock";
import { useParams } from "react-router-dom";
import { getCupcake } from "../../gql/queries.gql";
import { useQuery } from "@apollo/client";

const StoreCollectionItemPage = () => {
  const params = useParams();
  const { data, loading, error } = useQuery<
    GetProductQuery,
    GetProductQueryVariables
  >(getCupcake, { variables: { id: params.productID || "" } });

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
