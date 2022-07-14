import React from 'react';
import { StyleSheet, View, Button, Text } from 'react-native';

export default function SignUpSuc({ navigation }) {

    const loginHandler = () => {
        navigation.navigate('Login'); 
        //navigation.push('Home'); <= more explicit, push and pop
    }

    const pwdHandler = () => {
        navigation.navigate('Forgot');
    }

    return (
        <View>
            <Text>Message sent successfully</Text>
        </View>
    );
};