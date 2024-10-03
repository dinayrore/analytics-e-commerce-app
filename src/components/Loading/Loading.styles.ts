import { StyleSheet } from "react-native";
import { theme } from "theme/theme";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignSelf: "center",
  },
  loading: {
    height: theme.size.giant,
    width: theme.size.giant,
  },
});

export default styles;
