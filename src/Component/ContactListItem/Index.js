import { Text, View, Image, StyleSheet, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

// DayJS library will help us display dates in human-readable format
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);

const ContactListItem = ({ user }) => {
  const navigation = useNavigation();
  return (
    // use the presseble  events and function to render the navigator
    <Pressable
      onPress={() =>{}} style={styles.container}>
      <Image
        source={{
          // the connection using props({chat}) with the data on app .js {chat.user.name}etc
          //   uri: "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/lukas.jpeg",
          url: user.image,
        }}
        style={styles.Image}
      />

      <Text numberOfLines={1} style={styles.Xname}>
        {user.name}
      </Text>
    </Pressable>
  );
};
export default ContactListItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginHorizontal: 10,
    marginVertical: 5,
    height: 70,
  },
  Image: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 10,
  },

  Xname: {
    flex: 1,
  },
});

// THIS COMPONENT IS FOR THE CHAT LIST TABB ON THE CAHT APP
