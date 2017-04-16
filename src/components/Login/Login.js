import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, KeyboardAvoidingView } from 'react-native';
import LoginForm from './LoginForm';

export default class Login extends Component {
    render () {
        return (
            <KeyboardAvoidingView behavior="padding" style={styles.container}>
                <View style={styles.logoContainer}>
                    <Image 
                    style={styles.logo}
                    source={require('../../images/uxl-logo_1@600x.png')} 
                    />
                    <Text style={styles.subtitle}>Powered by React Native</Text>
                </View>
                <View style={styles.formContainer}>
                    <LoginForm />
                </View>
            </KeyboardAvoidingView>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#16a085'
    },
    subtitle: {
        marginTop: 10,
        fontSize: 13,
        color: 'white',
        opacity: 0.8,
        paddingBottom: 20
    },
    logoContainer: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    logo: {
        width: 250,
        height: 50,
        resizeMode: 'contain'
    }
});