import "react-native-get-random-values";
import { v4 as uuidv4 } from "uuid";
import React, { useState, ReactNode, useMemo, useCallback } from "react";
import { AuthenticationContext } from "./Authentication.context";
import {
  emailValidator,
  authenticator,
  nameValidator,
  passwordValidator,
  constructErrorMessage,
} from "services/authentication/authentication.service";
import useToastMessage from "hooks/useToastMessage";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import {
  sendAnalyticsLoginEvents,
  sendAnalyticsLogoutEvents,
  sendAnalyticsSignUpEvents,
} from "services/analytics/helpers";
import { User, Purchase } from "services/data/types";
import { ProductsNavigationProps } from "navigation/types";
import { BottomTabRouteNames } from "navigation/constants";
import { ToastMessageText } from "components/ToastMessage/constants";
import { tracker } from "services/snowplow/tracker";

interface AuthenticationProviderProps {
  children: ReactNode;
}

const AuthenticationProvider = ({ children }: AuthenticationProviderProps) => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, _setIsLoading] = useState<boolean>(false);

  const { showNavi } = useToastMessage();
  const navigation = useNavigation<ProductsNavigationProps>();

  const onLogin = useCallback(async () => {
    const {
      emailMessage,
      passwordMessage,
      authenticatedUser,
      getAuthenticatedUser,
    } = await authenticator(email, password);

    if (getAuthenticatedUser === null) {
      showNavi(ToastMessageText.userNotFound);
    }

    if (!emailMessage && !passwordMessage) {
      setUser(authenticatedUser);

      // Set the user id for Snowplow
      tracker.setUserId(authenticatedUser.id);
      // console.log("tracker user id: ", authenticatedUser.id);

      sendAnalyticsLoginEvents(true, "Email");
      navigation.navigate(BottomTabRouteNames.ProductScreenVertical);
      return;
    }

    const toastMessage = constructErrorMessage(emailMessage, passwordMessage);
    if (toastMessage) {
      showNavi(toastMessage);
    }
  }, [email, password, navigation, showNavi]);

  const onRegister = useCallback(
    (userName: string, userEmail: string, userPassword: string) => {
      const nameMessage = nameValidator(userName);
      const emailMessage = emailValidator(userEmail, email);
      const passwordMessage = passwordValidator(userPassword, password);

      if (!nameMessage && !emailMessage && !passwordMessage) {
        const registeredUser: User = {
          id: uuidv4(),
          name,
          email,
          password,
        };
        setUser(registeredUser);
        AsyncStorage.setItem(
          "@AuthenticatedUser",
          JSON.stringify(registeredUser),
        );
        // Set the user id for Snowplow
        tracker.setUserId(registeredUser.id);
        // console.log("registered user id: ", registeredUser.id);

        sendAnalyticsSignUpEvents(true);
        navigation.navigate(BottomTabRouteNames.ProductScreenHorizontal);
      } else {
        const message = `${nameMessage}\n${emailMessage}\n${passwordMessage} `;
        const toastMessage = message.replace(`${undefined}\n`, "");
        showNavi(toastMessage);
      }
    },
    [email, password, showNavi, name, navigation],
  );

  const onLogout = useCallback(
    (cart: Purchase[]) => {
      setUser(null);
      sendAnalyticsLogoutEvents(cart, false);
      navigation.navigate(BottomTabRouteNames.ProductScreenVertical);
    },
    [navigation],
  );

  const provider = useMemo(() => {
    return {
      isAuthenticated: !!user,
      user,
      isLoading,
      onLogin,
      onLogout,
      onRegister,
      email,
      setEmail,
      password,
      setPassword,
      name,
      setName,
    };
  }, [user, isLoading, email, password, name, onLogin, onLogout, onRegister]);

  return (
    <AuthenticationContext.Provider value={provider}>
      {children}
    </AuthenticationContext.Provider>
  );
};

export default AuthenticationProvider;
