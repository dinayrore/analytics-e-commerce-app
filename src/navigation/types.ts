/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

import {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from "@react-navigation/native-stack";
import { BottomTabRouteNames, RootStackRouteNames } from "./constants";

export type BottomTabParamList = {
  [BottomTabRouteNames.ProductScreenVertical]: undefined;
  [BottomTabRouteNames.ProductScreenHorizontal]: undefined;
};

export type RootStackParamList = {
  [RootStackRouteNames.Tabs]: undefined;
  [RootStackRouteNames.Drawer]: undefined;
  [RootStackRouteNames.ProductsScreenName]: undefined;
  [RootStackRouteNames.ProductDetailsScreenName]: { id: string };
  [RootStackRouteNames.ShoppingCartScreenName]: undefined;
  [RootStackRouteNames.CheckoutScreenName]: undefined;
  [RootStackRouteNames.LoginScreenName]: undefined;
  [RootStackRouteNames.RegisterScreenName]: undefined;
  [RootStackRouteNames.ErrorScreenName]: undefined;
  [RootStackRouteNames.EmptyStateScreenName]: undefined;
};

export type RootStackScreenProps<Screen extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, Screen>;

// Stack Screen Prop Types for navigation
export type ProductsScreenNavigationProps = NativeStackScreenProps<
  BottomTabParamList,
  BottomTabRouteNames.ProductScreenVertical
>;

export type ProductDetailsScreenNavigationProps = NativeStackScreenProps<
  RootStackParamList,
  RootStackRouteNames.ProductDetailsScreenName
>;

export type ShoppingCartScreenNavigationProps = NativeStackScreenProps<
  RootStackParamList,
  RootStackRouteNames.ShoppingCartScreenName
>;

export type CheckoutScreenNavigationProps = NativeStackScreenProps<
  RootStackParamList,
  RootStackRouteNames.CheckoutScreenName
>;

export type LoginScreenNavigationProps = NativeStackScreenProps<
  RootStackParamList,
  RootStackRouteNames.LoginScreenName
>;

export type RegisterScreenNavigationProps = NativeStackScreenProps<
  RootStackParamList,
  RootStackRouteNames.RegisterScreenName
>;

export type ErrorScreenNavigationProps = NativeStackScreenProps<
  RootStackParamList,
  RootStackRouteNames.ErrorScreenName
>;

export type EmptyStateNavigationProps = NativeStackScreenProps<
  RootStackParamList,
  RootStackRouteNames.EmptyStateScreenName
>;

// Stack Screen Navigation Prop Types for useNavigation
export type ProductsNavigationProps = NativeStackNavigationProp<
  BottomTabParamList,
  BottomTabRouteNames.ProductScreenVertical
>;

export type ProductDetailsNavigationProps = NativeStackNavigationProp<
  RootStackParamList,
  RootStackRouteNames.ProductDetailsScreenName
>;

export type ShoppingCartNavigationProps = NativeStackNavigationProp<
  RootStackParamList,
  RootStackRouteNames.ShoppingCartScreenName
>;

export type ErrorNavigationProps = NativeStackNavigationProp<
  RootStackParamList,
  RootStackRouteNames.ErrorScreenName
>;

export type LoginNavigationProps = NativeStackNavigationProp<
  RootStackParamList,
  RootStackRouteNames.LoginScreenName
>;
