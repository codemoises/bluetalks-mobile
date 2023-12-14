import { View, Image, TouchableOpacity } from "react-native";
import Heading from "../Heading";
import { API_URL } from "@env";

export default function ProfileInformation({
  profileSrc,
  name,
  email,
  onPress,
}) {
  return (
    <View
      style={{
        position: "absolute",
        top: 90,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: 115,
      }}
    >
      <View style={{ position: "relative", width: 115, height: "100%" }}>
        <Image
          style={{ width: "100%", height: "100%", borderRadius: 55 }}
          source={{
            uri: profileSrc,
          }}
        />
      </View>
      <View style={{ marginVertical: 12 }}>
        <Heading children={name} />
      </View>
      <View>
        <Heading children={email} size={16} />
      </View>
    </View>
  );
}
