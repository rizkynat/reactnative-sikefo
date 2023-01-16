import * as React from 'react';
import { View, Image, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';

export default function Profile(){
  
  const [user, setUser] = useState([]);

  const navigation = useNavigation()
  const getUser = async () => {
    try {
      const savedUser = await AsyncStorage.getItem("userInfo");
      const currentUser = JSON.parse(savedUser);
      console.log("Ini data user ketika masuk Profile:")
      console.log(currentUser);
      global.dataUser = await currentUser
      setUser(currentUser)
      console.log(global.dataUser)
    } catch (error) {
      console.log(error);
    }
  };
  React.useEffect(() => {
    getUser();

  }, [])
  const data = user
  console
  console.log(data)
    return (
      <View style={styles.main}>
      <View style={styles.container}>
        <View style={styles.profile}>
          <Image source={{uri: `${data.picture_url}`}} style={{
            width: 148,
            height: 154,
            borderRadius: 100,
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
      <View style={styles.pengaturan}>
        <Text style={{
          width: 380,
          marginTop: 14,
          color: '#999999',
          fontSize: 13,
          letterSpacing: 0.76,
          textAlign: 'left',
          paddingLeft: 38
        }}>Pengaturan Akun</Text>
          <TouchableOpacity style={styles.navigation} onPress={() => navigation.navigate('InformasiAkun')}>
            <Text style={{
              color: 'black',
              fontSize: 14,
              letterSpacing: 0.15,
              textAlign: 'left',
              marginRight:18,
              
              paddingBottom:12,
            }}>Informasi Akun</Text>
            <Image source={require('../../assets/panah.png')} style={{
              width: 7.41,
              height: 12,
              marginLeft:240,
              marginTop:6,
            }} />
          </TouchableOpacity>
                    <TouchableOpacity style={styles.navigation} onPress={() => navigation.navigate('About')}>
            <Text style={{
              color: 'black',
              fontSize: 14,
              letterSpacing: 0.15,
              textAlign: 'left',
              marginRight:18,
              paddingBottom:12,
            }}>Tentang</Text>
            <Image source={require('../../assets/panah.png')} style={{
              width: 7.41,
              height: 12,
              marginLeft:289,
              marginTop:6,
              paddingBottom:12,
            }} />
          </TouchableOpacity>
                    <TouchableOpacity style={styles.navigation} onPress={() => navigation.navigate('Logout')} >
            <Text style={{
              color: 'black',
              fontSize: 14,
              letterSpacing: 0.15,
              textAlign: 'left',
              marginRight:18,
              paddingBottom:12,
            }}>Keluar</Text>
            <Image source={require('../../assets/panah.png')} style={{
              width: 7.41,
              height: 12,
              marginLeft:301,
              marginTop:6,
            }} />
          </TouchableOpacity>
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


