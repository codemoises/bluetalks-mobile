import Heading from "../../../components/Heading";
import GlobalStyles from "../../../styles/global-styles";
import HeaderComponent from "../../../components/Header";
import { StyleSheet } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { Text, View } from "react-native";

export default function Home() {
  return (
    <View>
      <HeaderComponent title={"Bom dia, Blu"} content={false} />
      <View style={{ margin: 85 }}>
        <Heading children={"react native eu te odeio muito"} />
      </View>
    </View>
  );
};
