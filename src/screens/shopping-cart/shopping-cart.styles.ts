import { StyleSheet } from "react-native";
import { FontWeight } from "theme/constants";
import { theme } from "theme/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  itemContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: theme.spacing.lg,
    marginVertical: theme.spacing.md,
    flexWrap: "wrap",
  },
  itemImage: {
    width: theme.size.md,
    height: theme.size.md,
    marginRight: theme.spacing.md,
    borderRadius: theme.radius.lg,
  },
  title: {
    ...theme.fonts({ fontWeight: FontWeight.bold }).caption,
    alignSelf: "center",
    width: "55%",
  },
  quantity: {
    ...theme.fonts({ fontWeight: FontWeight.bold }).caption,
    alignSelf: "center",
    marginHorizontal: theme.spacing.md,
  },
  icon: {
    alignSelf: "center",
    width: theme.spacing.lg,
    height: theme.spacing.lg,
    color: theme.colors.errorRed,
  },
  hr: {
    marginHorizontal: theme.spacing.md,
    height: StyleSheet.hairlineWidth,
    backgroundColor: theme.colors.emerald,
  },
  total: {
    ...theme.fonts({ fontWeight: FontWeight.bold }).caption,
    alignSelf: "center",
    marginVertical: theme.spacing.md,
  },
  bottomButton: {
    alignSelf: "center",
    marginBottom: theme.spacing.md,
    width: "80%",
  },
});
