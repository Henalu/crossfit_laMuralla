import { View, StyleSheet, StatusBar } from 'react-native'
import React from 'react'

const Layout = ({ children }) => {
    return (
        <View style={styles.container}>
            <StatusBar barStyle="light-content" />
            {children}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        padding: 20,
    }
})

export default Layout