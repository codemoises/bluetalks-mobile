import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Register from "../pages/Register";
import SignIn from "../pages/SignIn";
import Home from "../pages/Home";
import { View } from "react-native";

const Tab = createBottomTabNavigator();



export default function Routes() {
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
        name="Home"
        component={Home}
        options={{ headerShown: false, tabBarIcon: ({ focused }) => (
          <View>

          </View>
        ),
      }}
      />
      <Tab.Screen
        name="Entrar"
        component={SignIn}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Login"
        component={Register}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
}
