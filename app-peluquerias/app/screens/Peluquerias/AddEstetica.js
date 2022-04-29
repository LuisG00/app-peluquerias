import { StyleSheet, Text, View } from 'react-native'
import React, { useRef, useState } from 'react'
import Toast from 'react-native-toast-message'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import Loading from '../../components/Loading'

import AddEsteticaForm from '../../components/Peluquerias/AddEsteticaForm'

export default function AddEstetica({ navigation }) {
  const toastRef = useRef()
  const [isloading, setIsloading] = useState(false)

  return (
    <KeyboardAwareScrollView>
      <AddEsteticaForm
      toastRef={toastRef} 
      setIsloading={setIsloading}
      navigation={navigation}
      />
      <Loading isVisible={isloading} text='Añadiendo Estetica'/>
      <Toast ref={toastRef} position='center' opacity={0.9} />
    </KeyboardAwareScrollView>
  )
}

const styles = StyleSheet.create({})