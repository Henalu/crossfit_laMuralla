import { View, Text, TextInput, TouchableOpacity, StyleSheet, FlatList } from 'react-native'
import React, { useState } from 'react'
import Layout from '../components/Layout'
import { addUser } from '../api'

const Register = ({navigation}) => {

    const [userData, setUserData] = useState({
        first_name: '',
        last_name: '',
        email: '',
        password: ''
    })

    const handleChange = (key, value) => {
        setUserData({
            ...userData,
            [key]: value
        })
    }

    const handleRegister = async () => {
        console.log(userData)
        await addUser(userData)
        setUserData({
            first_name: '',
            last_name: '',
            email: '',
            password: ''
        })
    }

    return (
        <Layout>
            <View style={styles.loginContainer}>
                <Text style={styles.title}>WODCRUSHER</Text>
                <TextInput
                    style={styles.input}
                    placeholder='Nombre'
                    onChangeText={(text) => {
                        handleChange('first_name', text)
                    }}
                />
                <TextInput
                    style={styles.input}
                    placeholder='Apellidos'
                    onChangeText={(text) => {
                        handleChange('last_name', text)
                    }}
                />
                <TextInput
                    style={styles.input}
                    placeholder='Email'
                    onChangeText={(text) => {
                        handleChange('email', text)
                    }}
                />
                <TextInput
                    style={styles.input}
                    placeholder='Contraseña'
                    onChangeText={(text) => {
                        handleChange('password', text)
                    }}
                />

                <TouchableOpacity style={styles.loginButton} onPress={handleRegister}>
                    <Text>Registrate</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.forgotPassButton}>
                    <Text>¿Has olvidado tu contraseña?</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.registerButton} onPress={e=>{navigation.navigate('Login')}}>
                    <Text>¿Ya estás registrado? - Logueate</Text>
                </TouchableOpacity>
            </View>
        </Layout>
    )
}

const styles = StyleSheet.create({
    loginContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        justifyContent: 'center',
        alignItems: 'center',
        color: '#000000',
        fontSize: 20,
        fontWeight: 'bold',
        height: 40,
    },
    input: {
        height: 40,
        width: 300,
        padding: 10,
        backgroundColor: '#EAEAEC',
        borderRadius: 10,
        marginBottom: 10,
    },
    loginButton: {
        height: 40,
        width: 300,
        backgroundColor: '#8B9A42',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    forgotPassButton: {
        height: 40,
        width: 300,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'flex-end',

    },
    registerButton: {
        height: 40,
        width: 300,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'flex-end',

    }
})

export default Register