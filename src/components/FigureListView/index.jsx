import { SafeAreaView, View, FlatList } from "react-native";
import Figure from "../Figure";

export default function FigureListView({ figures, navigation }) {
  return (
    <SafeAreaView
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <FlatList
        data={figures}
        keyExtractor={(figure) => figure._id}
        numColumns={2}
        contentContainerStyle={{ paddingBottom: 400 }}
        renderItem={({ item }) => (
          <View style={{ marginHorizontal: 24, marginVertical: 12 }}>
            <Figure
              id={item._id}
              imageSrc={item.imagem}
              title={item.nome}
              audioSrc={item.audio}
              favorite={item.favoritada}
              navigation={navigation}
            ></Figure>
          </View>
        )}
      />
    </SafeAreaView>
  );
}
