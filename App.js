import 'react-native-gesture-handler'

import React from "react";
import {StyleSheet, Text, View, StatusBar} from "react-native";
import {NavigationContainer} from "@react-navigation/native";
import AuthProvider from "./src/contexts/auth";
import Routes from "./src/routes";


export default function App() {
    return (
        <NavigationContainer>
            <AuthProvider>
                <StatusBar backgroundColor="#130560" barStyle="light-content"/>
                <Routes/>
            </AuthProvider>

        </NavigationContainer>
    )
}
