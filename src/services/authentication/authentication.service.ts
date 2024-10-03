import AsyncStorage from "@react-native-async-storage/async-storage";
import { ToastMessageText } from "components/ToastMessage/constants";
import { User } from "services/data/types";

export const emailValidator = (email: string, userEmail: string) => {
  const re = /\S+@\S+\.\S+/;
  if (!email) {
    return ToastMessageText.emptyEmail;
  }
  if (!re.test(email)) {
    return ToastMessageText.invalidEmail;
  }
  if (email !== userEmail) {
    return ToastMessageText.mismatchEmail;
  }
  return;
};

export const passwordValidator = (password: string, userPassword: string) => {
  if (!password) {
    return ToastMessageText.emptyPassword;
  }
  if (password.length < 8) {
    return ToastMessageText.invalidPassword;
  }
  if (password !== userPassword) {
    return ToastMessageText.mismatchPassword;
  }
  return;
};

export const nameValidator = (name: string) => {
  if (!name) {
    return ToastMessageText.emptyName;
  }
  return;
};

export const authenticator = async (email: string, password: string) => {
  const getAuthenticatedUser = await AsyncStorage.getItem("@AuthenticatedUser");
  try {
    if (getAuthenticatedUser === null) {
      throw new Error("Authenticator Method: No user found");
    }
    const authenticatedUser: User = JSON.parse(getAuthenticatedUser);
    const emailMessage = emailValidator(email, authenticatedUser.email);
    const passwordMessage = passwordValidator(
      password,
      authenticatedUser.password,
    );
    return {
      emailMessage,
      passwordMessage,
      authenticatedUser,
      getAuthenticatedUser,
    };
  } catch (error: any) {
    throw new Error(error);
  }
};

export const constructErrorMessage = (
  emailMessage: ToastMessageText | undefined,
  passwordMessage: ToastMessageText | undefined,
) => {
  const message = `${emailMessage}\n${passwordMessage} `;
  if (message.includes(`${undefined}\n`)) {
    return message.replace(`${undefined}\n`, "");
  } else {
    return message.replace("undefined", "");
  }
};
