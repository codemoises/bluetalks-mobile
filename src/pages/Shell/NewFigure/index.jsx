import { View, Image } from "react-native";
import ButtonComponent from "../../../components/Button";
import HeaderComponent from "../../../components/Header";
import { useState } from "react";
import AudioRecorder from "../../../components/AudioRecorder";
import ImagePick from "../../../components/ImagePicker";
import TextInputComponent from "../../../components/TextInput";

export default function NewFigure({ navigation, route }) {
  const [image, setImage] = useState("");
  const [text, setText] = useState("");
  const [audio, setAudio] = useState();

  async function handleSave() {
    try {
      const formData = new FormData();
      formData.append("nome", text);
      formData.append("categoryId", route.params.categoryId);
      formData.append("imagem", {
        uri: image,
        type: "image/jpeg",
        name: new Date().getTime() + "figure.jpg",
      });
      formData.append("audio", {
        uri: audio,
        type: "audio/mpeg",
        name: new Date().getTime() + "audio.mp3",
      });
      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        transformRequest: () => {
          return formData;
        },
      };
      await api.post("/figura", formData, config);

      navigation.goBack();
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <View>
      <HeaderComponent
        title={"Nova Figura"}
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
          <TextInputComponent
            title={"Nome da figura"}
            value={text}
            onChange={setText}
          />
          <ImagePick uri={image} setUri={setImage} />
          <AudioRecorder uri={audio} setUri={setAudio} />
        </View>
        <View style={{ width: "60%" }}>
          <ButtonComponent title={"salvar"} onPress={handleSave} />
        </View>
      </View>
    </View>
  );
}
