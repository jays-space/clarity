import { useQuery } from "@apollo/client";
import { useNavigate } from "react-router-dom";
import { useMemo } from "react";
import MaterialReactTable, { MRT_ColumnDef } from "material-react-table";

// TYPES
import { CollectionType } from "@/types";

// GQL
import { ListCollectionsQuery, ListCollectionsQueryVariables } from "@/API";
import { listCollections } from "../gql/queries.gql";

// COMPONENTS
import { ActivityIndicator, Image, Page } from "@/components/atomic";
import { APIErrorMessage, Button } from "@/components/integrated";
import { Heading } from "@typography";

const StoreCollectionsPage = () => {
  const navigate = useNavigate();

  const { data, loading, error, refetch } = useQuery<
    ListCollectionsQuery,
    ListCollectionsQueryVariables
  >(listCollections);

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
                onClick={() => navigate(`${row.original.name}/edit`)}
                label="edit"
              />
            ),
          },
          {
            id: "id",
            header: "",
            Cell: ({ row }) => (
              <Button
                onClick={() => navigate(row.original.name)}
                label="view"
              />
            ),
          },
        ],
      },
    ],
    [navigate]
  );

  const collections = data?.listCollections?.items.filter(
    (collection) => !collection?._deleted
  );

  return (
    <Page>
      <Heading
        title="Cupcake Collections"
        variant="h2"
        className={`my-4`}
        />

      <Button
        label="refetch"
        onClick={() => refetch()}
        loading={loading}
        success={collections && collections?.length > 0}
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
      {collections && (
        //FIXME: types
        // @ts-ignore
        <MaterialReactTable columns={columns} data={collections || []} />
      )}
    </Page>
  );
};

export default StoreCollectionsPage;
