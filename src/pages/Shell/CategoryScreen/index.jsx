import { View } from "react-native";
import HeaderComponent from "../../../components/Header";
import ButtonComponent from "../../../components/Button";

export default function CategoryScreen() {
    return (
        <View>
            <HeaderComponent title={"Comer"} content={true} />
            <View>
                <View>
                    <ButtonComponent title={"Adicionar figura"} />
                </View>
            </View>
            <View>
                
            </View>
        </View>
    );
};