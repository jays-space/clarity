import { createBrowserRouter } from "react-router-dom";

// CONFIG
import { routerConfig } from "@/router";

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

const router = createBrowserRouter([
  {
    path: routerConfig.HomePage.pathname,
    element: <HomePage />,
  },
  {
    path: routerConfig.AccountPage.pathname,
    element: <AccountPage />,
  },
  {
    path: routerConfig.CartPage.pathname,
    element: <CartPage />,
  },
  {
    path: routerConfig.CollectionPage.pathname,
    element: <CollectionPage />,
    children: [
      {
        path: routerConfig.CollectionItemPage.pathname,
        element: <CollectionItemPage />,
      },
    ],
  },
  {
    path: routerConfig.ContactPage.pathname,
    element: <ContactPage />,
  },
  {
    path: routerConfig.PrivacyPolicyPage.pathname,
    element: <PrivacyPolicyPage />,
  },
  {
    path: routerConfig.SignInPage.pathname,
    element: <SignInPage />,
  },
  {
    path: routerConfig.SignUpPage.pathname,
    element: <SignUpPage />,
  },
  {
    path: routerConfig.TermsAndConditionsPage.pathname,
    element: <TermsAndConditionsPage />,
  },
]);

export default router;
