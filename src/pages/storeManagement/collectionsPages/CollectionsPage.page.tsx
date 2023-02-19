import { useNavigate } from "react-router-dom";
import { useMemo } from "react";
import MaterialReactTable, { MRT_ColumnDef } from "material-react-table";

// TYPES
import { CollectionType } from "@/types";

// COMPONENTS
import { Image, Page } from "@/components/atomic";
import { Button } from "@/components/integrated";
import { Heading } from "@typography";

import { collectionTypes } from "@/mock/CollectionsPage.mock";

const StoreCollectionsPage = () => {
  const navigate = useNavigate();

  const columns = useMemo<MRT_ColumnDef<CollectionType>[]>(
    () => [
      {
        accessorKey: "name",
        header: "Collection Name",
      },
      {
        accessorKey: "uri",
        header: "",
        columns: [
          {
            id: "id",
            header: "Image",
            Cell: ({ row }) => (
              <Image
                alt={row.original.alt}
                src={row.original.uri}
                className={`w-12 aspect-square rounded-xl`}
              />
            ),
          },
        ],
      },
      {
        accessorKey: "alt",
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

  return (
    <Page>
      <Heading title="Cupcake Collections" variant="h2" className={`mt-4`} />
      <MaterialReactTable columns={columns} data={collectionTypes} />
    </Page>
  );
};

export default StoreCollectionsPage;
