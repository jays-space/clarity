import { RoutesType } from "@/router";

const config: RoutesType = {
  HomePage: {
    name: "home",
    pathname: "/",
  },
  AccountPage: {
    name: "my account",
    pathname: "/my_account",
  },
  CartPage: {
    name: "cart",
    pathname: "/cart",
  },
  CollectionPage: {
    name: "cupcakes",
    pathname: "/cupcakes",
  },
  CollectionItemPage: {
    name: "cupcake",
    pathname: "/:cupcakeID",
  },
  ContactPage: {
    name: "contact",
    pathname: "/contact",
  },
  PrivacyPolicyPage: {
    name: "privacy policy",
    pathname: "/privacy_policy",
  },
  SignInPage: {
    name: "sign in",
    pathname: "/sign_in",
  },
  SignUpPage: {
    name: "sign up",
    pathname: "/sign_up",
  },
  TermsAndConditionsPage: {
    name: "terms & conditions",
    pathname: "/terms_and_conditions",
  },
};

export default config;
