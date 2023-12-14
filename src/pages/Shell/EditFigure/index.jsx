import { View, Image } from "react-native";
import ButtonComponent from "../../../components/Button";
import HeaderComponent from "../../../components/Header";
import { useState } from "react";
import AudioRecorder from "../../../components/AudioRecorder";
import ImagePick from "../../../components/ImagePicker";
import TextInputComponent from "../../../components/TextInput";
import api from "../../../utils/api";

export default function EditFigure({ navigation, route }) {
  const { id, title, imageSrc, audioSrc } = route.params;
  const [text, setText] = useState(title);
  const [image, setImage] = useState(imageSrc);
  const [audio, setAudio] = useState(audioSrc);

  async function handleEdit() {
    try {
      const formData = new FormData();

      if (text !== title) {
        formData.append("nome", text);
      }

      if (image && image !== imageSrc) {
        formData.append("imagem", {
          uri: image,
          type: "image/jpeg",
          name: new Date().getTime() + "figure.jpg",
        });
      }

      if (audio && audio !== audioSrc) {
        formData.append("audio", {
          uri: audio,
          type: "audio/mpeg",
          name: new Date().getTime() + "audio.mp3",
        });
      }

      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        transformRequest: () => {
          return formData;
        },
      };

      await api.patch(`/figura/${id}`, formData, config);
      navigation.goBack();
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <View>
      <HeaderComponent
        title={"Editar figura"}
        content={true}
        hasGoBack={true}
        navigation={navigation}
      />
      <View
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 82,
          marginTop: 42,
        }}
      >
        <View
          style={{
            height: "60%",
            borderRadius: 14,
            display: "flex",
            gap: 16,
          }}
        >
          <TextInputComponent value={text} onChange={setText} />
          <ImagePick uri={image} setUri={setImage} />
          <AudioRecorder uri={audio} setUri={setAudio} />
        </View>
        <View style={{ width: "60%" }}>
          <ButtonComponent title={"salvar"} onPress={handleEdit} />
        </View>
      </View>
    </View>
  );
}
