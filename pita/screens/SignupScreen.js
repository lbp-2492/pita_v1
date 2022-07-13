import React from 'react';
import { StyleSheet, View, Pressable, Text, TextInput } from 'react-native';

export default function Signup({ navigation }) {

    const loginHandler = () => {
        navigation.navigate('Login'); 
    }

    return (
        <View style={styles.container}>
            <View style={styles.header_container}>
                <Text style={styles.title}>create account</Text>
            </View>
            <View style={styles.signup_container}>
                <TextInput style={styles.input} placeholder="your name" />
                <TextInput style={styles.input} placeholder="your email" />
                <TextInput style={styles.input} placeholder="your username" />
                <TextInput style={styles.input} placeholder="password" />
                <TextInput style={styles.input} placeholder="confirm password" />
            </View>
            <View style={styles.submitlogin}>
                <Pressable style={styles.login_button} onPress={loginHandler}>
                    <Text style={styles.login}>sign up</Text>
                </Pressable>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header_container: {
        marginTop: 150,
        padding: 30,
    },
    signup_container: {
        marginTop: -40,
        padding: 40,
        flex: 1,
    },
    title: {
        fontSize: 30,
        fontWeight: "bold",
    },
    input: {
        height: 40,
        borderWidth: 1, 
        padding: 10,
        margin: 15,
    },
    submitlogin: {
        flex: 1,
        top: 90,
    },
    login_button: {
        top: -10,
        backgroundColor: "black",
        borderRadius: 4,
        alignItems: 'center',
        justifyContent: 'center',
        left: 195,
        width: 150,
        padding: 2,
        margin: 10,
    },
    login: {
        color: "white",
        padding: 10,
    },
});