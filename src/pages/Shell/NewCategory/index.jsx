import { View, Image } from "react-native";
import ButtonComponent from "../../../components/Button";
import HeaderComponent from "../../../components/Header";
import { useState } from "react";
import AudioRecorder from "../../../components/AudioRecorder";
import ImagePick from "../../../components/ImagePicker";
import TextInputComponent from "../../../components/TextInput";

export default function NewCategory({ navigation, route }) {
  const [image, setImage] = useState("");
  const [text, setText] = useState("");

  return (
    <View>
      <HeaderComponent
        title={"Nova Categoria"}
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
            title={"Nome da categoria"}
            value={text}
            onChange={setText}
          />
          <ImagePick uri={image} setUri={setImage} />
        </View>
        <View style={{ width: "60%" }}>
          <ButtonComponent title={"salvar"} />
        </View>
      </View>
    </View>
  );
}
