import { Text, View } from "react-native";
import { Feather, MaterialCommunityIcons } from "@expo/vector-icons";
import { theme } from "../../../../styles/theme";

export default function Searched({title}){
  return (
    <View style={{  ...flex, justifyContent: "space-between"}}>
      <View style={{ ...flex, width: "90%", justifyContent: "start", gap: 8}}>
        <MaterialCommunityIcons name="history" size={24} color="gray" />
        <Text style={{color: theme.colors.mblue}}>
          {title}
        </Text>
      </View>
      <Feather name="x" size={24} color="red" />
    </View>
  );
}

const flex = {
  display: "flex",
  flexDirection: "row",
  alignContent: "center",
  alignItems: "center"
}