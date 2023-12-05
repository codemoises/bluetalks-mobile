import { Text, View } from "react-native";
import * as yup from "yup";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import HeaderComponent from "../../../components/Header";
import TextInputComponent from "../../../components/TextInput";
import ButtonComponent from "../../../components/Button";
import Heading from "../../../components/Heading";
import { Link } from "@react-navigation/native";

const schema = yup.object().shape({
    name: yup.string().required("Insira um nome válido."),
    surname: yup.string().required("Informe seu apelido."),
    email: yup.string().required("Insira um email válido.").email("Email inválido"),
  });

export default function EditProfile({ navigation }) {

      const {
        control,
        handleSubmit,
        formState: { errors },
      } = useForm({
        resolver: yupResolver(schema),
        defaultValues: {
            name: "",
            surname: "",
            email: "",
        },
      });

  return (
    <View>
      <HeaderComponent
        title={"Editar perfil"}
        content={true}
        hasGoBack={true}
        navigation={navigation}
      />
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
            render={({ field: { onChange, value } }) => (
              <TextInputComponent
                title={"Nome Completo"}
                placeholder={"Nome completo do usuário"}
                value={value}
                onChange={onChange}
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
            render={({ field: { onChange, value } }) => (
              <TextInputComponent
                title={"Apelido"}
                placeholder={"Blu"}
                onChange={onChange}
                value={value}
              />
            )}
            name="surname"
          />
          {errors.surname && (
            <Text style={{ color: "red" }}>{errors.surname.message}</Text>
          )}
        </View>
        <View style={{ height: 85 }}>
          <Controller
            control={control}
            rules={{ required: true }}
            render={({ field: { onChange, value } }) => (
              <TextInputComponent
                title={"Email"}
                placeholder={"Blu@talks.com"}
                onChange={onChange}
                value={value}
              />
            )}
            name="email"
          />
          {errors.email && (
            <Text style={{ color: "red" }}>{errors.email.message}</Text>
          )}
        </View>
        <View style={{ width: 247, marginTop: 40 }}>
          <ButtonComponent
            title={"Confirmar"}
            onPress={() => navigation.navigate("Navigation")}
          />
        </View>
      </View>
    </View>
  );
}
