import React, { useState } from 'react';
import { Alert, StatusBar, StyleSheet, Text, View } from 'react-native';
import Input from '../components/Input';
import BotaoPrincipal from '../components/BotaoPrincipal';
import BotaoSecundario from '../components/BotaoSecundario';
import firebase from '../firebaseDB/FirebaseConfig';

export default function RegisterScreen({ navigation }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const cadastrar = () => {
        try {
            firebase
                .auth()
                .createUserWithEmailAndPassword(email, password)
                .then(() => navigation.navigate("HomeScreen"))
                .catch((error) => {
                    if (error.code === "auth/invalid-email") {
                        Alert.alert("E-mail inválido", "Digite um e-mail válido.",
                            [
                                {
                                    text: "Ok"
                                }
                            ]
                        );
                    } else if (error.code === "auth/email-already-in-use") {
                        Alert.alert("E-mail já cadastrado", "Esse e-mail já foi cadastrado.",
                            [
                                {
                                    text: "Ok"
                                }
                            ]
                        );
                    } else if (error.code === "auth/weak-password") {
                        Alert.alert("Senha inválida", "Digite uma senha com no mínimo 6 digitos.",
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

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor="#3878A6" barStyle="light-content" />
            <Text style={styles.texto}>Criar Conta</Text>
            <View style={styles.inputsView}>
                <Input
                    onChangeText={(txtEmail) => setEmail(txtEmail)}
                    placeholder="E-mail"
                    value={email}
                />
                <Input
                    onChangeText={(txtPassword) => setPassword(txtPassword)}
                    placeholder="Senha"
                    secureTextEntry={true}
                    value={password}
                />
            </View>
            <View style={styles.buttonsView}>
                <BotaoPrincipal
                    onPress={cadastrar}
                    title="CADASTRAR"
                />
                <BotaoSecundario
                    onPress={() => navigation.navigate("LoginScreen")}
                    title="JÁ SOU CADASTRADO"
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: '#6BBAF2',
        flex: 1,
        justifyContent: 'center',
    },
    texto: {
        color: '#FFF',
        fontSize: 40,
        fontWeight: 'bold',
        marginBottom: 5,
        textAlign: 'center',
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