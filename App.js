import React from "react";
import {StyleSheet, Text, View, StatusBar} from "react-native";
import {Container, Titulo} from "./src/styles";



export default function App(){
    return(
        <Container>
            <StatusBar backgroundColor="transparent" barStyle="light-content" translucent={true}/>
            <Titulo>Sujeito Programador</Titulo>
        </Container>
    )
}
