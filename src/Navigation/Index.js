// using navigation/native to create a navigationbutton and top

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import ChatScreen from "../Screens/ChatScreen";
import ContactScreen from "../Screens/ContactScreen";
import MainTabNavigator from "./MainTabNavigator";

const Stack = createNativeStackNavigator();

const Navigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerStyle: {backgroundColor: "whitesmoke"}}}>
        <Stack.Screen name="Home" component={MainTabNavigator} options={{headerShown:false}} />
        {/* <Stack.Screen name="Chats" component={ChatsScreen} /> */}
        <Stack.Screen name="Chat" component={ChatScreen} />
        <Stack.Screen name="Contacts" component={ContactScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;

// npx expo install @react-navigation/native @react-navigation/native-stack @react-navigation/bottom-tabs react-native-screens react-native-safe-area-context [for the navigation]
