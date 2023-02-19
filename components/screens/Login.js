import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button, TouchableOpacity } from 'react-native';
import 'expo-dev-client'
import { GoogleSignin, GoogleSigninButton } from '@react-native-google-signin/google-signin';
import axios from 'axios';
import React, { useState, useEffect, useContext } from 'react';
import auth from '@react-native-firebase/auth';
import { TextInput } from 'react-native-gesture-handler';
import InputLabel from './decorations/InputLabel';
import RoundedButton from './decorations/RoundedButton';
import RoundedButtonLogo from './decorations/RoundedButtonLogo';
import Beranda from './Beranda';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { BASE_URL } from './Config';


export default function Login() {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  // set initializing
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();
  const [isLoginInput, setIsLoginInput] = useState(false);
  GoogleSignin.configure({
    webClientId: '629457100364-00gv4u4ui39mt3b8hh7rul7aofs0pto6.apps.googleusercontent.com',
  });

  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);
  const [userInfo, setUserInfo] = useState({})
  const loginInput = async (email, password) => {      
      axios
      .post(`${BASE_URL}/api/login`, {
          email, password
      })
      .then(res => {
          let userInfo = res.data.data;
          storeLoginInput({userInfo})
          setUserInfo(userInfo)
          setIsLoginInput(true)
      })
      .catch(e => {
          console.log(`login error ${e}`);
      })
  }

  const loginGoogle = async (email) => {      
    axios
    .post(`${BASE_URL}/api/google/login`, {
        email
    })
    .then(res => {
        let userInfo = res.data.data;
        storeLoginGoogle(userInfo)
        AsyncStorage.setItem('userInfo', JSON.stringify(userInfo))
    })
    .catch(e => {
        console.log(`login error ${e}`);
    })
}

  //menyimpan hasil login melalui input
  const storeLoginInput = async (value) => {
    try {
      await AsyncStorage.setItem("user", JSON.stringify(value));
      const savedUser = await AsyncStorage.getItem("user");
      const currentUser = JSON.parse(savedUser);
    } catch (error) {
      console.log(error);
    }
  }
  
  //menyimpan hasil login melalui Google
  const storeLoginGoogle = async (value) => {
    try {
      await AsyncStorage.setItem("user", JSON.stringify(value));
      const savedUser = await AsyncStorage.getItem("user");
      const currentUser = JSON.parse(savedUser);
    } catch (error) {
      console.log(error);
    }
  };

  const getUser = async () => {
    try {
      const savedUser = await AsyncStorage.getItem("user");
      const currentUser = JSON.parse(savedUser);
    } catch (error) {
      console.log(error);
    }
  };
  

  // Handle user state changes
  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  const onGoogleButtonPress = async () => {
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
      console.log("sign in");
    }).catch((error) => {
      console.log(error);
    })
  }

  //hapus session user  
  const removeUser = async () => {
    try {
      await AsyncStorage.removeItem("user");
    } catch (error) {
      console.log(error);
    }
  };

  //logout
  const signOut = async () => {
    try {
      await GoogleSignin.revokeAccess();
      await auth().signOut();
      await removeUser();
    } catch (error) {
      console.error(error);
    }
  }

  if (initializing) return null;

  if (!user) {
    return (
      <View
        style={styles.container}>
        <View
          style={{ alignItems: 'center' }}>
          <Text style={{ marginTop: 72, fontSize: 28, fontWeight: 'bold', color: '#253D3C' }}>SIKEFO</Text>
          <Text style={{ marginTop: 27, fontSize: 13, fontWeight: 'normal', color: '#636363' }}>Halo, Selamat Datang di SIKEFO !</Text>
        </View>
        <View
          style={{ marginTop: 48, alignItems: 'center' }}>
          <View
            style={{
              marginTop: 15,
            }}>
            <Text style={styles.label}>Email</Text>
            <TextInput
              placeholder="Masukkan Email"
              value={email}
              onChangeText={text => setEmail(text)}
              style={styles.input}
              secureTextEntry={false} />
          </View>
          <View
            style={{
              marginTop: 15,
            }}>
            <Text style={styles.label}>Password</Text>
            <TextInput
              placeholder="Masukkan Password"
              value={password}
              onChangeText={text => setPassword(text)}
              style={styles.input}
              secureTextEntry={true} />
          </View>
        </View>
        <View
        style={{marginTop: 70, alignItems: 'center'}}>
            <TouchableOpacity
            style={styles.buttonContainer}
            onPress={() => {loginInput(email, password)}}>
                <Text style={styles.ButtonText}>
                    Masuk
                </Text>
            </TouchableOpacity>
        </View>
        <Text style={{ color: '#757171', marginTop: 59 }}>Atau masuk dengan</Text>
        <RoundedButtonLogo onPress={onGoogleButtonPress} label="Google" />
      </View>
    );
  }

  
  loginGoogle(user.email)
  return (
    <Beranda url={user.photoURL} signOut={signOut} />
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
  }, label: {
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
  },buttonContainer: {
    backgroundColor: "#2B3467",
    borderRadius: 40,
    paddingVertical: 12,
    width: 300
},
ButtonText: {
  fontSize: 15,
  color: "#fff",
  fontWeight: "bold",
  alignSelf: "center",
}
});

