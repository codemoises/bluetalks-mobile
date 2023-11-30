import Heading from "../../components/Heading";
import { View, TextInput } from "react-native";

export default function TextInputComponent({ title, placeholder, secure }) {
  return (
    <View>
      <Heading children={title} colorDark={true} size={16} />
      <TextInput
        style={{
          borderBottomWidth: 1,
          marginBottom: 24,
          width: 300,
          height: 40,
        }}
        placeholder={placeholder}
        secureTextEntry={secure}
      />
    </View>
  );
}
