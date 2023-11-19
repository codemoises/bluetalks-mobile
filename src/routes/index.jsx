import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Register from '../pages/Register';
import SignIn from '../pages/SignIn';
import Home from '../pages/Home';

const Tab = createBottomTabNavigator();

export default function Routes() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Registro" component={Register} options={{ headerShown: false }} />
      <Tab.Screen name="Entrar" component={SignIn} options={{ headerShown: false }} />
      <Tab.Screen name="Home" component={Home} options={{ headerShown: false }} />
    </Tab.Navigator>
  );
};
