import * as React from 'react';
import { Text, View, StyleSheet, Image, ImageBackground } from 'react-native';

export default function About() {
  return (
    <View style={styles.main}>
      <View style={styles.content}>
        <Image source={require('../../assets/logo.png')} style={styles.logo} />
        <View style={styles.desc1}>
          <ImageBackground source={require('../../assets/bg_desc_profile.png')} resizeMode="cover" style={styles.bg_desc}>
            <Text style={styles.judul}>SIKEFO dalam keseluruhan</Text>
            <Text style={styles.isi}>
              Aplikasi keuangan kas Himpunan Sistem Informasi (HIMASISTIFO) 
              yang bertujuan agar dapat mengetahui kondisi finansial dalam 
              suatu organisasi,dengan pencatatan yang lengkap, tranpasaran, dan jelas.
            </Text>
          </ImageBackground>
        </View>
        <View style={styles.desc2}>
          <ImageBackground source={require('../../assets/bg_desc_profile.png')} resizeMode="cover" style={styles.bg_desc}>
          <Text style={styles.judul}>Manfaat SIKEFO</Text>
            <Text style={styles.isi}>
              ▪ Mempermudah transaksi semua departemen.
            </Text>
            <Text style={styles.isi}>
              ▪ Menyimpan laporan keuangan HIMASISTIFO.
            </Text>
            <Text style={styles.isi}>
              ▪ Menghemat waktu pembayaran uang kas.
            </Text>
          </ImageBackground>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {    
    width: '100%',
    height: '100%',
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
  },

  content: {
    flexDirection:'column',
    marginTop:53,
  },

  logo:{
    width:371,
    height:222,
  },
  
  desc1:{
    marginTop:44,
  },
  
  desc2:{
    marginTop:20,
  },

  bg_desc:{
    width:379,
    height:152,
  },

  judul:{
    fontWeight:'bold',
    fontSize:13,
    textDecorationLine: 'underline',
    marginLeft:20,
    marginTop:10,
  },

  isi:{
    width:310,
    fontSize:13,
    marginLeft:20,
    marginTop:10,
  },

});