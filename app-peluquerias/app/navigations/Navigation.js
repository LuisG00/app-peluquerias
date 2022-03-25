import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import Busqueda from '../screens/Busqueda'
import Recomendados from '../screens/Recomendados'
import Perfil from '../screens/Perfil'

const Tab = createBottomTabNavigator()

export default function Navigation(){
    return(
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen 
                name='busqueda' 
                component={Busqueda}
                options={{title:"Busqueda"}}
                />
                <Tab.Screen 
                name='recomendados' 
                component={Recomendados}
                options={{title:"Recomendados"}}
                />
                <Tab.Screen 
                name='perfil' 
                component={Perfil}
                options={{title:"Perfil"}}
                />
            </Tab.Navigator>
        </NavigationContainer>
    )
}