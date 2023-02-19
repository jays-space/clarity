import { createBrowserRouter } from "react-router-dom";

// CONFIG
import { StoreRoot, routerConfig } from "./router.config";

// ROUTES
import {
  AccountPage,
  AddStoreAdminPage,
  AddStoreCollectionItemPage,
  AddStoreCollectionPage,
  CartPage,
  CollectionItemPage,
  CollectionPage,
  CollectionsPage,
  ContactPage,
  EditStoreAdminPage,
  EditStoreCollectionItemPage,
  EditStoreCollectionPage,
  HomePage,
  PrivacyPolicyPage,
  SignInPage,
  SignUpPage,
  StoreAdminItemPage,
  StoreAdminPage,
  StoreCollectionItemPage,
  StoreCollectionPage,
  StoreCollectionsPage,
  StoreManagementLayout,
  TermsAndConditionsPage,
} from "@/pages";
import { Layout } from "@/components/templates";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: routerConfig.HomePage.path,
        element: <HomePage />,
      },
      {
        path: routerConfig.AccountPage.path,
        element: <AccountPage />,
      },
      {
        path: routerConfig.CartPage.path,
        element: <CartPage />,
      },
      {
        path: routerConfig.CollectionsPage.path,
        element: <CollectionsPage />,
      },
      {
        path: `${routerConfig.CollectionsPage.path}${routerConfig.CollectionPage.path}`,
        element: <CollectionPage />,
      },
      {
        path: `${routerConfig.CollectionsPage.path}${routerConfig.CollectionPage.path}${routerConfig.CollectionItemPage.path}`,
        element: <CollectionItemPage />,
      },
      {
        path: routerConfig.ContactPage.path,
        element: <ContactPage />,
      },
      {
        path: routerConfig.PrivacyPolicyPage.path,
        element: <PrivacyPolicyPage />,
      },
      {
        path: routerConfig.SignInPage.path,
        element: <SignInPage />,
      },
      {
        path: routerConfig.SignUpPage.path,
        element: <SignUpPage />,
      },
      {
        path: routerConfig.TermsAndConditionsPage.path,
        element: <TermsAndConditionsPage />,
      },
      {
        path: `${StoreRoot}`,
        element: <StoreManagementLayout />,
        children: [
          {
            path: `${routerConfig.StoreCollectionsPage.path}`,
            element: <StoreCollectionsPage />,
            index: true,
          },
          {
            path: `${routerConfig.StoreCollectionPage.path}`,
            element: <StoreCollectionPage />,
          },
          {
            path: `${routerConfig.EditStoreCollectionPage.path}`,
            element: <EditStoreCollectionPage />,
          },
          {
            path: `${routerConfig.AddStoreCollectionPage.path}`,
            element: <AddStoreCollectionPage />,
          },
          {
            path: `${routerConfig.StoreCollectionItemPage.path}`,
            element: <StoreCollectionItemPage />,
          },
          {
            path: `${routerConfig.EditStoreCollectionItemPage.path}`,
            element: <EditStoreCollectionItemPage />,
          },
          {
            path: `${routerConfig.AddStoreCollectionItemPage.path}`,
            element: <AddStoreCollectionItemPage />,
          },
          {
            path: `${routerConfig.StoreAdminPage.path}`,
            element: <StoreAdminPage />,
          },
          {
            path: `${routerConfig.EditStoreAdminPage.path}`,
            element: <EditStoreAdminPage />,
          },
          {
            path: `${routerConfig.AddStoreAdminPage.path}`,
            element: <AddStoreAdminPage />,
          },
          {
            path: `${routerConfig.StoreAdminItemPage.path}`,
            element: <StoreAdminItemPage />,
          },
        ],
      },
    ],
  },
]);

export default router;
