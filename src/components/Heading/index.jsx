export default function Heading({ children, fontSize = 28, colorDark = true}) {
  return (
    <h1
      style={{
        padding: "0 16px",
        margin: 0,
        color: colorDark ? "#212121" : "#fff",
        fontSize: fontSize,
        fontWeight: "bold",
      }}
    >
      {children}
    </h1>
  );
}
