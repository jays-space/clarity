import { createBrowserRouter } from "react-router-dom";

// CONFIG
import { routerConfig } from "./router.config";

// ROUTES
import {
  AccountPage,
  CartPage,
  CollectionItemPage,
  CollectionPage,
  ContactPage,
  HomePage,
  PrivacyPolicyPage,
  SignInPage,
  SignUpPage,
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
        path: routerConfig.CollectionPage.path,
        element: <CollectionPage />,
        children: [
          {
            path: `${routerConfig.CollectionPage.path}${routerConfig.CollectionItemPage.path}`,
            element: <CollectionItemPage />,
          },
        ],
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
    ],
  },
]);

export default router;
