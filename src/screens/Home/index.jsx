import { View } from "react-native";
import HeaderComponent from "../../components/Header";
import Figure from "../../components/Figure";

export default function Home() {
  return (
    <View>
      <HeaderComponent title={"Bom dia, Blu"} content={false} />
      <div style={{ margin: "80px 8px", height: "100vh" }}>
        <Figure
          FigureSrc={
            "https://images.unsplash.com/photo-1509114397022-ed747cca3f65?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
          FigureAlt={"minha figura"}
          title={"Comer"}
        />
      </div>
    </View>
  );
}
