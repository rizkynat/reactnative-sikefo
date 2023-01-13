import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Onboarding from './components/screens/Onboarding';
import Login from './components/screens/Login';
import MenuListKas from './components/screens/MenuListKas';
import MenuListKeuangan from './components/screens/MenuListKeuangan';
import Profile from './components/screens/Profile';
import About from './components/screens/About';

const AppStack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="dark" />
      <NavigationContainer>
        <AppStack.Navigator headerMode="none">
          <AppStack.Screen name="Onboarding" component={Onboarding} options={{headerShown: false}}/>
          <AppStack.Screen name="Login" component={Login} options={{headerShown: false}}/>
          <AppStack.Screen name="MenuListKas" component={MenuListKas} options={{title: "Kas"}}/>
          <AppStack.Screen name="MenuListKeuangan" component={MenuListKeuangan} options={{title: "Keuangan"}}/>
          <AppStack.Screen name="Profile" component={Profile} options={{title: "Profile"}}/>
          <AppStack.Screen name="About" component={About} options={{title: "About"}}/>

        </AppStack.Navigator>
      </NavigationContainer>
    </>
  );
}