import * as React from 'react';
import { View, Image, Text, ScrollView } from 'react-native';
import Login from './Login';
import {Hitam, Abu} from '../../components/screens/components/Warna'


export default function Profile(){
    return (
        <View>
          <Image source={require} style={{
            marginLeft:-17,
            marginTop:-40,
            width:430,
            height:243,
            }}/>
            <View>
              <Image source={require('./../../assets/emma.png')} style={{
                marginLeft:128,
                marginTop:-170,
                width:141,
                height:143,
                }}/>
            </View>
            <View>
              <Text style={{
                marginLeft: 90,
                marginTop: 16,
                fontFamily: 'Arial',
                color: Hitam,
                fontWeight: 'bold',
                fontSize: 24,
                }}>Nurul Putri Zaen</Text>
            </View>
            
            <View>
             <Image source={require('./../../assets/gmailProfile.png')} style={{
                marginLeft:88,
                marginTop:8,
                width:16,
                height:16,
                }}/>
              <Text style={{
                marginLeft: 110,
                marginTop: -16,
                fontFamily: 'Arial',
                color: Hitam,
                fontWeight: 'light',
                fontSize: 12,
                }}>nurul20si@mahasiswa.pcr.ac.id
              </Text> 
              <Text style={{
                marginLeft: 16,
                marginTop: 50,
                fontFamily: 'Arial',
                color: Abu,
                fontSize: 14,
                }}>Pengaturan Akun
                </Text>   
                </View>
              <View>

            <View>
              <Image source={require('./../../assets/panah.png')} style={{
                marginLeft:360,
                marginTop:20,
                width:16,
                height:16,
                }}/>
              <Text style={{
                marginLeft: 25,
                marginTop: -20,
                fontFamily: 'Arial',
                color: Hitam,
                fontWeight: 'light',
                fontSize: 13,
                }}>Informasi Akun</Text>

              <Image source={require('./../../assets/garis.png')} style={{
               marginLeft:25,
                marginTop:20,
                width:350,
                height:1,
                }}/>

            </View>

             <View>
              <Image source={require('./../../assets/panah.png')} style={{
                marginLeft:360,
                marginTop:20,
                width:16,
                height:16,
                }}/>
              <Text style={{
                marginLeft: 25,
                marginTop: -20,
                fontFamily: 'Arial',
                color: Hitam,
                fontWeight: 'light',
                fontSize: 13,
                }}>tentang</Text>

              <Image source={require('./../../assets/garis.png')} style={{
               marginLeft:25,
                marginTop:20,
                width:350,
                height:1,
                }}/>

            </View>
             <View>
              <Image source={require('./../../assets/panah.png')} style={{
                marginLeft:360,
                marginTop:20,
                width:16,
                height:16,
                }}/>
              <Text style={{
                marginLeft: 25,
                marginTop: -20,
                fontFamily: 'Arial',
                color: Hitam,
                fontWeight: 'light',
                fontSize: 13,
                }}>Keluar</Text>

              <Image source={require('./../../assets/garis.png')} style={{
               marginLeft:25,
                marginTop:20,
                width:350,
                height:1,
                }}/>

            </View>
                  <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                   
                  </ScrollView>
              </View>
      </View>

    );
}