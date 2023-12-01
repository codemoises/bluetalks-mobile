import { useState, useContext } from 'react';
import { View } from 'react-native';
import { Link } from '@react-navigation/native';
import { AuthContext } from "../../utils/authContext";
import HeaderComponent from '../../components/Header';
import Logo from '../../components/Logo';
import TextInputComponent from '../../components/TextInput';
import ButtonComponent from '../../components/Button';
import Heading from '../../components/Heading';
import api from "../../utils/api";

export default function Login({navigation, route}) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { setAuth } = useContext(AuthContext);

    const handleLogin = async() => {
        const response = await api.post("/usuario/login", {
            email: email,
            senha: password
        });

        if (response.status === 200) {
            navigation.replace("Navigation");
            await setAuth(response.data);
        }
    }

    return (
        <View>
            <HeaderComponent />
            <View>
                <Logo />
            </View>
            <View style={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: 50 }}>
                <TextInputComponent title={"E-mail"} placeholder={"Insira seu email"} type={"EmailAdress"} onChange={setEmail} />
                <TextInputComponent title={"Senha"} placeholder={"Insira sua senha"} type={"password"} secure={true} onChange={setPassword}/>
                <View style={{ marginTop: 40 }}>
                    <ButtonComponent title={"Entrar"} onPress={handleLogin} />
                    <View style={{ marginTop: 10, display: 'flex', flexDirection: 'row', gap: 4 }}>
                        <Heading children={"Já possui uma conta?"} />
                        <View><Link to={{ screen: 'Register' }} style={{color: "#0671E0" }}>Inscreva-se.</Link></View>
                    </View>
                </View>
            </View>
        </View>
    );
};