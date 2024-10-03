import Toast from "react-native-toast-message";

const useToastMessage = () => {
  const showNavi = (text: string) => {
    Toast.show({ type: "showNavi", props: { bodyText: text } });
  };

  return {
    showNavi,
  };
};

export default useToastMessage;
