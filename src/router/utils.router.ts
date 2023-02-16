import { routerConfig, RoutesType, RouteType } from ".";

export const getNavLinks = () => {
  let navRoutes: RouteType[] = [];
  for (let route in routerConfig) {
    if (
      routerConfig[route as keyof RoutesType].label ===
        routerConfig.HomePage.label ||
      routerConfig[route as keyof RoutesType].label ===
        routerConfig.CollectionPage.label ||
      routerConfig[route as keyof RoutesType].label ===
        routerConfig.AccountPage.label
    ) {
      navRoutes.push(routerConfig[route as keyof RoutesType]);
    }
  }
  return navRoutes;
};
