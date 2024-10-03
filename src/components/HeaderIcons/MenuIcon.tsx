import React from "react";
import {
  DrawerActions,
  NavigationProp,
  useNavigation,
} from "@react-navigation/native";
import Icon from "components/Icon/Icon";
import { styles } from "./styles";
import { RootStackParamList } from "navigation/types";

const MenuIcon = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  return (
    <Icon
      style={styles.menuIcon}
      type={"Entypo"}
      name={"menu"}
      onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
    />
  );
};

export default MenuIcon;
