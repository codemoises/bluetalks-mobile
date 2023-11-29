import React from 'react';
import { View } from 'react-native';
import { Link } from '@react-navigation/native';
import HeaderComponent from '../../components/Header';
import Logo from '../../utils/Logo';
import TextInputComponent from '../../utils/TextInput';
import ButtonComponent from '../../utils/Button';
import Heading from '../../components/Heading';

export default function Login({navigation, route}) {
    return (
        <View>
            <HeaderComponent />
            <View>
                <Logo />
            </View>
            <View style={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: 50 }}>
                <TextInputComponent title={"E-mail"} placeholder={"Insira seu email"} type={"EmailAdress"} />
                <TextInputComponent title={"Senha"} placeholder={"Insira sua senha"} type={"password"} secure={true} />
                <View style={{ marginTop: 40 }}>
                    <ButtonComponent title={"Entrar"} onPress={() => navigation.navigate('Navigation')} />
                    <View style={{ marginTop: 10, display: 'flex', flexDirection: 'row', gap: 4 }}>
                        <Heading children={"Já possui uma conta?"} />
                        <View><Link to={{ screen: 'Register' }} style={{color: "#0671E0" }}>Inscreva-se.</Link></View>
                    </View>
                </View>
            </View>
        </View>
    );
};