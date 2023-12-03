import Heading from "../Heading";
import { Feather } from "@expo/vector-icons";
import { View } from "react-native";

export default function HeaderComponent({ title, content }) {
  return (
    <View
      style={{
        position: "fixed",
        width: "100%",
        height: 95,
        backgroundColor: "#0671E0",
      }}
    >
      <View
        style={{
          marginLeft: 25,
          marginRight: 40,
          paddingTop: 20,
          height: "100%",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: content ? "center" : "flex-start",
        }}
      >
        <Heading children={title} colorDark={false} size={28} />
        <View
          style={{
            display: content ? "block" : "none",
            width: "24px",
          }}
        ></View>
      </View>
    </View>
  );
}
