import { RoutesType } from "@router";

export const routerConfig: RoutesType = {
  HomePage: {
    label: "home",
    path: "/",
  },
  CollectionsPage: {
    label: "cupcakes",
    path: "/cupcakes",
  },
  CollectionPage: {
    label: "collection",
    path: "/:collectionName",
  },
  CollectionItemPage: {
    label: "collection item",
    path: "/:cupcakeID",
  },
  AccountPage: {
    label: "my account",
    path: "/my_account",
  },
  ContactPage: {
    label: "contact",
    path: "/contact",
  },
  CartPage: {
    label: "cart",
    path: "/cart",
  },
  TermsAndConditionsPage: {
    label: "terms & conditions",
    path: "/terms_and_conditions",
  },
  PrivacyPolicyPage: {
    label: "privacy policy",
    path: "/privacy_policy",
  },
  SignInPage: {
    label: "sign in",
    path: "/sign_in",
  },
  SignUpPage: {
    label: "sign up",
    path: "/sign_up",
  },
};
