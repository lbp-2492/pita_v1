import React from 'react';
import { StyleSheet, View, Button, Text } from 'react-native';

export default function Message({ navigation }) {

    const loginHandler = () => {
        navigation.navigate('Login'); 
        //navigation.push('Home'); <= more explicit, push and pop
    }

    const pwdHandler = () => {
        navigation.navigate('Forgot');
    }

    return (
        <View>
            <Text>Email is already in use</Text>
        </View>
    );
};