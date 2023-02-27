import { routerConfig, RoutesType, RouteType } from ".";

export const getNavLinks = () => {
  let navRoutes: RouteType[] = [];
  for (let route in routerConfig) {
    if (
      routerConfig[route as keyof RoutesType].label ===
        routerConfig.HomePage.label ||
      routerConfig[route as keyof RoutesType].label ===
        routerConfig.CollectionsPage.label ||
      routerConfig[route as keyof RoutesType].label ===
        routerConfig.AccountPage.label
    ) {
      navRoutes.push(routerConfig[route as keyof RoutesType]);
    }
  }
  return navRoutes;
};

export const getFooterLinks = () => {
  let navRoutes: RouteType[] = [];
  for (let route in routerConfig) {
    if (
      // routerConfig[route as keyof RoutesType].label ===
      //   routerConfig.AccountPage.label ||
      // routerConfig[route as keyof RoutesType].label ===
      //   routerConfig.ContactPage.label ||
      routerConfig[route as keyof RoutesType].label ===
      routerConfig.StoreManagementPage.label
      // routerConfig[route as keyof RoutesType].label ===
      //   routerConfig.TermsAndConditionsPage.label ||
      // routerConfig[route as keyof RoutesType].label ===
      //   routerConfig.PrivacyPolicyPage.label
    ) {
      navRoutes.push(routerConfig[route as keyof RoutesType]);
    }
  }
  return navRoutes;
};
