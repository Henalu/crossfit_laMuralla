import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from './screens/Home';
import Login from './screens/Login';
import Register from './screens/Register';

export default function App() {

  const Stack = createNativeStackNavigator()
  const Drawer = createDrawerNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={Login}
          options={({ navigation }) => ({
            title: 'Login',
            headerStyle: { backgroundColor: '#222f3c' },
            headerTitleStyle: { color: '#fff' },
          })}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={({ navigation }) => ({
            title: 'Home',
            headerStyle: { backgroundColor: '#222f3c' },
            headerTitleStyle: { color: '#fff' },
            headerTintColor: '#fff',
          })}
        />
        <Stack.Screen
          name="Register"
          component={Register}
          options={({ navigation }) => ({
            title: 'Register',
            headerStyle: { backgroundColor: '#222f3c' },
            headerTitleStyle: { color: '#fff' },
            headerTintColor: '#fff',

          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
