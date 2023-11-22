export default function Heading({ children, fontSize = 28 }) {
  return (
    <h1
      style={{
        padding: "0 16px",
        margin: 0,
        color: "#fff",
        fontSize: fontSize,
        fontWeight: "bold",
      }}
    >
      {children}
    </h1>
  );
}
