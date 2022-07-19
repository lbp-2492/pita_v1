import React from 'react';
import { StyleSheet, View, Button, Text, TextInput, ScrollView } from 'react-native';
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
            <View style={styles.greeting_cont}>
                <Text style={styles.hi}>hi madhu,</Text>
                <Text style={styles.message}>what can we do for you?</Text>
            </View>
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
            <ScrollView>
                <View style={styles.conts}>
                    <View style={styles.headers}>
                        <Text style={styles.h_title}>symptoms</Text>
                        <Text style={styles.h_view}>view all</Text>
                    </View>
                    <View style={styles.h_carn}>
                        <Text>symp</Text>
                    </View>
                </View>
                <View style={styles.conts}>
                    <View style={styles.headers}>
                        <Text style={styles.h_title}>symptoms</Text>
                        <Text style={styles.h_view}>view all</Text>
                    </View>
                    <View style={styles.h_carn}>
                        <Text>symp</Text>
                    </View>
                </View>
                <View style={styles.conts}>
                    <View style={styles.headers}>
                        <Text style={styles.h_title}>symptoms</Text>
                        <Text style={styles.h_view}>view all</Text>
                    </View>
                    <View style={styles.h_carn}>
                        <Text>symp</Text>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: "100%",
    },
    search_bar: {
        marginTop: 5,
        margin: 30,
        justifyContent: "flex-start",
        alignItems: "center",
        flexDirection: "row",
    },
      searchBar__unclicked: {
        padding: 10,
        flexDirection: "row",
        width: "100%",
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
        marginTop: 40,
        alignItems: 'center',
        padding: 30,
    },
    hi: {
        fontSize: 30, 
        fontWeight: "bold",
    },
    message: {
        fontSize: 20,
        margin: 5,
        fontWeight: "bold",
    },
    conts: {
        alignItems: "center",
        backgroundColor: "pink",
        width: 411.5,
        height: 250,
    },
    headers: {
        backgroundColor: "blue",
        width: "100%",
        height: "20%",
        flexDirection: "row",
    },
    h_title: {
        fontSize: 20,
        fontWeight: "bold",
        marginTop: 10,
        marginLeft: 15,
        alignItems: "center",
    },
    h_view: {
        fontSize: 15,
        marginTop: 14,
        marginLeft: 210,
    },
    h_carn: {
        width: "80%",
        height: "80%",
        backgroundColor: "yellow",
    }
})
