import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import ChatListItem from "./src/Component/ChatListItem/Index";
import ChatsScreen from "./src/Screens/ChatsScreen";
import ChatScreen from "./src/Screens/ChatScreen";
import Navigator from "./src/Navigation/Index";

// chat dummy data
// const chat = {id: "1",user: {image: "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/lukas.jpeg",name: "Lukas",},lastMessage: {text: "Oke",createdAt: "07:30",},};

export default function App() {
  return (
    <View style={styles.container}>
      {/* <ChatListItem chat={chat}/><ChatListItem chat={chat}/><ChatListItem chat={chat}/> */}
      {/* connecting the chat dummy data with ChatListItem */}

      {/* <ChatsScreen/> */}
      {/* <ChatScreen /> */}

      <Navigator/>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    // a tempory padding that helps to place the notch on the phone away from the chats
    // paddingVertical: 55,
  },
});
