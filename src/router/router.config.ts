import { RoutesType } from "@router";

export const StoreRoot = "/management";

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
  StoreManagementPage: {
    label: "manage store",
    path: "/management",
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
  StoreCollectionsPage: {
    label: "see all cupcakes",
    path: `${StoreRoot}/collections`,
  },
  StoreCollectionPage: {
    label: "StoreCollectionPage",
    path: `${StoreRoot}/collections/:collectionName`,
  },
  EditStoreCollectionPage: {
    label: "EditStoreCollectionPage",
    path: `${StoreRoot}/collections/:collectionName/edit`,
  },
  AddStoreCollectionPage: {
    label: "add new collection",
    path: `${StoreRoot}/new_collection`,
  },
  StoreCollectionItemPage: {
    label: "StoreCollectionItemPage",
    path: `${StoreRoot}/collections/:collectionName/:cupcakeID`,
  },
  EditStoreCollectionItemPage: {
    label: "EditStoreCollectionItemPage",
    path: `${StoreRoot}/collections/:collectionName/:cupcakeID/edit`,
  },
  AddStoreCollectionItemPage: {
    label: "add new cupcake",
    path: `${StoreRoot}/new_cupcake`,
  },
  StoreAdminPage: {
    label: "see all admins",
    path: `${StoreRoot}/admins`,
  },
  AddStoreAdminPage: {
    label: "add new admin",
    path: `${StoreRoot}/admins/new_admin`,
  },
  EditStoreAdminPage: {
    label: "edit admin",
    path: `${StoreRoot}/admins/:adminID/edit`,
  },
  StoreAdminItemPage: {
    label: "edit admin",
    path: `${StoreRoot}/admins/:adminID`,
  },
  Checkout: {
    label: "checkout",
    path: `/checkout`,
  },
};
