import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './src/pages/LoginScreen';
import RegisterScreen from './src/pages/RegisterScreen';
import HomeScreen from './src/pages/HomeScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='LoginScreen'>
        <Stack.Screen component={LoginScreen} name='LoginScreen' options={{ headerShown: false }} />
        <Stack.Screen component={RegisterScreen} name='RegisterScreen' options={{ headerShown: false }} />
        <Stack.Screen component={HomeScreen} name='HomeScreen' options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}