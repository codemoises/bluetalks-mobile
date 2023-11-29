import { createStackNavigator } from '@react-navigation/stack';
import Register from '../../pages/Register'
import Login from '../../pages/Login';
import Navigation from '..';

const Stack = createStackNavigator();

export default function MyStack() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Register" component={Register} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Navigation" component={Navigation} />
        </Stack.Navigator>
    );
}