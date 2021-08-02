import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
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
        <SafeAreaView style={styles.container}>
            <View style={styles.logoView}>
                <Logo />
            </View>
            <Text style={styles.texto}>Seja bem-vindo(a)!</Text>
            <BotaoPrincipal
                onPress={sair}
                title="SAIR"
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: '#6BBAF2',
        flex: 1,
    },
    logoView: {
        marginBottom: 10,
        marginTop: 50,
    },
    texto: {
        color: '#FFF',
        fontSize: 40,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 15,
    },
});