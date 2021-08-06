import React from 'react';
import { StatusBar, StyleSheet, Text, View } from 'react-native';
import Logo from '../components/Logo';
import BotaoPrincipal from '../components/BotaoPrincipal';
import firebase from '../firebaseDB/FirebaseConfig';

export default function HomeScreen({ navigation }) {

    const sair = () => {
        firebase
            .auth()
            .signOut()
            .then(() => navigation.navigate("LoginScreen"))
    }

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor="#3878A6" barStyle="light-content" />
            <View style={styles.logoView}>
                <Logo />
            </View>
            <Text style={styles.texto}>Seja bem-vindo(a)!</Text>
            <BotaoPrincipal
                onPress={sair}
                title="SAIR"
            />
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
    logoView: {
        marginBottom: 10,
    },
    texto: {
        color: '#FFF',
        fontSize: 40,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 15,
    },
});