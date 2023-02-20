import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";

// GQL
import { GetProductQuery, GetProductQueryVariables } from "@/API";
import { getCupcake } from "../../gql/queries.gql";

// COMPONENTS
import { Page } from "@/components/atomic";
import { StoreCollectionItemPageTemplate } from "@/components/templates";

const StoreCollectionItemPage = () => {
  const params = useParams();
  const { data, loading, error, refetch } = useQuery<
    GetProductQuery,
    GetProductQueryVariables
  >(getCupcake, { variables: { id: params.cupcakeID as string } });

  const cupcake = data?.getProduct;

  return (
    <Page>
      <StoreCollectionItemPageTemplate
        description={cupcake?.description as string}
        name={cupcake?.name as string}
        price={cupcake?.price as number}
        uri={cupcake?.url as string}
        pcs={cupcake?.pcs as number}
        loading={loading}
        error={error}
        refetch={refetch}
      />
    </Page>
  );
};

export default StoreCollectionItemPage;
