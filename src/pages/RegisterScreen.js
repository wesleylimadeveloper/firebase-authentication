import React, { useState } from 'react';
import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import firebase from '../firebase/FirebaseConfig';

export default function RegisterScreen({navigation}) {

    const [name, setName] = useState('');
    const [password, setPassword] = useState('');

    const cadastrar = () => {
        try {
            firebase
            .auth()
            .createUserWithEmailAndPassword(name, password)
            .then(() => navigation.navigate('HomeScreen'))
            .catch((error) => {
                if(error.code === 'auth/invalid-email') {
                    Alert.alert('E-mail inválido', 'Digite um e-mail válido.',
                        [
                            {
                                text: 'Ok'
                            }
                        ]
                    );
                } else if(error.code === 'auth/email-already-in-use') {
                    Alert.alert('E-mail já cadastrado', 'Esse e-mail já foi cadastrado.',
                        [
                            {
                                text: 'Ok'
                            }
                        ]
                    );
                } else if(error.code === 'auth/weak-password') {
                    Alert.alert('Senha inválida', 'Digite uma senha com no mínimo 6 digitos.',
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

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Cadastre-se</Text>
            <TextInput style={styles.textInput}
                placeholder='E-mail'
                onChangeText={(txtEmail) => setName(txtEmail)}
            />            
            <TextInput style={styles.textInput} 
                placeholder='Senha' secureTextEntry
                onChangeText={(txtPassword) => setPassword(txtPassword)}            />           
            <TouchableOpacity style={styles.button} onPress={cadastrar}>
                <Text style={styles.textButton}>Cadastrar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('LoginScreen')}>
                <Text style={styles.textButton}>Já sou cadastrado</Text>
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
        textAlign: 'center',
    },
});