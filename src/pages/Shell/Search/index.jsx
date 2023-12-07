import { Text, View } from "react-native";
import HeaderComponent from "../../../components/Header";
import { Feather } from "@expo/vector-icons";
import { TextInput } from "react-native";
import Searched from "./components/searchedItem";
import { useState } from "react";
import FigureListView from "../../../components/FigureListView";
import api from "../../../utils/api";
import Heading from "../../../components/Heading";

export default function Search({ navigation }) {
  const [text, setText] = useState("");
  const [figures, setFigures] = useState([]);
  const [timeoutSearch, setTimeoutSearch] = useState(null);

  const handleSearch = (e) => {
    const textValue = e.nativeEvent.text;
    clearTimeout(timeoutSearch);

    if (!textValue) {
      setText("");
      setFigures([]);
      return;
    }

    setTimeoutSearch(
      setTimeout(() => {
        (async () => {
          const response = await api.get("/figuras", {
            params: {
              search: textValue.trim(),
            },
          });

          setFigures(response.data);
        })();
      }, 500),
    );
    setText(textValue);
  };

  return (
    <View>
      <HeaderComponent title={"Pesquisar"} content={true} />
      <View style={{ paddingHorizontal: 12, gap: 24 }}>
        <View style={searchInputStyle}>
          <Feather name="search" size={24} color="black" />
          <TextInput
            value={text}
            placeholder={"Pesquisar"}
            style={{ width: "100%" }}
            onChange={handleSearch}
          />
        </View>
        {!!figures && figures.length > 0 ? (
          <FigureListView figures={figures} navigation={navigation} />
        ) : (
          <Heading children={"Nenhuma figura encontrada"} />
        )}
      </View>
    </View>
  );
}

const searchInputStyle = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "start",
  alignItems: "center",
  marginTop: 50,
  borderColor: "black",
  gap: 10,
  borderWidth: 1,
  padding: 10,
  borderRadius: 12,
};
