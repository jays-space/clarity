import MaterialReactTable, { MRT_ColumnDef } from "material-react-table";
import { useMemo } from "react";
import { useNavigate, useParams } from "react-router-dom";

// COMPONENTS
import { Page } from "@/components/atomic";
import { Heading } from "@typography";
import { Button } from "@/components/integrated";

const StoreAdminPage = () => {
  const navigate = useNavigate();
  const params = useParams();

  type AdminType = {
    id: string;
    firstName: string;
    lastName: string;
  };

  const admins:AdminType[] = [
    {
      firstName: "jay",
      id:'123456',
      lastName:'mondlana'
    },
    {
      firstName: "joy",
      id:'654321',
      lastName:'mondlana'
    }
  ]

  const columns = useMemo<MRT_ColumnDef<AdminType>[]>(
    () => [
      {
        accessorKey: "id",
        header: "id",
      },
      {
        accessorKey: "firstName",
        header: "first name",
      },
      {
        accessorKey: "lastName",
        header: "last name",
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
                onClick={() => navigate(`${row.original.id}/edit`)}
                label="edit"
              />
            ),
          },
          {
            id: "id",
            header: "",
            Cell: ({ row }) => (
              <Button
                onClick={() => navigate(row.original.id)}
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
      <Heading title="Store Admins" variant="h2" className={`mt-12`} />
      <MaterialReactTable columns={columns} data={admins} />
    </Page>
  );
};

export default StoreAdminPage;
