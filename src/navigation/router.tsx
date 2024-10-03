import React from "react";
import AuthenticationProvider from "contexts/authentication/Authentication.provider";
import AppNavigator from "./app.navigator";
import ProductsProvider from "contexts/products/Products.provider";
import ShoppingCartProvider from "contexts/shopping-cart/ShoppingCart.provider";

const Router = () => {
  return (
    <AuthenticationProvider>
      <ProductsProvider>
        <ShoppingCartProvider>
          <AppNavigator />
        </ShoppingCartProvider>
      </ProductsProvider>
    </AuthenticationProvider>
  );
};

export default Router;
