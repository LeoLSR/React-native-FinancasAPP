import 'react-native-gesture-handler';
import React from "react";
import {createDrawerNavigator} from "@react-navigation/drawer";

import Home from "../pages/Home";
import New from "../pages/New"
import Profile from "../pages/Profile";
import CustomDrawer from "../components/CustomDrawer";

const AppDrawer = createDrawerNavigator();

function AppRoutes(){
    return(
        <AppDrawer.Navigator
          drawerContent={(props) => <CustomDrawer{...props}/>}

          screenOptions={{

            drawerStyle: {
              fontWeight: 'bold',
              backgroundColor: 'rgba(255,241,241,0.96)',

            },
            drawerActiveTintColor:'#f0f5ff',
            drawerActiveBackgroundColor: 'rgba(89,65,255,0.73)',
            drawerInactiveBackgroundColor: 'rgba(202,198,234,0.73)',
            drawerInactiveTintColor: 'rgba(0,0,0,0.7)',
            drawerItemStyle:{
              marginVertical: 5,
            }


          }}
        >
            <AppDrawer.Screen name="Home" component={Home} options={{headerShown: false}}/>
            <AppDrawer.Screen name="Registrar" component={New} options={{headerShown: false}}/>
            <AppDrawer.Screen name="Perfil" component={Profile} options={{headerShown: false}}/>
        </AppDrawer.Navigator>
    )
}
export default AppRoutes
