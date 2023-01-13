import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import 'expo-dev-client'
import { GoogleSignin, GoogleSigninButton } from '@react-native-google-signin/google-signin';
import React, { useState, useEffect} from 'react';
import auth from '@react-native-firebase/auth';
import { TextInput } from 'react-native-gesture-handler';
import InputLabel from './decorations/InputLabel';
import RoundedButton from './decorations/RoundedButton';
import RoundedButtonLogo from './decorations/RoundedButtonLogo';
import Beranda from './Beranda';



export default function Login() {
  // set initializing
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();
  const [error, setError] = useState();
  GoogleSignin.configure({
    webClientId: '629457100364-00gv4u4ui39mt3b8hh7rul7aofs0pto6.apps.googleusercontent.com',
  });

   // Handle user state changes
   function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  const onGoogleButtonPress = async() => {
    // Check if your device supports Google Play
    await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
    // Get the users ID token
    const { idToken } = await GoogleSignin.signIn();
  
    // Create a Google credential with the token
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);
  
    // Sign-in the user with the credential
    //return auth().signInWithCredential(googleCredential);
    const user_sign_in = auth().signInWithCredential(googleCredential);
    user_sign_in.then((user) => {
      console.log(user);
    }).catch((error) =>{
      console.log(error);
    })
  }

  const signOut = async () =>{
    try{
      await GoogleSignin.revokeAccess();
      await auth().signOut();
    }catch(error){
      console.error(error);
    }
  }

  if (initializing) return null;

  if(!user){
    return(
      <View
      style={styles.container}>
        <View
        style={{alignItems: 'center'}}>
          <Text style={{ marginTop: 72, fontSize: 28, fontWeight: 'bold', color: '#253D3C'}}>SIKEFO</Text>
          <Text style={{ marginTop: 27, fontSize: 13, fontWeight: 'normal', color: '#636363'}}>Halo, Selamat Datang di SIKEFO !</Text>         
        </View>
        <View
        style={{marginTop: 48, alignItems: 'center'}}>          
          <InputLabel placeholder="Masukkan Email" label="Email"/>
          <InputLabel placeholder="Masukkan Password" label="Password" secure={true}/>
        </View>
        <RoundedButton label="Masuk"/>
        <Text style={{color: '#757171', marginTop: 59}}>Atau masuk dengan</Text>
        <RoundedButtonLogo onPress={onGoogleButtonPress} label="Google"/>
      </View>
    );
  }


  return (
    <Beranda url={user.photoURL} signOut={signOut}/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center'
  },
  label: {
    marginTop: 72,
    fontSize: 14,
    marginBottom: 11,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'left'
  },
  input: {
    borderRadius: 88,
    paddingVertical: 10,
    paddingLeft: 23,
    width: 300,
    backgroundColor: 'rgba(99, 99, 99, 0.1)',
  }
});

