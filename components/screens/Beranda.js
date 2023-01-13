import * as React from 'react';
import { Text, View, StyleSheet, Image, ImageBackground, TouchableOpacity, CheckBox } from 'react-native';
import Constants from 'expo-constants';


// or any pure javascript modules available in npm
import { IconButton, MD3Colors, Button, Menu, Divider, Provider } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

export default function Beranda(props) {
  const navigation = useNavigation();

  const [visible, setVisible] = React.useState(false);

  const openMenu = () => setVisible(true);

  const closeMenu = () => setVisible(false);
console.log(visible)
  return (
    <Provider>
    <View style={styles.main}>
     <View style={styles.bar_atas}>
      <Text style={styles.judul}>SIKEFO</Text>
      <Image source={{uri: props.url}} style={styles.gambar_account} />
      <View>
        <Menu
          visible={visible}
          onDismiss={closeMenu}
          anchor={<IconButton
            style={styles.icon_more}
            icon={require('./../../assets/more-icon.png')}
            iconColor={MD3Colors.primary0}
            size={20}
            onPress={openMenu}
          />}>
          <Menu.Item onPress={() => navigation.navigate('Profile', {user: props.user})} title="Profile" />
          <Menu.Item onPress={() => navigation.navigate('About')} title="Tentang" />
          <Menu.Item onPress={props.signOut} title="Logout" />
        </Menu>
      </View>
      
     </View>
     <View style={styles.layout_banner}>
      <View style={styles.banner}>
        <ImageBackground source={require('./../../assets/bg-banner.png')} resizeMode="cover" style={styles.bg_banner}>
          <Text style={styles.txt_anda}>Anda</Text>
          <Text style={styles.txt_desc1}>tidak akan bisa lari </Text>
          <Text style={styles.txt_desc2}>dari tanggung jawab pada hari esok dengan menghindarinya pada hari ini !!</Text>
        </ImageBackground>
      </View>
     </View>
     <View style={styles.button}>
      <View style={styles.button_content}>
        <TouchableOpacity style = {styles.btn_kas} onPress={() => navigation.navigate('MenuListKas')}>
              <ImageBackground source={require('./../../assets/kas.png')} resizeMode="cover" style={styles.bg_button}>
                <Image source={require('./../../assets/kas-icon.png')} style = {styles.icon_kas}/>
                <Text style = {styles.txt_btn_kas}>
                  Kas
                </Text>
              </ImageBackground>
        </TouchableOpacity>
      </View>
      <View style={styles.button_content}>
        <TouchableOpacity style = {styles.btn_keuangan} onPress={() => navigation.navigate('MenuListKeuangan')}>
            <ImageBackground source={require('./../../assets/keuangan.png')} resizeMode="cover" style={styles.bg_button}>
              <Image source={require('./../../assets/keuangan-icon.png')} style = {styles.icon_keuangan}/>
              <Text style = {styles.txt_btn_keuangan}>
                Keuangan
              </Text>
            </ImageBackground>
        </TouchableOpacity>
      </View>
     </View>
     <View style={styles.layout_tagihan}>
      <Text style = {styles.txt_tagihan}>Tagihan Kas</Text>
      <View style={styles.tagihan_content}>

      </View>
     </View>
     <View style={styles.layout_riwayat}>
      <Text style = {styles.txt_riwayat}>Riwayat Pembayaran</Text>
      <View style={styles.riwayat_content}>
          
      </View>
     </View>
    </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  main: {
    backgroundColor: '#FFFFFF',
    
  },
  
  bar_atas: {
    height:43,
    width:404,
    flexDirection:'row',
    marginLeft:18,
    marginTop:54,
  },

  judul:{
    fontWeight:'bold',
    letterSpacing:0.155,
    fontSize:24
  },

  gambar_account:{
    width:40,
    height:40,
    marginLeft:202,
    borderRadius:100,
  },

  icon_more:{
    width:24,
    height:24,
    marginLeft:12
  },

  layout_banner:{
    justifyContent:'center',
  },

  banner:{
    width:373,
    height:176,
    marginLeft:9,
    marginTop:31
  },

  bg_banner:{
    width:373,
    height:176
  },

  txt_anda:{
    fontWeight:'bold',
    fontSize:20,
    color:'#FFFFFF',
    marginLeft:14,
    marginTop:7
  },

  txt_desc1:{
    width:239,
    textAlign:'left',
    fontSize:14,
    color:'#FFFFFF',
    marginLeft:14
  },

  txt_desc2:{
    width:239,
    textAlign:'left',
    fontSize:12,
    color:'#FFFFFF',
    marginLeft:14
  },

  button:{
    marginTop:35,
    flexDirection:'row',
    justifyContent:'center',

  },

  button_content:{
    flexDirection:'column',
    paddingRight:11,
    paddingLeft:11,
  },

  bg_button:{
    width:133,
    height:98,
  },

  btn_kas:{
    title: 'Kas',
    borderRadius:20,
  },

  txt_btn_kas:{
    marginTop:5,
    textAlign:'center',
    color:'#2B3467',
    fontWeight:'bold',
  },

  icon_kas:{
    marginTop:20,
    marginLeft:53,
  },
  
  btn_keuangan:{
    title: 'Kas',
    borderRadius:20,
  },

  txt_btn_keuangan:{
    marginTop:5,
    textAlign:'center',
    color:'#BAD7E9',
    fontWeight:'bold',
  },

  icon_keuangan:{
    marginTop:20,
    marginLeft:50,
  },

  layout_tagihan:{
    marginTop:35,
    marginLeft:14,
  },

  txt_tagihan:{
    fontWeight:'bold',
    fontSize:14,
  },
  tagihan_content:{
    height:210,
  },  
  layout_riwayat:{
    marginTop:35,
    marginLeft:14,
  },

  txt_riwayat:{
    fontWeight:'bold',
    fontSize:14,
  },
  riwayat_content:{
    height:210,
  },  

});