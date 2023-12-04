import { View, Image } from "react-native";
import ButtonComponent from "../../../components/Button";
import HeaderComponent from "../../../components/Header";
import React from "react";

export default function EditFigure() {
  return (
    <View>
      <HeaderComponent title={"Editar figura"} content={true} />
      <View style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 82, marginTop: 42 }}>
        <View
          style={{ width: 336, height: 374, borderWidth: 1, borderRadius: 14 }}
        >
          <Image
            source={{
              uri: "https://images.unsplash.com/photo-1697758885406-4d7136458e18?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            }}
            style={{ width: "100%", height: "100%", borderRadius: 14 }}
          />
        </View>
        <View style={{ width: 247 }}>
          <ButtonComponent title={"Subir nova foto"} />
        </View>
      </View>
    </View>
  );
}
