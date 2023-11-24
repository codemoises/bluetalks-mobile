import React from "react";
import Heading from "../Heading";
import { FaChevronLeft } from "react-icons/fa";
import { View } from "react-native";

export default function HeaderComponent({ title, content = true }) {
  return (
    <View
      style={{
        position: "fixed",
        width: "100%",
        height: "65px",
        background: "#0671E0",
      }}
    >
      <View
        style={{
          maxWidth: "398px",
          height: "100%",
          margin: "13.5px auto",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: content ? "space-between" : "flex-start",
        }}
      >
        <FaChevronLeft
          style={{
            display: content ? "block" : "none",
            fontSize: "24px",
            height: "28px",
            color: "#fff",
          }}
        />
        <Heading children={title} colorDark={false} />
        <View
          style={{ 
            display: content ? "block" : "none", 
            width: "24px" }}
        ></View>
      </View>
    </View>
  );
}
