import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { headerOptions } from "./header-options";
import ProductDetailsScreen from "screens/product-details/product-details.screen";
import { RootStackParamList } from "./types";
import { createDrawerNavigator } from "@react-navigation/drawer";

import ErrorScreen from "screens/error/error.screen";
import useAuth from "hooks/useAuth";
import ShoppingCartScreen from "screens/shopping-cart/shopping-cart.screen";
import RegistrationScreen from "screens/registration/registration.screen";

import CheckoutScreen from "screens/checkout/checkout.screen";
import { mixpanel } from "services/analytics/mixpanel/events";
import { MixpanelSuperProperty } from "services/analytics/mixpanel/constants";
import { RootStackRouteNames } from "./constants";
import BottomTabsNavigator from "./tab.navigator";
import MenuDrawer from "components/MenuDrawer/MenuDrawer";
import LoginScreen from "screens/login/login.screen";

const Drawer = createDrawerNavigator<RootStackParamList>();
const Stack = createNativeStackNavigator<RootStackParamList>();

const AppNavigator = () => {
  const { isAuthenticated } = useAuth();
  // Send Mixpanel Super Properties
  mixpanel.registerSuperProperties({
    [MixpanelSuperProperty.loggedIn]: isAuthenticated,
  });

  return (
    <Drawer.Navigator
      drawerContent={() => <MenuDrawer />}
      initialRouteName={RootStackRouteNames.ProductsScreenName}
      screenOptions={headerOptions()}
    >
      {/* Screens */}
      <Stack.Group>
        <Stack.Screen
          name={RootStackRouteNames.ProductsScreenName}
          component={BottomTabsNavigator}
        />
        <Stack.Screen
          name={RootStackRouteNames.ProductDetailsScreenName}
          component={ProductDetailsScreen}
        />
        <Stack.Screen
          name={RootStackRouteNames.RegisterScreenName}
          component={RegistrationScreen}
        />
        <Stack.Screen
          name={RootStackRouteNames.LoginScreenName}
          component={LoginScreen}
        />
        <Stack.Screen
          name={RootStackRouteNames.ErrorScreenName}
          component={ErrorScreen}
        />

        {isAuthenticated && (
          <Stack.Group>
            <Stack.Screen
              name={RootStackRouteNames.ShoppingCartScreenName}
              component={ShoppingCartScreen}
            />
            <Stack.Screen
              name={RootStackRouteNames.CheckoutScreenName}
              component={CheckoutScreen}
            />
          </Stack.Group>
        )}
      </Stack.Group>
    </Drawer.Navigator>
  );
};

export default AppNavigator;
