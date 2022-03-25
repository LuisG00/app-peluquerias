import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import Busqueda from '../screens/Busqueda'
import Recomendados from '../screens/Recomendados'
import Perfil from '../screens/Perfil'
import Barberias from '../screens/Barberias'
import Esteticas from '../screens/Esteticas'
import Favoritos from '../screens/Favoritos'


const Tab = createBottomTabNavigator()

export default function Navigation(){
    return(
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen 
                name='barberias' 
                component={Barberias}
                options={{title:"Barberías"}}
                />
                <Tab.Screen 
                name='esteticas' 
                component={Esteticas}
                options={{title:"Estéticas"}}
                />
                <Tab.Screen 
                name='favoritos' 
                component={Favoritos}
                options={{title:"Favoritos"}}
                />
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