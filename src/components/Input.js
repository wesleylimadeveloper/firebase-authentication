import React from 'react';
import { StyleSheet, TextInput } from 'react-native';

export default (props) => {
    return(
        <TextInput 
            style={styles.input}
            onChangeText={props.onChangeText} 
            placeholder={props.placeholder}
            placeholderTextColor='#FFF'
            secureTextEntry={props.secureTextEntry} 
            value={props.value}  
        />
    );
}

const styles = StyleSheet.create({
    input: {
        borderColor: '#FFF',
        borderRadius: 5,
        borderWidth: 1,
        color: '#FFF',
        fontSize: 16,
        height: 40,
        padding: 8,
        textAlign: 'center',
        width: 300,
    },
});