import React, {useState} from 'react'
import { StyleSheet, View, Text } from 'react-native'
import {Input, Icon, Button} from 'react-native-elements'
import { validateEmail } from '../../utils/Validation'
import { validatePhone } from '../../utils/Validation'

export default function RegisterForm(){
    const [showPassword, setShowPassword] = useState(false)
    const [showRepeatPassword, setshowRepeatPassword] = useState(false) 
    const [formData, setFormData] = useState(defaultFormValues())

    const onSubmit = () =>{
        if(formData.email.length===0||formData.phone.length===0||formData.password.length===0||formData.repeatpassword.length===0){
            console.log('Se requieren todos los campos')
        } else if (!validateEmail(formData.email)){
            console.log('Email incorrecto')
        }else if (!validatePhone(formData.phone)){
            console.log('Teléfono inválido')
        }else if (formData.password !== formData.repeatpassword){
            console.log('Las contraseñas no coinciden')
        } else if (formData.password.length < 6){
            console.log('El minimo de caracteres de la contraseña deben ser 6')
        } else{
            console.log('Registro exitoso. ¡Bienvenido!')
        }
    }

    const onChange = (e, type) =>{
        setFormData({ ...formData, [type]: e.nativeEvent.text})
    }

    return(
        <View style={styles.formContainer}>
            <Input
                placeholder='Correo electrónico'
                containerStyle={styles.inputForm}
                onChange={(e)=>onChange(e, 'email')}
                rightIcon={<Icon
                     type='material-community' 
                     name='gmail' 
                     iconStyle={styles.iconRight}
                />}
            />
            <Input
                placeholder='Celular'
                containerStyle={styles.inputPhone}
                onChange={(e)=>onChange(e, 'phone')}
                rightIcon={<Icon
                     type='material-community' 
                     name='cellphone' 
                     iconStyle={styles.iconRight}
                />}
            />
            <Input
                placeholder='Contraseña'
                containerStyle={styles.inputForm}
                password={true}
                secureTextEntry={showPassword ? false : true}
                onChange={(e)=>onChange(e, 'password')}
                rightIcon={<Icon
                     type='material-community' 
                     name={showPassword ? 'eye-off' : 'eye' }
                     iconStyle={styles.iconRight}
                     onPress={()=> setShowPassword(!showPassword)}
                     />}
            />
            <Input
                placeholder='Repetir contraseña'
                containerStyle={styles.inputForm}
                password={true}
                secureTextEntry={showRepeatPassword ? false : true}
                onChange={(e)=>onChange(e, 'repeatpassword')}
                rightIcon={<Icon
                     type='material-community' 
                     name={showRepeatPassword ? 'eye-off' : 'eye' }
                     iconStyle={styles.iconRight}
                     onPress={()=> setshowRepeatPassword(!showRepeatPassword)}
                     />}
            />
            <Button
                title='Únete'
                containerStyle={styles.btnContainerRegister}
                buttonStyle={styles.btnRegister}
                onPress={onSubmit}
            />
        </View>
    )
}

function defaultFormValues(){
    return{
        email: '',
        phone: '',
        password: '',
        repeatpassword: ''
    }
}

const styles = StyleSheet.create({
    formContainer:{
        marginTop: 30,
        
    },
    inputForm:{
        width: '100%',
        marginTop: 20,
    },
    inputPhone:{
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
        marginTop: 10
        
    },
    iconRight:{
        color:'#c1c1c1',
        
    }

})