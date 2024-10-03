import useAuth from "hooks/useAuth";
import React from "react";
import { SafeAreaView, TextInput, Text, ScrollView, View } from "react-native";
import { globalStyles } from "theme/global.styles";
import { theme } from "theme/theme";
import { styles } from "./login.styles";
import { ButtonText } from "components/Button/constants";
import Button from "components/Button/Button";
import LottieAnimation from "components/LottieAnimation/LottieAnimation";
import { LoginScreenNavigationProps } from "navigation/types";
import { LoginScreenText } from "./constants";
import { RootStackRouteNames } from "navigation/constants";

const LoginScreen = ({ navigation }: LoginScreenNavigationProps) => {
  const { onLogin, email, setEmail, password, setPassword } = useAuth();
  return (
    <SafeAreaView style={globalStyles.safeArea}>
      <ScrollView>
        <View style={styles.container}>
          <LottieAnimation
            styles={styles.animation}
            source={require("assets/lottie/triforce.json")}
          />

          <Text
            style={styles.title}
            accessibilityLabel={LoginScreenText.titleLabel}
          >
            {LoginScreenText.title}
          </Text>

          <TextInput
            style={styles.textInput}
            placeholder={LoginScreenText.emailPlaceholder}
            placeholderTextColor={theme.colors.black}
            selectionColor={theme.colors.emerald}
            value={email}
            textContentType="emailAddress"
            keyboardType="email-address"
            autoCapitalize="none"
            onChangeText={(e) => setEmail(e)}
          />
          <TextInput
            style={styles.textInput}
            placeholder={LoginScreenText.passwordPlaceholder}
            placeholderTextColor={theme.colors.black}
            selectionColor={theme.colors.emerald}
            value={password}
            textContentType="password"
            secureTextEntry
            autoCapitalize="none"
            onChangeText={(p) => setPassword(p)}
          />
          <Button
            buttonText={ButtonText.login}
            onPress={() => onLogin(email, password)}
            disabled={false}
            buttonStyle={styles.loginButtonStyle}
            buttonTextStyle={styles.buttonTextStyle}
          />
          <Button
            buttonText={ButtonText.signUp}
            onPress={() =>
              navigation.navigate(RootStackRouteNames.RegisterScreenName)
            }
            disabled={false}
            buttonStyle={styles.signUpButtonStyle}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default LoginScreen;
