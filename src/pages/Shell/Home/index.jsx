import Heading from "../../../components/Heading";
import HeaderComponent from "../../../components/Header";
import { View } from "react-native";
import Category from "../../../components/Category";

export default function Home({ navigation }) {
  return (
    <View>
      <HeaderComponent title={"Bom dia, Blu"} content={false} />
      <View style={{ padding: 24, display: "flex", gap: 16 }}>
        <Heading children={"Minhas figuras"} colorDark={true} size={24} />
        {/* <SafeAreaView>
          <FlatList 
            data={figures} 
            keyExtractor={figure => figure.id}
            numColumns={2}
            renderItem={({ item }) => <View style={{marginHorizontal: 24, marginVertical: 12}}><Figure imageSrc={item.src} title={item.title} audioSrc={item.audio}></Figure></View>}
          />
        </SafeAreaView> */}
        <Category
          categorySrc={
            "https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png"
          }
          title={"teste"}
          navigation={navigation}
        ></Category>
      </View>
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
