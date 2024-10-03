import React from "react";
import { Text, View } from "react-native";
import useAuth from "hooks/useAuth";
import Button from "components/Button/Button";
import { ButtonText } from "components/Button/constants";
import { styles } from "./MenuDrawer.styles";
import useMenuDrawer from "hooks/useMenuDrawer";
import { useNavigation } from "@react-navigation/native";
import useShoppingCart from "hooks/useShoppingCart";
import { LoginNavigationProps } from "navigation/types";
import { RootStackRouteNames } from "navigation/constants";
import { postRequest } from "services/fetch/post";
import {
  sendSnowplowExperimentEvent,
  sendSnowplowRemoveGlobalContextEvent,
} from "services/snowplow/helpers";

const MenuDrawer = () => {
  const { user, onLogout } = useAuth();
  const { cart } = useShoppingCart();
  const navigation = useNavigation<LoginNavigationProps>();
  // Hook for Analytics on MenuDrawer
  useMenuDrawer();

  return (
    <View style={styles.menu}>
      {user ? (
        <View>
          <View style={styles.userInfo}>
            <Text style={styles.userInfoLabel}>
              {"Name: "}
              <Text style={styles.userInfoText}>{user.name}</Text>
            </Text>
            <Text style={styles.userInfoLabel}>
              {"Email: "}
              <Text style={styles.userInfoText}>{user.email}</Text>
            </Text>
          </View>
          <View style={styles.menuButton}>
            <Button
              buttonStyle={styles.buttonStyle}
              buttonTextStyle={styles.buttonTextStyle}
              buttonText={ButtonText.logout}
              onPress={() => onLogout(cart)}
            />
            <Button
              buttonStyle={styles.buttonStyle}
              buttonTextStyle={styles.buttonTextStyle}
              buttonText={ButtonText.experimentEligibility}
              onPress={() => postRequest(user)}
            />
            <Button
              buttonStyle={styles.buttonStyle}
              buttonTextStyle={styles.buttonTextStyle}
              buttonText={ButtonText.trackExperimentAssignment}
              onPress={() => sendSnowplowExperimentEvent(user)}
            />
            <Button
              buttonStyle={styles.buttonStyle}
              buttonTextStyle={styles.buttonTextStyle}
              buttonText={ButtonText.removeGlobalContext}
              onPress={() => sendSnowplowRemoveGlobalContextEvent(user)}
            />
          </View>
        </View>
      ) : (
        <View style={styles.bottomMenuButton}>
          <Button
            buttonStyle={styles.buttonStyle}
            buttonTextStyle={styles.buttonTextStyle}
            buttonText={ButtonText.login}
            onPress={() =>
              navigation.navigate(RootStackRouteNames.LoginScreenName)
            }
          />
        </View>
      )}
    </View>
  );
};

export default MenuDrawer;
