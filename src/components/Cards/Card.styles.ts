import { StyleSheet } from "react-native";
import { FontWeight } from "theme/constants";
import { theme } from "theme/theme";

export const styles = StyleSheet.create({
  card: {
    width: "90%",
    borderWidth: 1,
    borderColor: theme.colors.lightGray,
    backgroundColor: theme.colors.white,
    borderRadius: theme.radius.sm,
    alignSelf: "center",
    alignItems: "center",
    // Dropshadow for iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: theme.radius.lg,
    // Dropshadow for Android
    elevation: 3,
    marginVertical: theme.spacing.lg,
  },
  smallCard: {
    width: "45%",
  },
  smallCardImage: {},
  image: {
    width: "100%",
    height: 200,
    borderTopLeftRadius: theme.radius.sm,
    borderTopRightRadius: theme.radius.sm,
  },
  itemDetails: {
    flexDirection: "row",
    flexWrap: "wrap",
    flexShrink: 1,
    width: "100%",
    justifyContent: "space-between",
    paddingHorizontal: theme.spacing.md,
  },

  title: {
    padding: theme.spacing.md,
    textAlign: "center",
    ...theme.fonts({
      fontWeight: FontWeight.bold,
      color: theme.colors.turquoise,
    }).heading,
  },
  description: {
    padding: theme.spacing.md,
    ...theme.fonts().bodyText,
  },
});
