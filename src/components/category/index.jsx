import { View, Image } from "react-native";
import Heading from "../Heading";

export default function Category({ CategorySrc, title }) {
  return (
    <View
      style={{
        width: "125px",
        height: "164px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <View
        style={{
          width: "100%",
          height: "140px",
          borderRadius: "12px",
          border: "1px solid #212121",
        }}
      >
        <Image
          style={{ borderRadius: 12, width: "100%", height: "100%" }}
          source={{ uri: CategorySrc }}
        />
      </View>
      <View style={{ margin: "4px 0" }}>
        <Heading children={title} colorDark={true} />
      </View>
    </View>
  );
}
