import { View, Text, TextInput,StyleSheet } from "react-native";
import { useState } from "react";
// using expo vector-icons on antdesign and materialicon
import { AntDesign, MaterialIcons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";

const InputBox = () => {
    const [newMessage, setNewMessage] = useState("");

    // onSend helps to link the function state data on onpress in the icon send
    const onSend = () => {
        console.warn('sending a message:', newMessage);
        setNewMessage("");
    };


  return (
    <SafeAreaView edges={['bottom']}  style={styles.container}>

      {/* icon */}
      <AntDesign name="plus" size={20} color="royalblue" />

      {/* textinput */}
                         {/* bind the sate using vaue and onchangetext */}
      <TextInput style={styles.input} value={newMessage} onChangeText={setNewMessage} placeholder="type your message..." />

      {/* icon */}
      <MaterialIcons onPress={onSend} style={styles.send} name="send" size={16} color="white" />
    </SafeAreaView >
  );
};

export default InputBox;


const styles = StyleSheet.create({
    container: {
    flexDirection:"row",
    backgroundColor:'whitesmoke',
    padding:5,
    alignItems:"center",
    paddingHorizontal:10,

    
    },

    input:{
        flex:1,
        backgroundColor:'white',
        borderRadius:50,
        padding:5,
        paddingHorizontal:10,
        paddingVertical:10,
        borderColor:'lightgray',
        marginHorizontal:10,
        borderWidth: StyleSheet.hairlineWidth,
    
    },
    send:{
        // color:'royalblue', 
        //*** */ either you use color and padding only or you use background color, borderRadius, padding and overflow without the color
        backgroundColor:'royalblue',
        padding:7,
        borderRadius:15,
        overflow:"hidden"
    },
});
