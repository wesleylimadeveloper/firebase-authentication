import React, { useState } from 'react';
import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import firebase from '../firebase/FirebaseConfig';

export default function LoginScreen({navigation}) {

    const [name, setName] = useState('');
    const [password, setPassword] = useState('');

    const entrar = () => {
        try {
            firebase
            .auth()
            .signInWithEmailAndPassword(name, password)
            .then(() => navigation.navigate('HomeScreen'))
            .catch((error) => {
                if(error.code === 'auth/user-not-found') {
                    registerAlert();
                } else if(error.code === 'auth/invalid-email') {
                    Alert.alert('E-mail inválido', 'Digite um e-mail válido.',
                        [
                            {
                                text: 'Ok'
                            }
                        ]
                    );
                } else {
                    Alert.alert('Senha incorreta', 'Verifique e-mail e senha.',
                        [
                            {
                                text: 'Ok'
                            }
                        ]
                    );
                }
            });            
        } catch (error) {
            Alert.alert('Erro', 'Tente novamente mais tarde.',
                [
                    {
                        text: 'Ok'
                    }
                ]
            );
        }
    }

    const registerAlert = () => {
        Alert.alert('Usuário não cadastrado', 'Deseja se cadastrar?',
            [
                {
                    text: 'Não',
                    onPress: () => navigation.navigate('LoginScreen')
                },
                {
                    text: 'Sim',
                    onPress: () => navigation.navigate('RegisterScreen')
                }
            ]
        );
    }

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Firebase</Text>
            <TextInput style={styles.textInput} 
                placeholder='E-mail'
                onChangeText={(txtEmail) => setName(txtEmail)}
            />
            <TextInput style={styles.textInput} 
                placeholder='Senha' secureTextEntry
                onChangeText={(txtPassword) => setPassword(txtPassword)}
            />
            <TouchableOpacity style={styles.button} onPress={entrar}>
                <Text style={styles.textButton}>Entrar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('RegisterScreen')}>
                <Text style={styles.textButton}>Cadastrar</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        backgroundColor: 'black',
        height: 55,
        justifyContent: 'center',
        marginBottom: 20,
    },
    container: {
        flexGrow: 1,
        justifyContent: 'center',
        margin: 20,
    },
    text: {
        fontSize: 40,
        fontWeight: 'bold',
        margin: 40,
        textAlign: 'center',
    },
    textButton: {
        color: 'white',
        fontWeight: 'bold',
    },
    textInput: {
        borderColor: 'black',
        borderWidth: 1,
        height: 55,
        marginBottom: 20,
        padding: 20,
        textAlign: 'center',
    },
});