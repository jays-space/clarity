// TEMPLATES
import { GetProductQuery, GetProductQueryVariables } from "@/API";
import { Page } from "@/components/atomic";
import { CollectionItemTemplate } from "@/components/templates/pages/CollectionItem";

import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import { getCupcake } from "../collections/gql/queries.gql";
import { CupcakeType } from "@/types";

const CollectionItemPage = () => {
  const params = useParams();

  const { data, loading, error, refetch } = useQuery<
    GetProductQuery,
    GetProductQueryVariables
  >(getCupcake, { variables: { id: params.cupcakeID as string } });

  const cupcake = data?.getProduct;

  return (
    <Page>
      <CollectionItemTemplate
        cupcake={cupcake as CupcakeType}
        loading={loading}
        error={error}
        refetch={refetch}
      />
    </Page>
  );
};

export default CollectionItemPage;
