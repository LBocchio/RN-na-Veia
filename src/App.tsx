import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from "react-native";

// import {Container} from './styles'

const App: React.FC = () => {
    return (
        <SafeAreaView style={style.App}>
            <Text style={style.Title}>Welcome to sthima academy</Text>
        </ SafeAreaView>
    );
};

export default App;

const style = StyleSheet.create({
    App: {
        flex: 1,
        backgroundColor: 'black',
        justifyContent: 'center',
    },

    Title: {
        color: 'white',
        fontSize: 30,

    },

});
