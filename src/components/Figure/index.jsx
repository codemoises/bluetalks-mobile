import {
  View,
  Image,
  TouchableNativeFeedback,
  TouchableOpacity
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import Heading from "../Heading";
import { Audio } from "expo-av";
import React from "react";

export default function Figure({ imageSrc, audioSrc, title, favorite }) {
  const [sound, setSound] = React.useState();
  const [favorited, setFavorited] = React.useState(favorite);

  async function playSound() {
    const { sound } = await Audio.Sound.createAsync({
      uri: audioSrc,
    });
    setSound(sound);

    await sound.playAsync();
  }

  React.useEffect(() => {
    return sound
      ? () => {
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

  return (
    <TouchableNativeFeedback onPress={playSound}>
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
            position: "relative",
            width: "100%",
            height: 140,
            borderRadius: 12,
            border: "1px solid #212121",
          }}
        >
          <Image
            style={{ borderRadius: 12, width: "100%", height: "100%" }}
            source={{ uri: imageSrc }}
          />
        </View>
        <View style={{ position: "absolute", top: 6, right: 6 }}>
          <TouchableOpacity>
            {favorited ? (
              <AntDesign name="staro" size={21} color="#4D4D4D" />
            ) : (
              <AntDesign name="star" size={24} color="#FFD700" />
            )}
          </TouchableOpacity>
        </View>
        <View style={{ position: "absolute", bottom: 32, right: 6 }}>
          <TouchableOpacity>
            <Feather name="edit" size={21} color="#4D4D4D" />
          </TouchableOpacity>
        </View>
        <View style={{ margin: "4px 0" }}>
          <Heading children={title} colorDark={true} size={16} />
        </View>
      </View>
    </TouchableNativeFeedback>
  );
}
