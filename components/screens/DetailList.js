import * as React from 'react';
import { Image, View, StyleSheet, TouchableOpacity, Text, ScrollView, Button, TextInput, ImageBackground } from 'react-native';

export default function DetailList(props) {
  return (
    <View style={styles.main}>
      <View style={styles.infromasi}>
        <View style={styles.container}>
          <Text style={{
            width: 380,
            marginTop: 14,
            color: 'black',
            fontSize: 13,
            textAlign: 'left',
            paddingLeft: 48,
            fontWeight: 'bold',
          }}>Nominal</Text>

          <TextInput placeholder="Masukkan Nominal" label="Nominal"
            style={{
              width: 380,
              height: 40,
              borderRadius: 88,
              backgroundColor: '#E9E9E9',
              color: '#757171',
              paddingLeft: 23,
              marginTop: 11,
              fontSize: 13,
              fontWeight: 'light',
              marginBottom: 16,
              marginLeft: 35
            }} />
          <Text style={{
            width: 380,
            marginTop: 14,
            color: 'black',
            fontSize: 13,
            textAlign: 'left',
            paddingLeft: 48,
            fontWeight: 'bold',
          }}>Keterangan</Text>

          <TextInput placeholder="Masukkan Keterangan" label="Keterangan"
            style={{
              width: 380,
              height: 40,
              borderRadius: 88,
              backgroundColor: '#E9E9E9',
              color: '#757171',
              paddingLeft: 23,
              marginTop: 11,
              fontSize: 13,
              fontWeight: 'light',
              marginBottom: 16,
              marginLeft: 35
            }} />
          <Text style={{
            width: 380,
            marginTop: 14,
            color: 'black',
            fontSize: 13,
            textAlign: 'left',
            paddingLeft: 48,
            fontWeight: 'bold',
          }}>Angkatan</Text>

          <TextInput placeholder="Masukkan Bulan" label="Bulan"
            style={{
              width: 380,
              height: 40,
              borderRadius: 88,
              backgroundColor: '#E9E9E9',
              color: '#757171',
              paddingLeft: 23,
              marginTop: 11,
              fontSize: 13,
              fontWeight: 'light',
              marginBottom: 16,
              marginLeft: 35,
            }} />

          <Text style={{
            width: 380,
            marginTop: 14,
            color: 'black',
            fontSize: 13,
            textAlign: 'left',
            paddingLeft: 48,
            fontWeight: 'bold',
          }}>Bukti bayar</Text>
          <View style={styles.upload_content}>
            <TouchableOpacity>
              <ImageBackground source={require('../../assets/border-upload.png')} resizeMode="cover" style={styles.bg_upload}>
                <Image source={require('../../assets/upload-icon.png')} style={styles.icon_upload} />
                <Text style={styles.txt_btn_upload}>
                  Unggah Bukti
                </Text>
              </ImageBackground>
            </TouchableOpacity>
          </View>
          <TouchableOpacity onPress={() => {props.onPress}}>
            <Text style={styles.btn_bayar}>Bayar</Text>
          </TouchableOpacity>
        </View>
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

  infromasi: {
    width: 380,
    flexDirection: 'column',
    alignItems: 'center',
  },

  upload_content: {
    flexDirection: 'column',
    marginLeft:30
  },

  bg_upload: {
    width: 314,
    height: 217,
    marginTop: 14,
  },

  icon_upload:{
    width:47,
    height:40,
    alignSelf:'center',
    marginTop:68
  },

  txt_btn_upload:{
    fontSize:14,
    textAlign:'center',
    fontWeight: 'bold',
    marginTop:34,
  },

  btn_bayar:{
    width:150,
    height:44,
    borderRadius:40,
    fontSize:16,
    letterSpacing:0.15,
    color:'white',
    backgroundColor:'#2B3467',
    textAlign:'center',
    justifyContent:'center',
    textAlignVertical:'center',
    marginLeft:30,
    marginTop:47
  }



});


