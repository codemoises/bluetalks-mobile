import React from "react";
import Heading from "../Heading";
import { FaChevronLeft } from "react-icons/fa";

export default function HeaderComponent({ title, content = true }) {
  return (
    <div
      style={{
        position: "fixed",
        width: "100%",
        height: "65px",
        background: "#0671E0",
      }}
    >
      <div
        style={{
          maxWidth: "398px",
          margin: "13.5px auto",
          display: "flex",
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
        <div
          style={{ 
            display: content ? "block" : "none", 
            width: "24px" }}
        ></div>
      </div>
    </div>
  );
}
