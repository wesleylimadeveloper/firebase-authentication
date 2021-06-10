import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function HomeScreen({navigation}) {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Seja bem-vindo(a)!</Text>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('LoginScreen')}>
                <Text style={styles.textButton}>Sair</Text>
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
        margin: 50,
        textAlign: 'center',
    },
    textButton: {
        color: 'white',
        fontWeight: 'bold',
    }
});