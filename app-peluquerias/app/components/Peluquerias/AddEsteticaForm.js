import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React, { useState} from 'react'
import { Input, Button, Icon } from 'react-native-elements'


export default function AddEsteticaForm({ toastRef , setIsloading, navigation}) {
  const [formData, setFormData] = useState(defaultFormValues())
  const [errorName, setErrorName] = useState(null)
  const [errorDesc, setErrorDesc] = useState(null)
  const [errorAddress, setErrorAddress] = useState(null)
  
  const AddEstetica = () =>{
    console.log(formData)
  }
  
  const onChange = (e, type) =>{
    setFormData({ ...formData, [type]: e.nativeEvent.text})
}
  return (
    <View style={styles.viewForm} >
      
      <Input 
          placeholder='Nombre de la Barbería'
          containerStyle={styles.inputForm}
          defaultValue={formData.name}
          onChange={(e)=> onChange(e,'name')}
          errorMessage={errorName}
      />
      <Input
          placeholder='Dirección del Local'
          containerStyle={styles.inputForm}
          defaultValue={formData.address}
          onChange={(e)=> onChange(e,'address')}
          errorMessage={errorAddress}
          
      />
      <Input
          placeholder='Descripción del Local'
          multiline
          containerStyle={styles.textD}
          defaultValue={formData.description}
          onChange={(e)=> onChange(e,'description')}
          errorMessage={errorDesc}
      />
      <ScrollView
        horizontal
        style={styles.viewImages}
      >
          <Icon
            type='material-community'
            name='camera'
            color='#7a7a7a'
            containerStyle={styles.containerIcon}
          />
      </ScrollView>

      <Button
          title='Añadir Estética'
          onPress={AddEstetica}
          buttonStyle={styles.btnAdd}
      />

    </View>
  )
}

const defaultFormValues = () =>{
  return {
    name:'',
    description:'',
    address:''
  }
}


const styles = StyleSheet.create({
  viewForm:{
    height: '100%',
    marginHorizontal: 10,
    marginTop: 30
  },
  textD:{
    height: 100,
    width: '100%',
    marginTop:20
  },
  btnAdd:{
    margin:15,
    backgroundColor:'#0833A2',
    borderRadius: 10,
  },
  inputForm:{
    width: '100%',
    marginTop: 20,
  },
  viewImages:{
    flexDirection: 'row',
    marginHorizontal: 20,
    marginTop: 30
  },
  containerIcon:{
    alignItems:'center',
    justifyContent: 'center',
    marginRight: 10,
    height: 70,
    width: 70,
    backgroundColor: '#e3e3e3'
  }
})