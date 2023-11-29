import React from 'react';
import { View } from 'react-native';
import { Link } from '@react-navigation/native';
import HeaderComponent from '../../components/Header';
import Logo from '../../utils/Logo';
import TextInputComponent from '../../utils/TextInput';
import ButtonComponent from '../../utils/Button';
import Heading from '../../components/Heading';

export default function Register() {
    return (
        <View>
            <HeaderComponent />
            <View>
                <Logo />
            </View>
            <View style={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: 50 }}>
                <TextInputComponent title={"E-mail"} placeholder={"Insira seu email"} type={"EmailAdress"} />
                <TextInputComponent title={"Nome"} placeholder={"Insira seu nome"} type={"name"} />
                <TextInputComponent title={"Senha"} placeholder={"Insira sua senha"} type={"password"} secure={true} />
                <TextInputComponent title={"Confirme sua senha"} placeholder={"Confirme sua senha"} type={"password"} secure={true} />
                <View style={{ marginTop: 40 }}>
                    <ButtonComponent title={"Registrar"} />
                    <View style={{ marginTop: 10, display: 'flex', flexDirection: 'row', gap: 4 }}>
                        <Heading children={"Já possui uma conta?"} />
                        <View><Link to={{ screen: 'Login' }} style={{color: "#0671E0" }}>Entre aqui.</Link></View>
                    </View>
                </View>
            </View>
        </View>
    );
};