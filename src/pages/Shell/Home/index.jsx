import Heading from "../../../components/Heading";
import HeaderComponent from "../../../components/Header";
import { SafeAreaView, View } from "react-native";
import Category from "../../../components/Category";
import ButtonComponent from "../../../components/Button";
import api from "../../../utils/api";
import { useEffect, useState } from "react";
import CategoryListView from "../../../components/CategoryListView";

export default function Home({ navigation }) {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    const focusHandler = navigation.addListener("focus", () => {
      (async () => {
        const response = await api.get("/categorias");

        setCategories(response.data);
      })();
    });

    return focusHandler;
  }, [navigation]);

  return (
    <SafeAreaView>
      <View>
        <HeaderComponent title={"Minhas Categorias"} content={false} />
        <View
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-end",
            marginVertical: 26,
          }}
        >
          <View style={{ marginHorizontal: 12 }}>
            <ButtonComponent
              title={"Adicionar Categoria"}
              onPress={() => navigation.navigate("NewCategory")}
            />
          </View>
        </View>
        <View
          style={{
            paddingBottom: 80,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: 16,
          }}
        >
          <CategoryListView categories={figures} navigation={navigation} />
        </View>
      </View>
    </SafeAreaView>
  );
}

const figures = [
  {
    audio:
      "https://www.myinstants.com/media/sounds/que-isso-meu-filho-calma_bAsYtD0.mp3",
    src: "https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png",
    title: "teste1",
    id: 1,
  },
  {
    audio:
      "https://www.myinstants.com/media/sounds/que-isso-meu-filho-calma_bAsYtD0.mp3",
    src: "https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png",
    title: "teste2",
    id: 2,
  },
  {
    audio:
      "https://www.myinstants.com/media/sounds/que-isso-meu-filho-calma_bAsYtD0.mp3",
    src: "https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png",
    title: "teste3",
    id: 3,
  },
  {
    audio:
      "https://www.myinstants.com/media/sounds/que-isso-meu-filho-calma_bAsYtD0.mp3",
    src: "https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png",
    title: "teste4",
    id: 4,
  },
  {
    audio:
      "https://www.myinstants.com/media/sounds/que-isso-meu-filho-calma_bAsYtD0.mp3",
    src: "https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png",
    title: "teste5",
    id: 5,
  },
];
