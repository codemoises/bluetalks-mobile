import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Register from "../pages/Register";
import SignIn from "../pages/SignIn";
import Home from "../pages/Home";

const Stack = createNativeStackNavigator();

export default function Routes() {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="Registro"
        component={Register}
        options={{ headerShown: false }}
        />

      <Stack.Screen
        name="Entrar"
        component={SignIn}
        options={{ headerShown: false }}
        />

      <Stack.Screen 
        name="Home"
        component={Home}
        options={{ headerShown: false }}
        />
    </Stack.Navigator>
  );
}
