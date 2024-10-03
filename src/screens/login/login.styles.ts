import { StyleSheet } from "react-native";
import { FontWeight } from "theme/constants";
import { theme } from "theme/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  animation: {
    marginVertical: theme.spacing.lg,
    width: theme.size.giant,
    height: theme.size.giant,
  },
  title: {
    ...theme.fonts({ fontWeight: FontWeight.bold }).heading,
    marginVertical: theme.spacing.lg,
  },
  textInput: {
    borderBottomWidth: 1,
    borderColor: theme.colors.emerald,
    marginBottom: theme.spacing.lg,
    paddingVertical: theme.spacing.sm,
    width: "80%",
  },
  loginButtonStyle: {
    backgroundColor: theme.colors.white,
    borderWidth: 2,
    borderColor: theme.colors.emerald,
    marginVertical: theme.spacing.lg,
    width: "80%",
  },
  signUpButtonStyle: {
    width: "80%",
  },
  buttonTextStyle: {
    color: theme.colors.emerald,
  },
});
