import { StyleSheet } from "react-native";
import { theme } from "theme/theme";

const styles = StyleSheet.create({
  container: {
    height: theme.size.xs,
    minWidth: theme.size.xs,
    borderRadius: theme.radius.md,
    backgroundColor: theme.colors.sage,
    position: "absolute",
    right: theme.spacing.sm,
    bottom: theme.spacing.md,
    justifyContent: "center",
    alignItems: "center",
  },
  label: {
    ...theme.fonts({ color: theme.colors.black }).caption,
  },
});

export default styles;
