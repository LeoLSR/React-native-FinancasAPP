import React, {useContext} from 'react'
import { Text, View, Image } from "react-native";
import {DrawerContentScrollView, DrawerItemList, DrawerItem} from '@react-navigation/drawer'

import { AuthContext } from "../../contexts/auth";

export default function CustomDrawer(props){
  const {user,signOut} = useContext(AuthContext)

  return(
    <DrawerContentScrollView {...props}>
      <View style={{alignItems: 'center', justifyContent: 'center', marginTop: 25}}>
        <Image
        source={require('../../assets/Logo.png')}
        style={{width:85, height:85}}
        resizeMethod={"auto"}
        />
        <Text style={{color: '#000', fontSize:18}}>Bem-vindo</Text>
        <Text style={{color: '#000', fontSize:17, fontWeight:'bold', paddingBottom: 25}}>{user && user.nome}</Text>
      </View>

      <DrawerItemList {...props} />

      <DrawerItem
        {...props}
        label='Sair do app'
        onPress={() => signOut()}
        inactiveTintColor='#FFF'
      inactiveBackgroundColor="#c62c36"
      />

    </DrawerContentScrollView>
  )
}
