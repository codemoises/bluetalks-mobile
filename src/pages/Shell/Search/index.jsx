import { Text, View } from 'react-native';
import HeaderComponent from '../../../components/Header';
import { Feather } from "@expo/vector-icons";
import { TextInput } from 'react-native';
import Searched from './components/searchedItem';

export default function Search() {
  return (
        <View>
            <HeaderComponent title={'Pesquisar'} content={true} />
            <View style={{paddingHorizontal: 12, gap: 24}}>
              <View style={searchInputStyle}>
                  <Feather name="search" size={24} color="black" />
                  <TextInput placeholder={"Pesquisar"} style={{width: "100%"}}/>
              </View>
              <Text style={{fontSize: 20, fontWeight: "bold"}}>Recentes</Text>
              <View>
                <Searched title={"Pesquisa 1"}/>
              </View>
            </View>
        </View>
  );
};

const searchInputStyle = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "start",
  alignItems: "center",
  marginTop: 50,
  borderColor: "black" ,
  gap: 10,
  borderWidth: 1,
  padding: 10,
  borderRadius: 12
}