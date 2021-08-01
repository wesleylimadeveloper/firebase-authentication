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
        backgroundColor: '#8ACEFF',
        borderRadius: 5,
        height: 40,
        padding: 8,
        width: 300,
    },
    textoBotao: {
        color: '#FFF',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});