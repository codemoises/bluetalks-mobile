import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";
import { Ionicons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import Favorites from "../screens/Favorites";
import Search from "../screens/Search";
import Notification from "../screens/Notification";
import Profile from "../screens/Profile";

const Tab = createBottomTabNavigator();

export default function Navigation() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBarOptions={{ showLabel: false }}
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
        name="Favorites"
        component={Favorites}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => {
            if (focused)
              return (
                <Feather name="star" size={25} style={{ color: "white" }} />
              );
            else
              return (
                <Feather name="star" size={25} style={{ color: "black" }} />
              );
          },
        }}
      />
      <Tab.Screen
        name="Pesquisar"
        component={Search}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => {
            if (focused)
              return (
                <Ionicons name="ios-search" size={25} style={{ color: "white" }} />
              );
            else
              return (
                <Ionicons name="ios-search" size={25} style={{ color: "black" }} />
              );
          },
        }}
      />
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => {
            if (focused)
              return (
                <Ionicons name="home" size={25} style={{ color: "white" }} />
              );
            else
              return (
                <Ionicons
                  name="home-outline"
                  size={25}
                  style={{ color: "black" }}
                />
              );
          },
        }}
      />
      <Tab.Screen
        name="Notificações"
        component={Notification}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => {
            if (focused)
              return (
                <Feather name="bell" size={25} style={{ color: "white" }} />
              );
            else
              return (
                <Feather
                  name="bell"
                  size={25}
                  style={{ color: "black" }}
                />
              );
          },
        }}
      />
      <Tab.Screen
        name="Perfil"
        component={Profile}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => {
            if (focused)
              return (
                <Feather name="user" size={25} style={{ color: "white" }} />
              );
            else
              return (
                <Feather
                  name="user"
                  size={25}
                  style={{ color: "black" }}
                />
              );
          },
        }}
      />
    </Tab.Navigator>
  );
}
