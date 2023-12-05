import { View, Image, TouchableOpacity } from "react-native";
import Heading from "../Heading";

export default function Category({
  categoryId,
  categorySrc,
  title,
  navigation,
}) {
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("Category", { title })}
    >
      <View
        style={{
          width: 125,
          height: 164,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <View
          style={{
            width: "100%",
            height: 140,
            borderRadius: 12,
            border: "1px solid #212121",
          }}
        >
          <Image
            style={{ borderRadius: 12, width: "100%", height: "100%" }}
            source={{ uri: categorySrc }}
          />
        </View>
        <View style={{ margin: "4px 0" }}>
          <Heading children={title} colorDark={true} size={16} />
        </View>
      </View>
    </TouchableOpacity>
  );
}
