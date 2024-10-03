import React from "react";
import Logo from "components/HeaderIcons/Logo";
import { theme } from "theme/theme";
import ShoppingCartIcon from "components/HeaderIcons/ShoppingCartIcon";
import MenuIcon from "components/HeaderIcons/MenuIcon";

export const headerOptions = () => ({
  headerStyle: {
    backgroundColor: theme.colors.emerald,
  },
  headerTitle: () => <Logo />,
  headerLeft: () => <MenuIcon />,
  headerRight: () => <ShoppingCartIcon />,
});
