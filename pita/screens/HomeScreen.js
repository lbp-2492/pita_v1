import React from 'react';
import { StyleSheet, View, Button, Text } from 'react-native';

export default function Home({ navigation }) {

    const calHandler = () => {
        //navigation.goBack();
        navigation.navigate('Calendar');
    }

    const histHandler = () => {
        navigation.navigate('VisitHistory');
    }

    const labsHandler = () => {
        navigation.navigate('Labs');
    }

    const symptomsHandler = () => {
        navigation.navigate('LogSymptoms');
    }

    return (
        <View>
            <Text>Home Screen</Text>
            <Button title='calendar' onPress={calHandler} />
            <Button title='your history' onPress={histHandler} />
            <Button title='labs' onPress={labsHandler} />
            <Button title='log your symptoms' onPress={symptomsHandler} />
        </View>
    );
};

