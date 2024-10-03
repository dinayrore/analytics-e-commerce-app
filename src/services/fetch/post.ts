import Constants from "expo-constants";
import { User } from "services/data/types";

const API_URL = Constants.expoConfig?.extra?.API_URL;

export const postRequest = (user: User) => {
  // console.log("SENDING REQUEST FOR USER: ", user?.id);
  fetch(API_URL, {
    method: "POST",
    headers: {
      Accept: "text/plain",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      userId: user?.id,
      appId: "e-commerce-app",
      kvPairs: {
        potato: "true",
        additionalProp2: "I love potatoes",
        additionalProp3: "potatoes is yummy",
      },
    }),
  });
  // console.log("REQUEST SENT");
};
