import { StyleSheet } from "react-native";
import { FontWeight } from "theme/constants";
import { theme } from "theme/theme";

export const styles = StyleSheet.create({
  card: {
    width: 150,
    height: 150,
    borderWidth: 1,
    borderColor: theme.colors.lightGray,
    backgroundColor: theme.colors.white,
    borderRadius: theme.radius.sm,
    alignSelf: "center",
    // Dropshadow for iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: theme.radius.lg,
    // Dropshadow for Android
    elevation: 3,
    margin: theme.spacing.md,
  },
  image: {
    width: "100%",
    height: 75,
    borderTopLeftRadius: theme.radius.sm,
    borderTopRightRadius: theme.radius.sm,
  },
  title: {
    padding: theme.spacing.sm,
    textAlign: "center",
    ...theme.fonts({
      fontWeight: FontWeight.bold,
      color: theme.colors.turquoise,
    }).bodyText,
  },
});
