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
          borderWidth: 1,
          borderRadius: 4,
          marginTop: 6,
          padding: 12,
          width: 300,
          height: 48,
        }}
        value={value}
        placeholder={placeholder}
        secureTextEntry={secure}
        onChangeText={onChange}
      />
    </View>
  );
}
