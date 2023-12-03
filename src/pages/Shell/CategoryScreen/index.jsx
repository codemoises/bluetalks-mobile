import { View } from "react-native";
import HeaderComponent from "../../../components/Header";
import ButtonComponent from "../../../components/Button";
import Figure from "../../../components/Figure";

export default function CategoryScreen() {
  return (
    <View>
      <HeaderComponent title={"Comer"} content={true} />
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
          <ButtonComponent title={"Adicionar figura"} />
        </View>
      </View>
      <SafeAreaView
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <FlatList
          data={figures}
          keyExtractor={(figure) => figure.id}
          numColumns={2}
          renderItem={({ item }) => (
            <View style={{ marginHorizontal: 24, marginVertical: 12 }}>
              <Figure
                imageSrc={item.src}
                title={item.title}
                audioSrc={item.audio}
                favorite={item.favorite}
              ></Figure>
            </View>
          )}
        />
      </SafeAreaView>
    </View>
  );
}

const figures = [
  {
    audio:
      "https://www.myinstants.com/media/sounds/que-isso-meu-filho-calma_bAsYtD0.mp3",
    src: "https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png",
    title: "teste1",
    id: 1,
    favorite: true,
  },
  {
    audio:
      "https://www.myinstants.com/media/sounds/que-isso-meu-filho-calma_bAsYtD0.mp3",
    src: "https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png",
    title: "teste2",
    id: 2,
    favorite: false,
  },
  {
    audio:
      "https://www.myinstants.com/media/sounds/que-isso-meu-filho-calma_bAsYtD0.mp3",
    src: "https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png",
    title: "teste3",
    id: 3,
    favorite: true,
  },
  {
    audio:
      "https://www.myinstants.com/media/sounds/que-isso-meu-filho-calma_bAsYtD0.mp3",
    src: "https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png",
    title: "teste4",
    id: 4,
    favorite: false,
  },
  {
    audio:
      "https://www.myinstants.com/media/sounds/que-isso-meu-filho-calma_bAsYtD0.mp3",
    src: "https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png",
    title: "teste5",
    id: 5,
    favorite: true,
  },
];
