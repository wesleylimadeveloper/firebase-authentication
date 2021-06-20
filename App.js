import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './src/screens/LoginScreen';
import RegisterScreen from './src/screens/RegisterScreen';
import HomeScreen from './src/screens/HomeScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LoginScreen" screenOptions={screenOptions}>
        <Stack.Screen component={LoginScreen} name="LoginScreen" />
        <Stack.Screen component={RegisterScreen} name="RegisterScreen" />
        <Stack.Screen component={HomeScreen} name="HomeScreen" />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const screenOptions = {
  headerShown: false,
}