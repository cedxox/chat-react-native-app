import { View, Text, FlatList } from "react-native";
import chats from "../../assets/data/chats.json";
import ContactListItem from "../Component/ContactListItem/Index";


const ContactScreen = () => {
  return (
    <View>
       <FlatList
        data={chats}
        renderItem={({ item }) => <ContactListItem user={item.user} 
        style={{backgroundColor: "white" }} />}
      />
    </View>
  )
}

export default ContactScreen