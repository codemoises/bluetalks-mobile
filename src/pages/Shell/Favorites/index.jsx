import { View } from "react-native";
import HeaderComponent from "../../../components/Header";
import FigureListView from "../../../components/FigureListView";
import { useState, useEffect } from "react";

export default function Favorites({ navigation }) {
  const [figures, setFigures] = useState([]);
  useEffect(() => {
    (async () => {
      const response = await api.get("/figuras/favorite");

      setFigures(response.data);
    })();
  }, []);

  return (
    <View>
      <HeaderComponent title={"Favoritos"} content={true} />
      <FigureListView
        figures={figures}
        navigation={navigation}
      ></FigureListView>
    </View>
  );
}
