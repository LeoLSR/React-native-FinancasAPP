import React from "react";
import Icon from 'react-native-vector-icons/Feather'
import {Container, ButtonMenu} from './styles'
import { useNavigation } from "@react-navigation/native";


export default function Header(){

  const navigation = useNavigation()

  return(
    <Container>

      <ButtonMenu onPress={() => navigation.toggleDrawer()}>
      <Icon name="menu" color="#fff" size={40}/>
      </ButtonMenu>

    </Container>
  )
}
