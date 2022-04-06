import React from 'react'
import { View, Text, Button } from 'react-native'
import firebase from 'firebase'

export default function Miembro(){
    return(
        <View>
            <Text> Miembro </Text>
            <Button title='Cerrar sesión' onPress={()=>firebase.auth().signOut()}/>
        </View>
    )
}
