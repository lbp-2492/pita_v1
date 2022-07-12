import React from 'react';
import { StyleSheet, View, Button, Text, Pressable, TextInput } from 'react-native';


export default function Login({ navigation }) {

    const loginHandler = () => {
        navigation.navigate('Home'); 
        //navigation.push('Home'); <= more explicit, push and pop
    }

    const pwdHandler = () => {
        navigation.navigate('Forgot');
    }

    const signupHandler = () => {
        navigation.navigate('Signup');
    }

    return (
        <View style={styles.container}>
            <View style={styles.header_container}>
                <Text style={styles.title}>login</Text>
                <Text style={styles.message}>please sign in to continue</Text>
            </View>
            <View style={styles.login_container}>
                <TextInput style={styles.input} placeholder="username" />
                <TextInput style={styles.input} placeholder="password" />
                <View style={styles.forgot}>
                    <Text>forgot password?</Text>
                    <Pressable style={styles.fp_button} onPress={pwdHandler}>
                        <Text style={styles.clickhere}>click here</Text>
                    </Pressable>
                </View>
                <View style={styles.submitlogin}>
                    <Pressable style={styles.login_button} onPress={loginHandler}>
                        <Text style={styles.login}>login -></Text>
                    </Pressable>
                </View>
                <View style={styles.signup}>
                    <Text>don't have an account? </Text>
                    <Pressable style={styles.fp_button} onPress={loginHandler}>
                        <Text style={styles.clickhere}>sign up</Text>
                    </Pressable>
                </View>
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
    login_container: {
        marginTop: -20,
        padding: 40,
        flex: 1,
    },
    input: {
        height: 40,
        borderWidth: 1, 
        padding: 10,
        margin: 10,
    },
    forgot: {
        flex: 1,
        flexDirection: 'row',
        height: 100,
        left: 120,
    }, 
    fp_button: {
        left: 10,
        width: 80,
        height: 25,
        padding: 0,
    },
    clickhere: {
        color: 'black',
        fontWeight: "bold",
    },
    submitlogin: {
        flex: 1,
        top: -60,
    },
    login_button: {
        top: -10,
        backgroundColor: "black",
        borderRadius: 4,
        alignItems: 'center',
        justifyContent: 'center',
        left: 157,
        width: 150,
        padding: 2,
        margin: 10,
    },
    login: {
        color: "white",
        padding: 10,
    },
    signup: {
        flex: 1,
        top: 100,
        flexDirection: 'row',
        height: 100,
        left: 50, 
    }
});
