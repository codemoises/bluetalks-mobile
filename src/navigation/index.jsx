import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { StyleSheet, View } from "react-native";
import { FaRegStar } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { FaBell } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";

import Home from "../pages/Home";
import Favorites from "../pages/Favorites";
import Search from "../pages/Search";
import Notification from "../pages/Notification";
import Profile from "../pages/Profile";

const Tab = createBottomTabNavigator();

export default function Navigation() {
  return (
    <Tab.Navigator
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
              <FaRegStar
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
