import React, { useState } from 'react';
import { Alert, StatusBar, StyleSheet, View } from 'react-native';
import Logo from '../components/Logo';
import Input from '../components/Input';
import BotaoPrincipal from '../components/BotaoPrincipal';
import BotaoSecundario from '../components/BotaoSecundario';
import firebase from '../firebaseDB/FirebaseConfig';

export default function LoginScreen({ navigation }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const entrar = () => {
        try {
            firebase
                .auth()
                .signInWithEmailAndPassword(email, password)
                .then(() => navigation.navigate("HomeScreen"))
                .catch((error) => {
                    if (error.code === "auth/user-not-found") {
                        registerAlert();
                    } else if (error.code === "auth/invalid-email") {
                        Alert.alert("E-mail inválido", "Digite um e-mail válido.",
                            [
                                {
                                    text: "Ok"
                                }
                            ]
                        );
                    } else {
                        Alert.alert("Senha incorreta", "Verifique e-mail e senha.",
                            [
                                {
                                    text: "Ok"
                                }
                            ]
                        );
                    }
                });
        } catch (error) {
            Alert.alert("Erro", "Tente novamente mais tarde.",
                [
                    {
                        text: "Ok"
                    }
                ]
            );
        }
    }

    const registerAlert = () => {
        Alert.alert("Usuário não cadastrado", "Deseja se cadastrar?",
            [
                {
                    text: "Não",
                    onPress: () => navigation.navigate("LoginScreen")
                },
                {
                    text: "Sim",
                    onPress: () => navigation.navigate("RegisterScreen")
                }
            ]
        );
    }

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor="#3878A6" barStyle="light-content" />
            <View style={styles.logoView}>
                <Logo />
            </View>
            <View style={styles.inputsView}>
                <Input
                    placeholder="E-mail"
                    onChangeText={(txtEmail) => setEmail(txtEmail)}
                    value={email}
                />
                <Input
                    placeholder="Senha"
                    secureTextEntry={true}
                    onChangeText={(txtPassword) => setPassword(txtPassword)}
                    value={password}
                />
            </View>
            <View style={styles.buttonsView}>
                <BotaoPrincipal
                    onPress={entrar}
                    title="ENTRAR"
                />
                <BotaoSecundario
                    onPress={() => navigation.navigate("RegisterScreen")}
                    title="CRIAR CONTA"
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#6BBAF2',
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center',
    },
    logoView: {
        marginBottom: 15,
    },
    inputsView: {
        height: 100,
        justifyContent: 'space-around',
        marginBottom: 5,
    },
    buttonsView: {
        height: 100,
        justifyContent: 'space-around',
    },
});