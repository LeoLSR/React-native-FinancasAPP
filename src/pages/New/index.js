import React, { useState, useContext } from "react";
import { Text, View, SafeAreaView, Keyboard, TouchableWithoutFeedback, Alert } from "react-native";
import firebase from "../../services/firebaseConnection";
import Header from "../../components/Header";
import { Background, Input, SubmitButton, SubmitText } from "./style";
import Picker from "../../components/Picker";
import text from "react-native-reanimated/src/reanimated2/component/Text";
import { AuthContext } from "../../contexts/auth";
import { format } from "date-fns";
import { useNavigation } from "@react-navigation/native";

export default function New() {

  const navigation = useNavigation()

  const [valor,setValor] = useState('')
  const [tipo,setTipo] = useState('receita')
  const {user: usuario} = useContext(AuthContext)

  function handleSubmit (){
  Keyboard.dismiss();
  if(isNaN(parseFloat(valor)) || tipo === null){
    alert('Preencha todos os campos!');
    return;
  }
  Alert.alert(
    "Confirmando dados",
    `Tipo ${tipo} - Valor: ${parseFloat(valor)}`,
    [
      {
        text: 'Cancelar',
        style: 'cancel'
      },{
      text: 'Continuar',
      onPress: () => handleAdd()
    }
    ]
  )

  }

 async function handleAdd(){
    let uid = usuario.uid;

    let key = await firebase.database().ref('historico').child(uid).push().key;
    await firebase.database().ref('historico').child(uid).child(key).set({
      tipo: tipo,
      valor: parseFloat(valor),
      date: format(new Date(), 'dd/MM/yyyy')
    })

    //Atualizar o nosso saldo

   let user = firebase.database().ref('users').child(uid);
    await user.once('value').then((snapshot) => {
      let saldo = parseFloat(snapshot.val().saldo);

      tipo === 'despesa' ? saldo -= parseFloat(valor) : saldo += parseFloat(valor);

      user.child('saldo').set(saldo);
    });
   Keyboard.dismiss()
    setValor('')
   navigation.navigate('Home')

  }

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <Background>
        <Header />
        <SafeAreaView style={{ alignItems: "center" }}>
          <Input
            placeholder="Valor desejado"
            keyboardType="numeric"
            returnKeyType="next"
            onSubmitEditing={() => Keyboard.dismiss()}
            value={valor}
            onChangeText={(text) => setValor(text)}
          />
          <Picker onChange={setTipo} tipo={tipo}/>

          <SubmitButton onPress={handleSubmit}>
            <SubmitText>Registrar</SubmitText>
          </SubmitButton>
        </SafeAreaView>
      </Background>
    </TouchableWithoutFeedback>
  );
}
