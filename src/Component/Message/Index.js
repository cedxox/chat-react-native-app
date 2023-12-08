import { View, Text, StyleSheet } from "react-native";
import React from "react";
// DayJS library will help us display dates in human-readable format
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);

// a message props
const Message = ({ message }) => {
  //this helps to state whether the id on the message dummy data for the sender or the reciver is present so it can render the flex-end and the  backgroung color
  const isMyMessage = () => {
    return message.user.id === "u1";
  };

  return (
    // this  backgroundColor: isMyMessage() ? "lightblue" : "#ffff",and this  alignSelf: isMyMessage() ? "flex-end" : "flex-start", helps to determine which of the chats is the reciver or the sender
    <View
      style={[
        styles.container,
        {
          backgroundColor: isMyMessage() ? "lightblue" : "#ffff",
          alignSelf: isMyMessage() ? "flex-end" : "flex-start",
        },
      ]}
    >
      <Text>{message.text}</Text>
      {/* dayjs (message.createdAt).fromNow()  renders the relativeTime plugins on the date text*/}
      <Text style={styles.time}>{dayjs(message.createdAt).fromNow()}</Text>
    </View>
  );
};

export default Message;

const styles = StyleSheet.create({
  container: {
    margin: 5,
    padding: 10,
    borderRadius: 10,
    maxWidth: "80%",
    // shadows opacity
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 6,
  },

  time: {
    color: "gray",
    alignSelf: "flex-end",
  },
});
