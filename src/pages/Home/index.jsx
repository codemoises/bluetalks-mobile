import { Text, View } from "react-native";
import HeaderComponent from "../../components/Header";

export default function Home() {
  return (
    <View>
      <HeaderComponent title={"Bom dia, Blu"} content={false} />
    </View>
  );
}
