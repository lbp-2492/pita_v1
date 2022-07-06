import React from 'react';
import { View, Button, Text } from 'react-native';

const LoginScreen = ({ navigation }) => {
    return (
        <View>
            <Button title='Take me to second screen' onPress={() => navigation.navigate('SecondScreen')} />
        </View>
    );
};

export default LoginScreen;