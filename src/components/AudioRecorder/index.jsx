import * as React from "react";
import { View, StyleSheet, Button, Text } from "react-native";
import { Audio } from "expo-av";
import { theme } from "../../styles/theme";
import ButtonComponent from "../Button";
export default function AudioRecorder({ uri, setUri }) {
  const [recording, setRecording] = React.useState();

  async function startRecording() {
    try {
      await Audio.requestPermissionsAsync();
      await Audio.setAudioModeAsync({
        allowsRecordingIOS: true,
        playsInSilentModeIOS: true,
      });

      const { recording } = await Audio.Recording.createAsync(
        Audio.RecordingOptionsPresets.HIGH_QUALITY,
      );
      setRecording(recording);
    } catch (err) {
      console.error("Failed to start recording", err);
    }
  }

  async function stopRecording() {
    setRecording(undefined);
    await recording.stopAndUnloadAsync();
    await Audio.setAudioModeAsync({
      allowsRecordingIOS: false,
    });
    const uri = recording.getURI();
    setUri(uri);
  }

  return (
    <View>
      <ButtonComponent
        title={recording ? "Parar de gravar" : "Gravar áudio"}
        onPress={recording ? stopRecording : startRecording}
      ></ButtonComponent>
    </View>
  );
}
