import { useEffect, useState } from "react";
import { useLocation } from "react-router";

// CONFIG
import { routerConfig } from "@/router";

// COMPONENTS
import { Page } from "@/components/atomic";
import { StoreManagementPageTemplate } from "@/components/templates";

const StoreManagement = () => {
  const [isStoreRootPath, setIsStoreRootPath] = useState<boolean>(false);
  const location = useLocation();

  useEffect(() => {
    setIsStoreRootPath(
      (v) => location.pathname === routerConfig.StoreManagementPage.path
    );
  }, [location.pathname]);

  return (
    <Page>
      <StoreManagementPageTemplate isStoreRootPath={isStoreRootPath} />
    </Page>
  );
};

export default StoreManagement;
