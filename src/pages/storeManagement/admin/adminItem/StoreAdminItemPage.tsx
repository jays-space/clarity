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

  return (
    <Page>
      <Heading title="Store Admin Item" variant="h2" className={`mt-12`} />
      
    </Page>
  );
};

export default StoreAdminPage;
