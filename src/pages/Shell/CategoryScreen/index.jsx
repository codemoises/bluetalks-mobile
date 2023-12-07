import { SafeAreaView, View, FlatList } from "react-native";
import HeaderComponent from "../../../components/Header";
import ButtonComponent from "../../../components/Button";
import Figure from "../../../components/Figure";
import FigureListView from "../../../components/FigureListView";

export default function CategoryScreen({ navigation, route }) {
  const { title } = route.params;
  // const [figures, setFigures] = useState([]);

  // useEffect(() => {
  //   (async () => {
  //     const response = await api.get("/categorias");
  //     console.log(response.data);

  //     setCategories(response.data);
  //   })();
  // }, []);

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
          <ButtonComponent title={"Adicionar figura"} />
        </View>
      </View>
      <FigureListView figures={figures} navigation={navigation} />
    </View>
  );
}

const figures = [
  {
    audio:
      "https://www.myinstants.com/media/sounds/que-isso-meu-filho-calma_bAsYtD0.mp3",
    src: "1701922452716-expo_logo_icon_145293.png",
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
