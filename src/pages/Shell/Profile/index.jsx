import { View, Alert, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import HeaderComponent from "../../../components/Header";
import Heading from "../../../components/Heading";
import ProfileInformation from "../../../components/ProfileInformation";

export default function Favorites() {
  async function Clicado() {
    Alert.alert("Clicado");
  }

  return (
    <View style={{ justifyContent: "center", alignItems: "center" }}>
      <HeaderComponent content={true} />
      <ProfileInformation
        profileSrc={
          "https://images.unsplash.com/photo-1516028437832-1394f2532d73?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
        name={"Blu"}
        email={"blu@talks.com"}
        onPress={Clicado}
      />
      <View
        style={{
          maxWidth: 344,
          marginVertical: 158,
        }}
      >
        <TouchableOpacity>
          <View
            style={{
              display: "flex",
              alignItems: "center",
              flexDirection: "row",
              paddingVertical: 6,
              paddingHorizontal: 12,
              gap: 10,
              borderWidth: 1,
              borderRadius: 6,
            }}
          >
            <MaterialCommunityIcons
              name="playlist-edit"
              size={24}
              color="#717171"
            />
            <Heading children={"Editar informações do perfil"} />
          </View>
        </TouchableOpacity>
      </View>
      <View
        style={{
          position: "absolute",
          top: 670,
          gap: 10,
        }}
      >
        <TouchableOpacity>
          <View
            style={{
              display: "flex",
              alignItems: "center",
              flexDirection: "row",
              paddingVertical: 6,
              paddingHorizontal: 12,
              borderWidth: 1,
              borderRadius: 6,
            }}
          >
            <Entypo name="log-out" size={24} color="#717171" />
            <Heading children={"Sair do aplicativo"} />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}
