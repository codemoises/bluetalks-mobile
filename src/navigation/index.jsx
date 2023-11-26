import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";
import { Ionicons } from '@expo/vector-icons';

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
          tabBarIcon: ({focused, size, color }) => {
            if (focused)
              return <Ionicons name="home" size={size} color={color} />
            else
              return <Ionicons name="home-outline" size={size} color={color} />
          },
        }}
      />
    </Tab.Navigator>
  );
}
