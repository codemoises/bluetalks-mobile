import { View, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import HeaderComponent from "../../../components/Header";
import Heading from "../../../components/Heading";
import ProfileInformation from "../../../components/ProfileInformation";
import { useContext, useState, useEffect } from "react";
import { AuthContext } from "../../../utils/authContext";
import { API_URL } from "@env";

export default function Favorites({ navigation, route }) {
  const { auth } = useContext(AuthContext);
  const [user, setUser] = useState(auth.usuario);
  useEffect(() => {
    const focusHandler = navigation.addListener("focus", () => {
      (async () => {
        const response = await api.get(`/usuario/${auth.usuario._id}`);

        setUser(response.data);
      })();
    });

    return focusHandler;
  }, [navigation]);

  return (
    <View style={{ justifyContent: "center", alignItems: "center" }}>
      <HeaderComponent />
      <ProfileInformation
        profileSrc={
          user.foto
            ? API_URL + "file/" + user.foto
            : "https://www.mountsinai.on.ca/wellbeing/our-team/team-images/person-placeholder/image"
        }
        name={user.nome}
        email={user.email}
      />
      <View
        style={{
          maxWidth: 344,
          marginVertical: 158,
        }}
      >
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("EditProfile", {
              name: user.nome,
              email: user.email,
              photo: user.foto,
            })
          }
        >
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
        <TouchableOpacity onPress={() => navigation.replace("Login")}>
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
