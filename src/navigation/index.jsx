import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { View } from "react-native";
import { FaStar } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { FaBell } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";

import Home from "../screens/Home";
import Favorites from "../screens/Favorites";
import Search from "../screens/Search";
import Notification from "../screens/Notification";
import Profile from "../screens/Profile";

const Tab = createBottomTabNavigator();

export default function Navigation() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        showLabel: false,
      }}
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
        name="Favoritos"
        component={Favorites}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                backgroundColor: focused ? "#DBEDFF" : "",
                width: 48,
                height: 48,
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 50,
              }}
            >
              <FaStar
                style={{ 
                  fontSize: 23, 
                  color: focused ? "#0671E0" : "white" }}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View 
              style={{
                backgroundColor: focused ? "#DBEDFF" : "",
                width: 48,
                height: 48,
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 50,
            }}>
              <FaSearch 
                style={{ 
                  fontSize: 23, 
                  color: focused ? "#0671E0" : "white" }} />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View 
              style={{
                backgroundColor: focused ? "#DBEDFF" : "",
                width: 48,
                height: 48,
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 50,
            }}>
              <FaHome 
                style={{ 
                  fontSize: 23,
                  color: focused ? "#0671E0" : "white" }} />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Notificações"
        component={Notification}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View 
              style={{
                backgroundColor: focused ? "#DBEDFF" : "",
                width: 48,
                height: 48,
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 50,
            }}>
              <FaBell 
                style={{ 
                  fontSize: 23,
                  color: focused ? "#0671E0" : "white" }} />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Perfil"
        component={Profile}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View 
              style={{
                backgroundColor: focused ? "#DBEDFF" : "",
                width: 48,
                height: 48,
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 50,
            }}>
              <FaUserAlt 
                style={{ 
                  fontSize: 23,
                  color: focused ? "#0671E0" : "white" }} />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
}
