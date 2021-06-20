import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

export default (props) => {
    return(
        <TouchableOpacity style={styles.botao} onPress={props.onPress} >
            <Text style={styles.textoBotao}>{props.title}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    botao: {
        backgroundColor: 'black',
        borderRadius: 5,
        borderWidth: 1,
        height: 40,
        padding: 8,
        marginBottom: 15,
        width: 300,
    },
    textoBotao: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});