import { Text } from "react-native";

export default function Heading({ children, colorDark = true}) {
  return (
    <Text
      style={{
        padding: "0 16px",
        margin: 0,
        color: colorDark ? "#212121" : "#fff",
        fontWeight: "bold",
      }}
    >
      {children}
    </Text>
  );
}
