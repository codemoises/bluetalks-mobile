import { Button } from "react-native";
import { theme } from "../../styles/theme";

export default function ButtonComponent({ title, onPress }) {
  return <Button title={title} color={theme.colors.mblue} onPress={onPress} />;
}
