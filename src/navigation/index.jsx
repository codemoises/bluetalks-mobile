import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";
import { Entypo } from "react-native-vector-icons/Entypo";
import { FaHome } from "react-icons/fa";
import { Image, View } from "react-native";

const Tab = createBottomTabNavigator();

export default function Navigation() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBArOptions={{ showLabel: false }}
      screenOptions={{
        tabBarStyle: {
          position: "absolute",
          bottom: 0,
          height: 95,
          elevation: 0,
          backgroundColor: "#0671E0",
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          tabBarIcon: () => {
            
          },
        }}
      />
    </Tab.Navigator>
  );
}
