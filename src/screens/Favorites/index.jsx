import { View } from "react-native";
import Heading from "../../components/Heading";
import HeaderComponent from "../../components/Header";

export default function Favorites() {
  return (
    <View>
      <HeaderComponent title={"Favoritos"} content={true}  />
      <View style={{ margin: 85 }}>
        <Heading children={"fodaseeee"} colorDark={true} />
      </View>
    </View>
  );
}