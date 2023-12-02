import React from "react";
import * as yup from "yup";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Alert, View, Text } from "react-native";
import { Link } from "@react-navigation/native";
import HeaderComponent from "../../components/Header";
import Logo from "../../components/Logo";
import TextInputComponent from "../../components/TextInput";
import ButtonComponent from "../../components/Button";
import Heading from "../../components/Heading";

const schema = yup.object().shape({
  email: yup.string().required("Informe seu email.").email("Email inválido."),
  name: yup.string().required("Informe seu nome."),
  password: yup
    .string()
    .required("Informe sua senha.")
    .min(8, "A senha deve ter pelo menos 8 dígitos."),
  passwordConfirm: yup
    .string()
    .required("Confirme sua senha.")
    .oneOf([yup.ref("password")], "As senhas devem ser iguais."),
});

export default function Register() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      email: "",
      name: "",
      password: "",
      passwordConfirm: "",
    },
  });

  const handleRegister = async () => {
    Alert.alert("teste");
  };

  return (
    <View>
      <HeaderComponent />
      <View>
        <Logo />
      </View>
      <View
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: 50,
        }}
      >
        <View style={{ height: 85 }}>
          <Controller
            control={control}
            rules={{ required: true }}
            render={() => (
              <TextInputComponent
                title={"E-mail"}
                placeholder={"Insira seu email"}
              />
            )}
            name="email"
          />
          {errors.email && (
            <Text style={{ color: "red" }}>{errors.email.message}</Text>
          )}
        </View>
        <View style={{ height: 85 }}>
          <Controller
            control={control}
            rules={{ required: true }}
            render={() => (
              <TextInputComponent
                title={"Nome"}
                placeholder={"Insira seu nome"}
              />
            )}
            name="name"
          />
          {errors.name && (
            <Text style={{ color: "red" }}>{errors.name.message}</Text>
          )}
        </View>
        <View style={{ height: 85 }}>
          <Controller
            control={control}
            rules={{ required: true }}
            render={() => (
              <TextInputComponent
                title={"Senha"}
                placeholder={"Insira sua senha"}
                secure={true}
              />
            )}
            name="password"
          />
          {errors.password && (
            <Text style={{ color: "red" }}>{errors.password.message}</Text>
          )}
        </View>
        <View style={{ height: 85 }}>
          <Controller
            control={control}
            rules={{ required: true }}
            render={() => (
              <TextInputComponent
                title={"Confirme sua senha"}
                placeholder={"Confirme sua senha"}
                secure={true}
              />
            )}
            name="passwordConfirm"
          />
          {errors.passwordConfirm && (
            <Text style={{ color: "red" }}>
              {errors.passwordConfirm.message}
            </Text>
          )}
        </View>
        <View style={{ marginTop: 40 }}>
          <ButtonComponent
            title={"Registrar"}
            onPress={handleSubmit(handleRegister)}
          />
          <View
            style={{
              marginTop: 10,
              display: "flex",
              flexDirection: "row",
              gap: 4,
            }}
          >
            <Heading children={"Já possui uma conta?"} />
            <View>
              <Link to={{ screen: "Login" }} style={{ color: "#0671E0" }}>
                Entre aqui.
              </Link>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}
