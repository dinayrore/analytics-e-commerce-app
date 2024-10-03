import { StyleSheet } from "react-native";
import { FontWeight } from "theme/constants";
import { theme } from "theme/theme";

export const styles = StyleSheet.create({
  menu: {
    flex: 1,
  },
  userInfo: {
    marginTop: theme.spacing.giant,
    marginBottom: theme.spacing.sm,
    padding: theme.spacing.md,
  },
  userInfoLabel: {
    ...theme.fonts({ fontWeight: FontWeight.bold }).bodyText,
    padding: theme.spacing.sm,
  },
  userInfoText: {
    ...theme.fonts().bodyText,
    padding: theme.spacing.xs,
  },
  menuButton: {
    padding: theme.spacing.md,
  },
  buttonStyle: {
    backgroundColor: theme.colors.white,
    borderWidth: 2,
    borderColor: theme.colors.emerald,
    marginBottom: theme.spacing.lg,
  },
  buttonTextStyle: {
    color: theme.colors.emerald,
  },
  bottomMenuButton: {
    marginTop: theme.spacing.giant,
    padding: theme.spacing.md,
    width: "100%",
  },
});
