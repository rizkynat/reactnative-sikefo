import * as React from 'react';
import { Image, View, StyleSheet, TouchableOpacity, Text, ScrollView, Button, TextInput } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState } from 'react';

export default function InformasiAkun() {
  const [user, setUser] = useState([]);

    const getUser = async () => {
      try {
        const savedUser = await AsyncStorage.getItem("userInfo");
        const currentUser = JSON.parse(savedUser);
        console.log("Ini data user ketika masuk Informasi Akun:")
        console.log(currentUser);
        global.dataUser = await currentUser
        setUser(currentUser)        
      } catch (error) {
        console.log(error);
      }
    };
    React.useEffect(() => {
      getUser();
  
    }, [])
    const data = user
        return (
          <View style={styles.main}>
            <View style={styles.container}>
              <View style={styles.profile}>
                <Image source={{uri: `${data.picture_url}`}} style={{
                  width: 148,
                  height: 154,
                  borderRadius: 100
                }} />
              </View>
              <View style={styles.content}>
                <Text style={{
                  textAlign: 'center',
                  marginTop: 23,
                  color: 'black',
                  fontWeight: 'bold',
                  fontSize: 20,
                }}>{data.nama_lengkap}</Text>
                <View style={styles.email}>
                  <Image source={require('../../assets/gmailProfile.png')} style={{
                    marginTop: 12,
                    marginRight: 5,
                    width: 16,
                    height: 16,
                  }} />
                  <Text style={{
                    textAlign: 'center',
                    marginTop: 10,
                    color: 'black',
                    fontSize: 12,
                    paddingBottom: 22,
                  }}>{data.email}</Text>
                </View>
              </View>
            </View>
            <View style={styles.infromasi}>
              <Text style={{
                width: 380,
                marginTop: 14,
                color: '#999999',
                fontSize: 13,
                letterSpacing: 0.76,
                textAlign: 'left',
                paddingLeft: 38
              }}>Infromasi Akun</Text>
      
              <Text style={{
                width: 380,
                marginTop: 14,
                color: 'black',
                fontSize: 13,
                textAlign: 'left',
                paddingLeft: 48,
                fontWeight: 'bold',
              }}>Nama</Text>
              
              <TextInput editable={false} value={data.nama_lengkap} label="Nama"
              style={{
                width:380,
                height: 40,
                borderRadius:88,
                backgroundColor:'#E9E9E9',
                color:'#757171',
                paddingLeft:23,
                marginTop:11,
                fontSize:13,
                fontWeight:'light',
                marginBottom:16,
                marginLeft:35
              }}/>
              <Text style={{
                width: 380,
                marginTop: 14,
                color: 'black',
                fontSize: 13,
                textAlign: 'left',
                paddingLeft: 48,
                fontWeight: 'bold',
              }}>Nama</Text>
              
              <TextInput editable={false} value={data.email} label="Email"
              style={{
                width:380,
                height: 40,
                borderRadius:88,
                backgroundColor:'#E9E9E9',
                color:'#757171',
                paddingLeft:23,
                marginTop:11,
                fontSize:13,
                fontWeight:'light',
                marginBottom:16,
                marginLeft:35
              }}/>
              <Text style={{
                width: 380,
                marginTop: 14,
                color: 'black',
                fontSize: 13,
                textAlign: 'left',
                paddingLeft: 48,
                fontWeight: 'bold',
              }}>Angkatan</Text>
              
              <TextInput editable={false} value={`${data.angkatan}`} label="angkatan"
              style={{
                width:380,
                height: 40,
                borderRadius:88,
                backgroundColor:'#E9E9E9',
                color:'#757171',
                paddingLeft:23,
                marginTop:11,
                fontSize:13,
                fontWeight:'light',
                marginBottom:16,
                marginLeft:35,
              }}/>
            </View>
          </View>
        );
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
      
        infromasi: {
          width: 380,
          flexDirection: 'column',
          alignItems: 'center',
        },
      
        
      });
      
      
      