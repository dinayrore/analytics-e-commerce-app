import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AlternateProductsScreen from "screens/products/alternate-products.screen";
import ProductsScreen from "screens/products/products.screen";
import { BottomTabRouteNames } from "./constants";
import { BottomTabParamList } from "./types";
import { tabBarLabel } from "./helpers";

const Tab = createBottomTabNavigator<BottomTabParamList>();

// Bottom Tab Group for navigating between A/B Testing Views
const BottomTabsNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarIconStyle: { display: "none" },
        headerShown: false,
      }}
    >
      <Tab.Screen
        name={BottomTabRouteNames.ProductScreenVertical}
        component={ProductsScreen}
        options={{
          tabBarLabel: ({ focused }) =>
            tabBarLabel(focused, BottomTabRouteNames.ProductScreenVertical),
        }}
      />
      <Tab.Screen
        name={BottomTabRouteNames.ProductScreenHorizontal}
        component={AlternateProductsScreen}
        options={{
          tabBarLabel: ({ focused }) =>
            tabBarLabel(focused, BottomTabRouteNames.ProductScreenHorizontal),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabsNavigator;
