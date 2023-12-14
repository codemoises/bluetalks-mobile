import { Text, View } from "react-native";
import * as yup from "yup";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import HeaderComponent from "../../../components/Header";
import TextInputComponent from "../../../components/TextInput";
import ButtonComponent from "../../../components/Button";
import ImagePick from "../../../components/ImagePicker";
import { useState, useContext } from "react";
import api from "../../../utils/api";
import { AuthContext } from "../../../utils/authContext";
import { API_URL } from "@env";

export default function EditProfile({ navigation, route }) {
  const { auth } = useContext(AuthContext);
  const { name, email, photo } = route.params;
  const [image, setImage] = useState(API_URL + "file/" + photo);

  const [nome, setName] = useState(name);
  const [mail, setEmail] = useState(email);

  const handleEdit = async () => {
    try {
      const formData = new FormData();
      formData.append("foto", {
        uri: image,
        type: "image/jpeg",
        name: new Date().getTime() + "profile.jpg",
      });
      formData.append("nome", nome);
      formData.append("email", mail);
      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        transformRequest: () => {
          return formData;
        },
      };

      await api.put(`/usuario/${auth.usuario._id}`, formData, config);
      navigation.goBack();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View>
      <HeaderComponent
        title={"Editar perfil"}
        content={true}
        hasGoBack={true}
        navigation={navigation}
      />
      <View
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: 50,
          gap: 24,
        }}
      >
        <View>
          <TextInputComponent
            title={"Apelido"}
            placeholder={"Blu"}
            onChange={setName}
            value={nome}
          />
        </View>
        <View>
          <TextInputComponent
            title={"Email"}
            placeholder={"Blu@talks.com"}
            onChange={setEmail}
            value={mail}
          />
        </View>
        <View>
          <ImagePick uri={image} setUri={setImage} />
        </View>
        <View style={{ width: 247, marginTop: 40 }}>
          <ButtonComponent title={"Confirmar"} onPress={handleEdit} />
        </View>
      </View>
    </View>
  );
}
