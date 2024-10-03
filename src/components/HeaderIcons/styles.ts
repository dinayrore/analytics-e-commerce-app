import { StyleSheet } from "react-native";
import { theme } from "theme/theme";

export const styles = StyleSheet.create({
  logo: {
    height: theme.size.sm,
    width: theme.size.sm,
  },
  menuIcon: { marginLeft: theme.spacing.md },
  shoppingCartIcon: { marginRight: theme.spacing.md },
});
