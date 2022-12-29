import React, { useContext, useState } from "react";
import {Button, Text, View} from "react-native";
import {AuthContext} from "../../contexts/auth";
import Header from "../../components/Header";
import {Backgroud,Container,Nome,Saldo,Title, List} from './style'
import HistoricoList from "../../components/HistoricoList";

export default function Home(){
  const [historico,setHistorico] = useState([
    {key: '1', tipo: 'receita', valor: 1200},
    {key: '2', tipo: 'despesa', valor: 200},
    {key: '3', tipo: 'receita', valor: 40},
    {key: '4', tipo: 'receita', valor: 89.68},
    {key: '5', tipo: 'despesa', valor: 500.00},
    {key: '6', tipo: 'despesa', valor: 310.00},

  ])


    const {user} = useContext(AuthContext)

    return(
      <Backgroud>
        <Header/>
        <Container>
          <Nome>Matheus</Nome>
          <Saldo>R$123,00</Saldo>

        </Container>

        <Title>Ultima movimentações</Title>

        <List
          showsVerticalScrollIndicator={false}
          data={historico}
          keyExtractor={item => item.key}
          renderItem={({item}) => (<HistoricoList data={item} />) }

        />

      </Backgroud>
    )
}
