import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Onboarding from './components/screens/Onboarding';
import Login from './components/screens/Login';

const AppStack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="dark" />
      <NavigationContainer>
        <AppStack.Navigator headerMode="none">
          <AppStack.Screen name="Onboarding" component={Onboarding} options={{headerShown: false}}/>
          <AppStack.Screen name="Login" component={Login} options={{headerShown: false}}/>
        </AppStack.Navigator>
      </NavigationContainer>
    </>
  );
}