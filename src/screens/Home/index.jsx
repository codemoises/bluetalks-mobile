import { View } from "react-native";
import HeaderComponent from "../../components/Header";
import Figure from "../../components/Figure";
import Category from "../../components/category";
import { GlobalStyles } from "../../styles/global-styles";

export default function Home() {
  return (
    <View style={GlobalStyles.main}>
      <HeaderComponent title={"Bom dia, Blu"} content={false} />
      <View style={{ marginTop: 80, marginStart: 12, height: "96vh" }}>
        <Figure
          FigureSrc={
            "https://images.unsplash.com/photo-1509114397022-ed747cca3f65?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
          title={"Comer"}
        />
        <Category
          CategorySrc={
            "https://images.unsplash.com/photo-1509114397022-ed747cca3f65?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
          title={"#Brinquedos"}
        />
      </View>
    </View>
  );
}
