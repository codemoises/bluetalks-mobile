import { View, Image, TouchableNativeFeedback } from "react-native";
import Heading from "../Heading";
import { Audio } from 'expo-av';
import React from "react";
 
export default function Figure({ imageSrc, audioSrc, title }) {
  const [sound, setSound] = React.useState();

  async function playSound() {
    const { sound } = await Audio.Sound.createAsync({
      uri: audioSrc
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
      <View style={{
        width: 125,
        height: 164,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}>
        <View
          style={{
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
        <View style={{ margin: "4px 0" }}>
          <Heading children={title} colorDark={true} size={16} />
        </View>
      </View>
    </TouchableNativeFeedback>
  );
}