import { View, Text, FlatList } from "react-native";
import chats from "../../assets/data/chats.json";
// importing the dummy data used
import ChatListItem from "../Component/ChatListItem/Index";

const ChatsScreen = () => {
  // Flatlist and it's function renders the dummy data created on the assets folder on the chat app that show how it was ment to be placed on the Chatlistitem
  return (
    <View>
      <FlatList
        data={chats}
        renderItem={({ item }) => <ChatListItem chat={item} 
        style={{backgroundColor: "white" }} />}
      />
    </View>
  );
};

export default ChatsScreen;
