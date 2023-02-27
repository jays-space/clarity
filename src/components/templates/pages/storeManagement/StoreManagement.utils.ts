import { routerConfig } from "@/router";

export const getRootStoreManagementMenuPaths = () => {
  return routerConfig
    ? [
        {
          ...routerConfig.StoreCollectionsPage,
        },
        {
          ...routerConfig.AddStoreCollectionPage,
        },
        {
          ...routerConfig.AddStoreCollectionItemPage,
        },
        {
          ...routerConfig.StoreAdminPage,
        },
        // {
        //   ...routerConfig.AddStoreAdminPage,
        // },
      ]
    : [];
};
