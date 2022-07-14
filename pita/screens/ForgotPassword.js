import React from 'react';
import { StyleSheet, View, Text, Pressable, TextInput } from 'react-native';

export default function ForgotPassword({ navigation }) {

    const loginHandler = () => {
        navigation.navigate('Login'); 
    }

    const successHandler = () => {
        navigation.navigate('Success')
    }

    return (
        <View style={styles.container}> 
            <View style={styles.header_container}>
                <Text style={styles.title}>forgot password?</Text>
                <Text style={styles.message}>don't worry, we'll help you recover your password!</Text>
            </View>
            <View style={styles.pwd_container}>
                <TextInput style={styles.input} placeholder="your email" />
                <Text style={styles.or}>or</Text>
                <TextInput style={styles.input} placeholder="your phone number" />
            </View>
            <View style={styles.submitlogin}>
                <Pressable style={styles.login_button} onPress={successHandler}>
                    <Text style={styles.login}>send reset link</Text>
                </Pressable>
            </View>
            <View style={styles.signup}>
                <Pressable style={styles.fp_button} onPress={loginHandler}>
                    <Text style={styles.clickhere}>click here to head back to login</Text>
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
    title: {
        fontSize: 30,
        fontWeight: "bold",
    },
    message: {
        fontWeight: "normal",
        marginTop: 10,
        padding: 5,
    },
    input: {
        height: 40,
        borderWidth: 1, 
        padding: 10,
        margin: 10,
    },
    pwd_container: {
        marginTop: 30,
        padding: 40,
        flex: 1,
    },
    or: {
        left: 150,
    },
    login_button: {
        top: 30,
        backgroundColor: "black",
        borderRadius: 4,
        alignItems: 'center',
        justifyContent: 'center',
        left: 200,
        width: 150,
        padding: 2,
        margin: 10,
    },
    login: {
        color: "white",
        padding: 10,
    },
    submitlogin: {
        flex: 1,
        top: -60,
    },
    fp_button: {
        left: 45,
        width: 250,
        height: 25,
        padding: 0,
    },
    signup: {
        flex: 1,
        top: 65,
        flexDirection: 'row',
        height: 100,
        left: 50, 
    },
    clickhere: {
        color: 'black',
        fontWeight: "bold",
    }
});
