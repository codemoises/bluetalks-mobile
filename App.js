import { Text, View } from 'react-native';
import { NativeWindStyleSheet } from "nativewind";

NativeWindStyleSheet.setOutput({
  default: "native",
});

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-black">
      <Text>OLAAAAAAAAAAA</Text>
    </View>
  );
};