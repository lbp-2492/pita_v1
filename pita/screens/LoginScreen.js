import React from 'react';
import { StyleSheet, View, Button, Text } from 'react-native';


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
                <Text style={styles.title}>Login</Text>
                <Text style={styles.message}>Please sign in to continue</Text>
            </View>
            <Button title='login' onPress={loginHandler} />
            <Button title='forgotpwd' onPress={pwdHandler} />
            <Button title='signup' onPress={signupHandler} />
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

    }
});
