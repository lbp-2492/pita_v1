import React from 'react';
import { View, Button, Text } from 'react-native';
import LS from './screens/LoginScreen';
import HS from './screens/HomeScreen';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

const LoginScreen = LS;
const HomeScreen = HS;

const Stack = createStackNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='LoginScreen'>
                <Stack.Screen name='HomeScreen' component={HS} />
                <Stack.Screen name='LoginScreen' component={LS} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App; 