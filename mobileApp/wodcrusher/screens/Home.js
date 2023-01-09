import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import Layout from '../components/Layout'
import { getUser } from '../api'

const Home = ({ navigation, route }) => {

    const [userLoggued, setUserLoggued] = useState({
        name: '',
        surname: '',
        email: '',
    })
    const params = route.params.email
    
    const getUserLoggued = async () => {
        const res = await getUser(params)
        setUserLoggued({
            name: res.first_name,
            surname: res.last_name,
            email: res.email
        })
    }

    useEffect(() => {
        if (route.params && route.params.email) {
            getUserLoggued()
        }
    }, [])
    useEffect(() => {
        console.log(userLoggued)
    }, [userLoggued])


    return (
        <Layout>
            <View style={styles.home}>
                <Text style={styles.title}>Home</Text>
                <View style={styles.options}>
                    <TouchableOpacity style={styles.menuOption}>
                        <Text style={styles.optionText}>Reservar</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.menuOption}>
                        <Text style={styles.optionText}>Benchmarks</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.options}>
                    <TouchableOpacity style={styles.menuOption}>
                        <Text style={styles.optionText}>Mi cuerpo</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.menuOption}>
                        <Text style={styles.optionText}>Tienda</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.options}>
                    <TouchableOpacity style={styles.menuOption}>
                        <Text style={styles.optionText}>Perfil</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.menuOption} onPress={e=>{navigation.navigate('Login')}}>
                        <Text style={styles.optionText}>Salir</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Layout>
    )
}

const styles = StyleSheet.create({
    home: {
        flex: 1,
        width: '100%',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
    },
    options: {
        flex: 1,
        width: '90%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    menuOption: {
        width: 148,
        height: 148,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 999,
        backgroundColor: '#6B7F35',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    optionText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff',
    }
})

export default Home