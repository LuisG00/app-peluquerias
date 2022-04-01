import React, {useState} from 'react'
import { StyleSheet, View, Text } from 'react-native'
import {Input, Icon, Button} from 'react-native-elements'

export default function RegisterForm(){
    const [showPassword, setShowPassword] = useState(false)
    return(
        <View style={styles.formContainer}>
            <Input
                placeholder='Correo electrónico'
                containerStyle={styles.inputForm}
                rightIcon={<Icon
                     type='material-community' 
                     name='email-outline' 
                     iconStyle={styles.iconRight}
                />}
            />
            <Input
                placeholder='Contraseña'
                containerStyle={styles.inputForm}
                password={true}
                secureTextEntry={true}
                rightIcon={<Icon
                     type='material-community' 
                     name={showPassword ? 'eye-off-outline' : 'eye-outline' }
                     iconStyle={styles.iconRight}
                     onPress={()=> setShowPassword(!showPassword)}
                     />}
            />
            <Input
                placeholder='Repetir contraseña'
                containerStyle={styles.inputForm}
                password={true}
                secureTextEntry={true}
                rightIcon={<Icon 
                    type='material-community' 
                    name='eye-outline' 
                    iconStyle={styles.iconRight}/>}
            />
            <Button
                title='Únete'
                containerStyle={styles.btnContainerRegister}
                buttonStyle={styles.btnRegister}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    formContainer:{
        marginTop: 30,
        
    },
    inputForm:{
        width: '100%',
        marginTop: 20,
    },
    btnContainerRegister:{
        marginTop: 20,
        width: '95%'
    },
    btnRegister:{
        backgroundColor: '#0833A2',
        borderRadius: 10,
        
    },
    iconRight:{
        color:'#c1c1c1',
        
    }

})