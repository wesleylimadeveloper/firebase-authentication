import React from 'react';
import { Image, StyleSheet } from 'react-native';

export default () => {
    return (
        <Image style={styles.logo} source={require('../assets/logo.png')} />
    );
}

const styles = StyleSheet.create({
    logo: {
        alignItems: 'center',
        marginBottom: 30,
    }
});