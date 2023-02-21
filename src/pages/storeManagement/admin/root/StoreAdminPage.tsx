import { useQuery } from "@apollo/client";
import MaterialReactTable, { MRT_ColumnDef } from "material-react-table";
import { useMemo } from "react";
import { useNavigate } from "react-router-dom";

// TYPES
import { AdminUserType } from "@/types";

// GQL

import { ListUsersQuery, ListUsersQueryVariables } from "@/API";

// COMPONENTS
import { ActivityIndicator, Page } from "@/components/atomic";
import { Heading } from "@typography";
import { APIErrorMessage, Button } from "@/components/integrated";
import { listAdminUsers } from "../../gql/queries.gql";

const StoreAdminPage = () => {
  const navigate = useNavigate();

  const { data, loading, error, refetch } = useQuery<
    ListUsersQuery,
    ListUsersQueryVariables
  >(listAdminUsers);

  const columns = useMemo<MRT_ColumnDef<AdminUserType>[]>(
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
        ],
      },
    ],
    [navigate]
  );

  const admins = data?.listUsers?.items.filter(
    (admin) => admin?.isAdmin && !admin._deleted
  );

  return (
    <Page>
      <Heading title="Store Admins" variant="h2" className={`mt-4 mb-6`} />
      {loading && <ActivityIndicator />}
      {error && (
        <APIErrorMessage
          title={error.name}
          message={error.message}
          onRetry={() => refetch()}
        />
      )}
      {admins && (
        //FIXME: types
        // @ts-ignore
        <MaterialReactTable columns={columns} data={admins || []} />
      )}
    </Page>
  );
};

export default StoreAdminPage;
