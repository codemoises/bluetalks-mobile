import { SafeAreaView, View, FlatList } from "react-native";
import HeaderComponent from "../../../components/Header";
import ButtonComponent from "../../../components/Button";
import Figure from "../../../components/Figure";
import FigureListView from "../../../components/FigureListView";
import { useState, useEffect } from "react";

export default function CategoryScreen({ navigation, route }) {
  const { title, categoryId } = route.params;
  const [figures, setFigures] = useState([]);

  useEffect(() => {
    const focusHandler = navigation.addListener("focus", () => {
      (async () => {
        const response = await api.get(`/categoria/${categoryId}/figuras`);

        setFigures(response.data);
      })();
    });

    return focusHandler;
  }, [navigation, categoryId]);

  return (
    <View>
      <HeaderComponent
        title={title}
        content={true}
        hasGoBack={true}
        navigation={navigation}
      />
      <View
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-end",
          marginVertical: 26,
        }}
      >
        <View style={{ width: 166, marginHorizontal: 26 }}>
          <ButtonComponent
            title={"Adicionar figura"}
            onPress={() => navigation.navigate("NewFigure", { categoryId })}
          />
        </View>
      </View>
      <FigureListView figures={figures} navigation={navigation} />
    </View>
  );
}
