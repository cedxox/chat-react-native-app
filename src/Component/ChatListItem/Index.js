import { Text, View, Image, StyleSheet, Pressable } from "react-native";
import {useNavigation } from '@react-navigation/native'

// DayJS library will help us display dates in human-readable format
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);


const ChatListItem = ({chat}) => {
  const navigation = useNavigation();
  return (
    // use the presseble  events and function to render the navigator
    <Pressable onPress={()=> navigation.navigate('Chat', {id : chat.id, name:chat.user.name} )} style={styles.container}>
      <Image
        source={{
            // the connection using props({chat}) with the data on app .js {chat.user.name}etc
        //   uri: "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/lukas.jpeg",
        url: chat.user.image
        }}
        style={styles.Image}
      />
      <View style={styles.content}>
        <View style={styles.row}>
          <Text numberOfLines={1} style={styles.Xname}>{chat.user.name}</Text>
          {/* dayjs (chat.lastMessage.createdAt).fromNow()  renders the relativeTime plugins on the date text*/}
          <Text style={styles.subtitle}>{dayjs(chat.lastMessage.createdAt).fromNow()}</Text>
        </View>
        <Text numberOfLines={2} style={styles.subtitle}>{chat.lastMessage.text}</Text>
      </View>
    </Pressable>
  );
};
export default ChatListItem;

const styles = StyleSheet.create({
  container: {
    flexDirection:"row",
    marginHorizontal:10,
    marginVertical:5,
    height:70,
  },
  Image: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight:10,

  },
  content:{
    flex:1,

    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor:"lightgray"
  },
  row: {
    flexDirection:'row',
    marginBottom:5,
   
  },
  Xname: {
    flex:1,
    
},
  subtitle: {
    color:'gray',
  },
});



// THIS COMPONENT IS FOR THE CHAT LIST TABB ON THE CAHT APP 