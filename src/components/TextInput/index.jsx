import Heading from "../../components/Heading";
import { View, TextInput } from "react-native";

export default function TextInputComponent({
  title,
  placeholder,
  secure,
  onChange,
  value,
}) {
  return (
    <View>
      <Heading children={title} colorDark={true} size={16} />
      <TextInput
        style={{
          borderBottomWidth: 1,
          width: 300,
          height: 40,
        }}
        value={value}
        placeholder={placeholder}
        secureTextEntry={secure}
        onChangeText={onChange}
      />
    </View>
  );
}
