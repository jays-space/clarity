import MaterialReactTable, { MRT_ColumnDef } from "material-react-table";
import { useMemo } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";

// TYPES
import { CollectionType } from "@types";

// GQL
import { listProducts } from "../../gql/queries.gql";
import { ListProductsQuery, ListProductsQueryVariables } from "@/API";

// COMPONENTS
import { Image, Page } from "@/components/atomic";
import { APIErrorMessage, Button } from "@/components/integrated";
import { Heading } from "@typography";
import { ActivityIndicator } from "@components/atomic";

const StoreCollectionPage = () => {
  const navigate = useNavigate();
  const params = useParams();

  const { data, loading, error, refetch } = useQuery<
    ListProductsQuery,
    ListProductsQueryVariables
  >(listProducts);

  const columns = useMemo<MRT_ColumnDef<CollectionType>[]>(
    () => [
      {
        accessorKey: "name",
        header: "Collection Name",
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
        accessorKey: "name",
        header: "# Cupcakes",
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
                onClick={() => navigate(`${row.original?.name || ""}/edit`)}
                label="edit"
              />
            ),
          },
          {
            id: "id",
            header: "",
            Cell: ({ row }) => (
              <Button
                onClick={() => navigate(row.original?.name || "")}
                label="view"
              />
            ),
          },
        ],
      },
    ],
    [navigate]
  );

  const cupcakes = data?.listProducts?.items.filter(
    (product) => !product?._deleted
  );

  return (
    <Page>
      <Heading
        title={`${params?.collectionName || "Cupcake"} Collection`}
        variant="h2"
        className={`my-4`}
      />
      <Button
        label="refetch"
        onClick={() => refetch()}
        loading={loading}
        success={cupcakes && cupcakes?.length > 0}
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
      {cupcakes && (
        //FIXME: types
        // @ts-ignore
        <MaterialReactTable columns={columns} data={cupcakes || []} />
      )}
    </Page>
  );
};

export default StoreCollectionPage;
