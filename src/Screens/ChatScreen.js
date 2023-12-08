import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  FlatList,
  KeyboardAvoidingView,
} from "react-native";
// use the route to link it with  useeffect
import { useRoute, useNavigation } from "@react-navigation/native";
import Message from "../Component/Message/Index";
import bg from "../../assets/images/splash.jpg";
import InputBox from "../Component/InputBox/Index";
import { useEffect } from "react";
// importing the dummy data used
import messages from "../../assets/data/messages.json";

const ChatScreen = () => {
  // connect the route and the useEfect to render the navigator
  const route = useRoute();
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({ title: route.params.name });
  }, [route.params.name]);
  
  //  Flatlist and it's function renders the dummy data created on the assets folder on the chat app that show how it was ment to be placed on the Message folder
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={Platform.OS === "ios" ? 60 : 90}
      style={Styles.bg}
    >
      <ImageBackground source={bg} style={Styles.bg}>
        <FlatList
          data={messages}
          renderItem={({ item }) => <Message message={item} />}
          style={Styles.list}
          inverted
        />
        <InputBox />
      </ImageBackground>
    </KeyboardAvoidingView>
  );
};

export default ChatScreen;

const Styles = StyleSheet.create({
  bg: {
    flex: 1,
  },
  list: {
    padding: 10,
  },
});
