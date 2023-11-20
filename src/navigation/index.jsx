import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { View } from "react-native";
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
        tabBarStyle: {position: 'absolute',
        bottom: 0,
        height: 95,
        elevation: 0,
        backgroundColor: '#0671E0'}
      }}
    >
      <Tab.Screen
        name="Favoritos"
        component={Favorites}
        options={{ headerShown: false, tabBarIcon: ({ focused }) => (
          <View>
            <FaRegStar style={{ fontSize: 23 }} color="white" />
          </View>
        ),
      }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{ headerShown: false, tabBarIcon: ({ focused }) => (
          <View>
            <FaSearch style={{ fontSize: 23 }} color="white" />
          </View>
        ),
      }}
      />
      <Tab.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false, tabBarIcon: ({ focused }) => (
          <View>
            <FaHome style={{ fontSize: 23 }} color="white" />
          </View>
        ),
      }}
      />
      <Tab.Screen
        name="Notificações"
        component={Notification}
        options={{ headerShown: false, tabBarIcon: ({ focused }) => (
          <View>
            <FaBell style={{ fontSize: 23 }} color="white" />
          </View>
        ),
      }}
      />
      <Tab.Screen
        name="Perfil"
        component={Profile}
        options={{ headerShown: false, tabBarIcon: ({ focused }) => (
          <View>
            <FaUserAlt style={{ fontSize: 23 }} color="white" />
          </View>
        ),
      }}
      />
    </Tab.Navigator>
  );
}
