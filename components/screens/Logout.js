import {React, useState, useEffect} from 'react';
import { View, Image, Text, ScrollView, TouchableOpacity, StyleSheet, Modal, Alert, Pressable } from 'react-native';
import Login from './Login';
import {Hitam, Abu} from '../../components/screens/components/Warna'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';
import { useNavigation } from '@react-navigation/native';

export default function Logout(){
    const navigation = useNavigation()
    // set initializing
    const [initializing, setInitializing] = useState(true);
    const [user, setUser] = useState();
    // Handle user state changes
   function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }
  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);
  const removeUser = async () => {
    try {
      await AsyncStorage.removeItem("user");
    } catch (error) {
      console.log(error);
    }
  };

  const signOut = async () =>{
    try{
      await GoogleSignin.revokeAccess();
      await auth().signOut();
      await removeUser();
    }catch(error){
      console.error(error);
    }
  }

  const getUser = async () => {
    try {
      const savedUser = await AsyncStorage.getItem("user");
      const currentUser = JSON.parse(savedUser);
      console.log(currentUser);
      global.user = currentUser
    } catch (error) {
      console.log(error);
    }
  };
  signOut()
  getUser();
  
  if (initializing) return null;
  if(!user){
    return(
        navigation.navigate('Login')
    );
  }else{
      getUser()
  }
}

const styles = StyleSheet.create({
  main: {
    backgroundColor: '#FFFFFF',
  },

  container: {
    alignItems: 'center',
  },

  content: {
    width: 428,
    flexDirection: 'column',
    borderBottomColor: '#D1D1D6',
    borderBottomWidth: StyleSheet.hairlineWidth
  },

  profile: {
    marginTop: 57,
    alignItems: 'center',
  },

  email: {
    alignSelf: 'center',
    flexDirection: 'row',
  },

  pengaturan: {
    width: 380,
    flexDirection: 'column',
    alignItems: 'center',
  },

  navigation:{
    
    alignSelf: 'center',
    marginTop: 24,
    width: 380,
    marginLeft:38,
    flexDirection: 'row',
    borderBottomColor: '#D1D1D6',
    borderBottomWidth: StyleSheet.hairlineWidth
  }
});


