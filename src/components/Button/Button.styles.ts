import { StyleSheet } from "react-native";
import { FontWeight } from "theme/constants";
import { theme } from "theme/theme";

const styles = StyleSheet.create({
  buttonStyle: {
    backgroundColor: theme.colors.emerald,
    borderRadius: theme.radius.lg,
    padding: theme.spacing.md,
  },
  buttonTextStyle: {
    ...theme.fonts({
      fontWeight: FontWeight.bold,
      color: theme.colors.white,
    }).bodyText,
    alignSelf: "center",
  },
});

export default styles;
