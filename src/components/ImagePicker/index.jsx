import React, { useState, useEffect } from "react";
import { Button, Image, View, Platform } from "react-native";
import * as ImagePicker from "expo-image-picker";
import ButtonComponent from "../Button";

export default function ImagePick({ uri, setUri }) {
  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      selectionLimit: 1,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setUri(result.assets[0].uri);
    }
  };

  return (
    <View style={{ gap: 12 }}>
      {uri && (
        <Image
          source={{ uri: uri }}
          style={{
            width: 200,
            height: 200,
            borderRadius: 12,
            alignSelf: "center",
          }}
        />
      )}
      <ButtonComponent title="Escolha uma foto" onPress={pickImage} />
    </View>
  );
}
