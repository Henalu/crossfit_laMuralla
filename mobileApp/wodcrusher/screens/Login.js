import { View, Text, TextInput, TouchableOpacity, StyleSheet, FlatList } from 'react-native'
import React, { useState, useEffect } from 'react'
import Layout from '../components/Layout'
import { useIsFocused } from '@react-navigation/native'
import { getUser, defaultPost, getUsers } from '../api'

const Login = ({ navigation }) => {
    const [users, setUsers] = useState([])
    const [user, setUser] = useState([])
    const [userData, setUserData] = useState({
        email: '',
        password: ''
    })
    const isFocused = useIsFocused()

    // useEffect(() => {
    //     loadUsers('findAllUsers')
    // }, [isFocused])

    const renderItem = ({ item }) => {
        return (
            <Text>{item.email}</Text>
        )
    }

    // const loadUsers = async (endPoint) => {
    //     const data = await getUsers(endPoint)
    //     setUsers(data)
    // }

    const handleChange = (key, value) => {
        setUserData({
            ...userData,
            [key]: value
        })
    }

    return (
        <Layout>
            <View style={styles.loginContainer}>
                <Text style={styles.title}>WODCRUSHER</Text>
                {/* <FlatList
                    data={users}
                    renderItem={renderItem}
                /> */}
                <TextInput
                    style={styles.input}
                    placeholder='Nombre de Usuario'
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

                <TouchableOpacity style={styles.loginButton} onPress={(() => navigation.navigate('Home', { email: userData.email }))}>
                    <Text>Log In</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.forgotPassButton}>
                    <Text>¿Has olvidado tu contraseña?</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.registerButton} onPress={e=>{navigation.navigate('Register')}}>
                    <Text>¿Aun no estás registrado? - Apuntate</Text>
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

export default Login