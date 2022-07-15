import React from 'react';
import { StyleSheet, View, Button, Text, TextInput } from 'react-native';
import { Feather, Entypo } from "@expo/vector-icons";


export default function Home({ clicked, searchPhrase, setSearchPhrase, setClicked, navigation }) {

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
        <View style={styles.container}>
            <View style={styles.search_bar}>
                <View
                    style={
                        clicked
                            ? styles.searchBar__clicked
                            : styles.searchBar__unclicked
                    }
                >
                    <Feather
                        name="search"
                        size={20}
                        color="black"
                        style={{ marginLeft : 1 }}
                    />

                    <TextInput 
                        style={styles.input}
                        placeholder="search"
                        value={searchPhrase}
                        onChangeText={setSearchPhrase}
                        onFocuse={() => {
                            setClicked(true);
                        }}
                    />
                    {clicked && (
                        <Entypo name="cross" size={20} color="black" style={{ padding: 1 }} onPress={() => {
                            setSearchPhrase("")
                        }}/>
                    )}
                </View>
                {clicked && (
                    <View>
                        <Button
                            title="Cancel"
                            onPress={() => {
                                Keyboard.dismiss();
                                setClicked(false);
                            }}
                        ></Button>
                    </View>
                )}
            </View>
            <Button title='calendar' onPress={calHandler} />
            <Button title='your history' onPress={histHandler} />
            <Button title='labs' onPress={labsHandler} />
            <Button title='log your symptoms' onPress={symptomsHandler} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginTop: 40,
        justifyContent: "flex-start",
        alignItems: "center",
        flexDirection: "row",
        width: "90%",
    
      },
      searchBar__unclicked: {
        padding: 10,
        flexDirection: "row",
        width: "95%",
        backgroundColor: "#d9dbda",
        borderRadius: 15,
        alignItems: "center",
      },
      searchBar__clicked: {
        padding: 10,
        flexDirection: "row",
        width: "80%",
        backgroundColor: "#d9dbda",
        borderRadius: 15,
        alignItems: "center",
        justifyContent: "space-evenly",
      },
      input: {
        fontSize: 20,
        marginLeft: 10,
        width: "90%",
      },
    greeting_cont: {
        marginTop: 80,
        alignItems: 'center',
        padding: 30,
    },
    hi: {
        fontSize: 30, 
        fontWeight: "bold",
    },
    message: {
        fontSize: 15,
        fontWeight: "bold",
    },
})
