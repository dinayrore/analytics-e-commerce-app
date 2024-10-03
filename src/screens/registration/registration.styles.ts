import { StyleSheet } from "react-native";
import { FontWeight } from "theme/constants";
import { theme } from "theme/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  image: {
    marginVertical: theme.spacing.xl,
  },
  title: {
    ...theme.fonts({ fontWeight: FontWeight.bold }).heading,
    marginVertical: theme.spacing.sm,
  },
  textInput: {
    borderBottomWidth: 1,
    borderColor: theme.colors.emerald,
    marginBottom: theme.spacing.lg,
    paddingVertical: theme.spacing.sm,
    width: "80%",
  },
  buttonStyle: {
    marginVertical: theme.spacing.md,
    width: "80%",
  },
  buttonTextStyle: {
    color: theme.colors.emerald,
  },
});
