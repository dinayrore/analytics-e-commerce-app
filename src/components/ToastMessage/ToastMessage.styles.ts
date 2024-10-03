import { StyleSheet } from "react-native";
import { FontWeight } from "theme/constants";
import { theme } from "theme/theme";

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    alignItems: "center",
    padding: theme.spacing.md,
    gap: theme.spacing.sm,
    width: "90%",
    borderRadius: theme.radius.sm,
    backgroundColor: theme.colors.skyBlue,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: theme.radius.sm,
    elevation: 2,
    alignSelf: "center",
  },
  image: {
    paddingHorizontal: theme.spacing.md,
    justifyContent: "flex-start",
  },
  textContainer: {
    width: "90%",
    paddingHorizontal: theme.spacing.md,
    justifyContent: "flex-end",
  },
  heading: theme.fonts({ fontWeight: FontWeight.bold }).bodyText,
  bodyText: {
    ...theme.fonts({}).caption,
    flexWrap: "wrap",
  },
});

export default styles;
