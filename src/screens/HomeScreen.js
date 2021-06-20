import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Logo from '../components/Logo';
import BotaoPrincipal from '../components/BotaoPrincipal';

export default function HomeScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Logo />
            <Text style={styles.text}>Seja bem-vindo(a)!</Text>
            <BotaoPrincipal
                onPress={() => navigation.navigate("LoginScreen")}
                title="Sair"
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center',
    },
    text: {
        fontSize: 40,
        fontWeight: 'bold',
        margin: 50,
        textAlign: 'center',
    },
});