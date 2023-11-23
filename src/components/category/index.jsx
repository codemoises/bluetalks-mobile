import Heading from "../Heading";

export default function Category({ CategorySrc, CategoryAlt, title }) {
  return (
    <div
      style={{
        width: "125px",
        height: "164px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div style={{ width: "100%", height: "140px", borderRadius: '12px', border: '1px solid #212121' }}>
        <img style={{ borderRadius: '12px', width: "100%", height: "100%" }} src={CategorySrc} alt={CategoryAlt} />
      </div>
      <div style={{ margin: "4px 0" }}>
        <Heading children={title} colorDark={true} fontSize={"14px"} />
      </div>
    </div>
  );
}
