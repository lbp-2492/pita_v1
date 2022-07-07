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
        <View>
            <Text>Login Screen</Text>
            <Button title='login' onPress={loginHandler} />
            <Button title='forgotpwd' onPress={pwdHandler} />
            <Button title='signup' onPress={signupHandler} />
        </View>
    );
};

