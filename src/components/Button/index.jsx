import { Button } from "react-native";

export default function ButtonComponent({ title, onPress }) {

    return (
        <Button title={title} color={'#0671E0'} onPress={onPress} />
    );
}