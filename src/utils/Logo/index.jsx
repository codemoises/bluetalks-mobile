import { Image, View } from "react-native";

export default function Logo() {
  return (
    <View style={{ marginTop: 30 }}>
      <Image style={{ width: "100%" }} resizeMode="contain" source={require('../../../assets/image/B.png')} />
    </View>
  );
}
