import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../pages/Shell/Home';
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import Favorites from '../pages/Shell/Favorites';
import Search from '../pages/Shell/Search';
import Notification from '../pages/Shell/Notification';
import Profile from '../pages/Shell/Profile';
import { View } from 'react-native';

const Tab = createBottomTabNavigator();

export default function Navigation() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarShowLabel: false,
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
                <View
                  style={{
                    backgroundColor: "#DBEDFF",
                    width: 48,
                    height: 48,
                    borderRadius: 50,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Feather name="star" size={25} style={{ color: "#0671E0" }} />
                </View>
              );
            else
              return (
                <Feather name="star" size={25} style={{ color: "#F5F7FA" }} />
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
                <View
                  style={{
                    backgroundColor: "#DBEDFF",
                    width: 48,
                    height: 48,
                    borderRadius: 50,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Ionicons
                    name="ios-search"
                    size={25}
                    style={{ color: "#0671E0" }}
                  />
                </View>
              );
            else
              return (
                <Ionicons
                  name="ios-search"
                  size={25}
                  style={{ color: "#F5F7FA" }}
                />
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
                <View
                  style={{
                    backgroundColor: "#DBEDFF",
                    width: 48,
                    height: 48,
                    borderRadius: 50,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Ionicons
                    name="home"
                    size={25}
                    style={{ color: "#0671E0" }}
                  />
                </View>
              );
            else
              return (
                <Ionicons
                  name="home-outline"
                  size={25}
                  style={{ color: "#F5F7FA" }}
                />
              );
          },
        }}
      />
      {/* <Tab.Screen
        name="Notificações"
        component={Notification}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => {
            if (focused)
              return (
                <View
                  style={{
                    backgroundColor: "#DBEDFF",
                    width: 48,
                    height: 48,
                    borderRadius: 50,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Feather name="bell" size={25} style={{ color: "#0671E0" }} />
                </View>
              );
            else
              return (
                <Feather name="bell" size={25} style={{ color: "#F5F7FA" }} />
              );
          },
        }}
      /> */}
      <Tab.Screen
        name="Perfil"
        component={Profile}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => {
            if (focused)
              return (
                <View
                  style={{
                    backgroundColor: "#DBEDFF",
                    width: 48,
                    height: 48,
                    borderRadius: 50,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Feather name="user" size={25} style={{ color: "#0671E0" }} />
                </View>
              );
            else
              return (
                <Feather name="user" size={25} style={{ color: "#F5F7FA" }} />
              );
          },
        }}
      />
    </Tab.Navigator>
  );
}
