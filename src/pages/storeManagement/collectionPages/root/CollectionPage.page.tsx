import MaterialReactTable, { MRT_ColumnDef } from "material-react-table";
import { useMemo } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";

// TYPES
import { CupcakeType } from "@types";

// GQL
import { listCollections } from "../../gql/queries.gql";
import {
  ListCollectionsQuery,
  ListCollectionsQueryVariables,
} from "@/API";

// COMPONENTS
import { Image, Page, ActivityIndicator } from "@components/atomic";
import { APIErrorMessage, Button } from "@components/integrated";
import { Heading } from "@typography";

const StoreCollectionPage = () => {
  const navigate = useNavigate();
  const params = useParams();

  const { data: collectionData, error, loading, refetch } = useQuery<
    ListCollectionsQuery,
    ListCollectionsQueryVariables
  >(listCollections);

  const columns = useMemo<MRT_ColumnDef<CupcakeType>[]>(
    () => [
      {
        accessorKey: "name",
        header: "Cupcake Name",
      },
      {
        accessorKey: "url",
        header: "",
        columns: [
          {
            id: "id",
            header: "Image",
            Cell: ({ row }) => (
              <Image
                alt={row.original?.name || ""}
                src={row.original?.url || ""}
                className={`w-12 aspect-square rounded-xl`}
              />
            ),
          },
        ],
      },
      {
        accessorKey: "pcs",
        header: "# Pieces",
      },
      {
        accessorKey: "units",
        header: "# Units",
      },
      {
        accessorKey: "price",
        header: "(ZAR) Price",
      },
      {
        accessorKey: "id",
        header: "Actions",
        columns: [

          {
            id: "id",
            header: "",
            Cell: ({ row }) => (
              <Button
                onClick={() => navigate(row.original?.id as string)}
                label="view"
              />
            ),
          },
        ],
      },
    ],
    [navigate]
  );

  const collection = collectionData?.listCollections?.items.filter(
    (collection) =>
      collection?.name === params?.collectionName && !collection?._deleted
  );

  return (
    <Page>
      <Heading
        title={`${params?.collectionName || "Cupcake"} Collection`}
        variant="h2"
        className={`my-4`}
      />
      <Button
        label="refresh"
        onClick={() => refetch()}
        loading={loading}
        success={
          collection?.[0]?.Products?.items &&
          collection?.[0].Products.items.length > 0
        }
        className={`mb-6`}
      />

      {loading && <ActivityIndicator />}
      {error && (
        <APIErrorMessage
          title={error.name}
          message={error.message}
          onRetry={() => refetch()}
        />
      )}
      {collection?.[0]?.Products?.items && (
        //FIXME: types
        // @ts-ignore
        <MaterialReactTable columns={columns} data={collection?.[0]?.Products?.items || []}/>
      )}
    </Page>
  );
};

export default StoreCollectionPage;
