import { createStackNavigator } from "@react-navigation/stack";
import Register from "../pages/Register";
import Login from "../pages/Login";
import Navigation from "./navigation";
import EditFigure from "../pages/Shell/EditFigure";
import CategoryScreen from "../pages/Shell/CategoryScreen";
import NewCategory from "../pages/Shell/NewCategory";

const Stack = createStackNavigator();

export default function MyStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="NewCategory" component={NewCategory} />
      <Stack.Screen name="EditFigure" component={EditFigure} />
      <Stack.Screen name="Category" component={CategoryScreen} />
      <Stack.Screen name="Navigation" component={Navigation} />
    </Stack.Navigator>
  );
}
