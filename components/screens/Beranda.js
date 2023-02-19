import * as React from 'react';
import { Text, View, StyleSheet, Image, ImageBackground, TouchableOpacity, CheckBox, ScrollView, FlatList, Modal, TextInput } from 'react-native';
import { useEffect, useState } from 'react';
import Constants from 'expo-constants';


// or any pure javascript modules available in npm
import { IconButton, MD3Colors, Button, Menu, Divider, Provider } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { BASE_URL } from './Config';
import Upload from './DetailList';

export default function Beranda(props) {

  const [showModal, setShowModal] = useState(false);
  const [activeItem, setActiveItem] = React.useState(null);

  const onPress = (item) => {
    setActiveItem(item)
    setShowModal(true)
  }

  //loading data flatlist
  const [data, setData] = useState([]);
  const [summary, setSummary] = useState([]);
  const navigation = useNavigation();

  const [visible, setVisible] = React.useState(false);

  const openMenu = () => setVisible(true);

  const closeMenu = () => setVisible(false);
  console.log(visible)
  const rupiah = (bilangan) => {
    var number_string = bilangan.toString(),
      sisa = number_string.length % 3,
      rupiah = number_string.substr(0, sisa),
      ribuan = number_string.substr(sisa).match(/\d{3}/g);

    if (ribuan) {
      separator = sisa ? '.' : '';
      rupiah += separator + ribuan.join('.');
    }
    return rupiah;

  }

  const bulan = (value) => {

    if (value==1) {
      return "Januari"
    }else if(value==2){
      return "Februari"
    }else if(value==3){
      return "Maret"
    }else if(value==4){
      return "April"
    }else if(value==5){
      return "Mei"
    }else if(value==6){
      return "Juni"
    }else if(value==7){
      return "Juli"
    }else if(value==8){
      return "Agustus"
    }else if(value==9){
      return "September"
    }else if(value==10){
      return "Oktober"
    }else if(value==11){
      return "November"
    }else if(value==12){
      return "Desember"
    }

  }

  const getDataKas = async () => {
    try {
      const response = await fetch(`${BASE_URL}/api/kas`);
      const json = await response.json();
      setData(json.data);
      console.log(json.data)
    } catch (error) {
      console.error(error);
    }
  }

  const getDataSummary = async () => {
    try {
      const response = await fetch(`${BASE_URL}/api/summary`);
      const json = await response.json();
      setSummary(json.data);
      console.log(json.data)
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getDataKas();
    getDataSummary();
  }, []);
  const number = summary.map((number) => number.total);
  return (
    <Provider>
      <View style={styles.main}>
        <View style={styles.bar_atas}>
          <Text style={styles.judul}>SIKEFO</Text>
          <Image source={{ uri: props.url }} style={styles.gambar_account} />
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
              <Menu.Item onPress={() => navigation.navigate('Profile')} title="Profile" />
              <Menu.Item onPress={() => navigation.navigate('About')} title="Tentang" />
              <Menu.Item onPress={props.signOut} title="Logout" />
            </Menu>
          </View>

        </View>
        <ScrollView contentContainerStyle={styles.contentContainer}>
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
              <TouchableOpacity style={styles.btn_kas} onPress={() => navigation.navigate('MenuListKas')}>
                <ImageBackground source={require('./../../assets/kas.png')} resizeMode="cover" style={styles.bg_button}>
                  <Image source={require('./../../assets/kas-icon.png')} style={styles.icon_kas} />
                  <Text style={styles.txt_btn_kas}>
                    Kas
                  </Text>
                </ImageBackground>
              </TouchableOpacity>
            </View>
            <View style={styles.button_content}>
              <TouchableOpacity style={styles.btn_keuangan} onPress={() => navigation.navigate('MenuListKeuangan')}>
                <ImageBackground source={require('./../../assets/keuangan.png')} resizeMode="cover" style={styles.bg_button}>
                  <Image source={require('./../../assets/keuangan-icon.png')} style={styles.icon_keuangan} />
                  <Text style={styles.txt_btn_keuangan}>
                    Keuangan
                  </Text>
                </ImageBackground>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.layout_summary}>
            <Text style={styles.txt_tagihan}>Summary</Text>
            <View style={styles.tagihan_content}>
              <View style={styles.button_content_sum}>
                <TouchableOpacity style={styles.btn_}>
                  <ImageBackground source={require('./../../assets/summary.png')} resizeMode="cover" style={styles.bg_button_sum}>
                    <Text style={styles.txt_btn_summary_label}>
                      Uang Masuk
                    </Text>
                    <Image source={require('./../../assets/arrow_left.png')} style={styles.icon_summary} />
                    <Text style={styles.txt_btn_summary}>
                      Rp. {rupiah(parseInt(number[0]))}
                    </Text>
                  </ImageBackground>
                </TouchableOpacity>
              </View>
              <View style={styles.button_content}>
                <TouchableOpacity style={styles.btn_keuangan}>
                  <ImageBackground source={require('./../../assets/summary.png')} resizeMode="cover" style={styles.bg_button_sum}>
                  <Text style={styles.txt_btn_summary_label}>
                      Uang Keluar
                    </Text>
                    <Image source={require('./../../assets/arrow_right.png')} style={styles.icon_summary} />
                    <Text style={styles.txt_btn_summary}>
                      Rp. {rupiah(parseInt(number[1]))}
                    </Text>
                  </ImageBackground>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={styles.layout_riwayat}>
            <Text style={styles.txt_riwayat}>Riwayat Pembayaran</Text>
            <View style={styles.riwayat_content}>
              <ScrollView nestedScrollEnabled>
                {data.map((item, key) => (
                  <View>

                    <Modal key={"A"+key}
                      animationType={'slide'}
                      transparent={false}
                      visible={showModal}
                      onRequestClose={() => {
                        console.log('Modal has been closed.');
                      }}>
                      {/*All views of Modal*/}
                      {/*Animation can be slide, slide, none*/}
                      <View style={styles.modal}>
                          <View style={stylesDetailList.infromasi}>
                              <Text style={{
                                width: 380,
                                color: 'black',
                                fontSize: 14,
                                textAlign: 'center',
                                fontWeight: 'bold',
                              }}>Rincian Pembayaran</Text>
                              <Text style={{
                                width: 312,
                                marginTop: 27,
                                color: 'black',
                                fontSize: 13,
                                textAlign: 'left', 
                                fontWeight: 'bold',
                              }}>Nominal</Text>

                              <TextInput editable={false} value={`Rp.${rupiah(parseInt(activeItem?.nominal))}`} label="Nominal"
                                style={{
                                  width: 312,
                                  height: 42,
                                  borderRadius: 88,
                                  backgroundColor: '#E9E9E9',
                                  color: '#757171',
                                  paddingLeft: 23,
                                  marginTop: 12,
                                  fontSize: 13,
                                  fontWeight: 'light',
                                  marginBottom: 4,
                                }} />

                              <Text style={{
                                width: 312,
                                marginTop: 12,
                                color: 'black',
                                fontSize: 13,
                                textAlign: 'left',
                                fontWeight: 'bold',
                              }}>Keterangan</Text>

                              <TextInput editable={false} value={activeItem?.keterangan} label="Keterangan"
                                style={{
                                  width: 312,
                                  height: 40,
                                  borderRadius: 88,
                                  backgroundColor: '#E9E9E9',
                                  color: '#757171',
                                  paddingLeft: 23,
                                  marginTop: 12,
                                  fontSize: 13,
                                  fontWeight: 'light',
                                  marginBottom: 4,
                                }} />
                              <Text style={{
                                width: 312,
                                marginTop: 12,
                                color: 'black',
                                fontSize: 13,
                                textAlign: 'left',
                                fontWeight: 'bold',
                              }}>Bulan</Text>

                              <TextInput editable={false} value={`${bulan(activeItem?.bulan)}`} label="Bulan"
                                style={{
                                  width: 312,
                                  height: 40,
                                  borderRadius: 88,
                                  backgroundColor: '#E9E9E9',
                                  color: '#757171',
                                  paddingLeft: 23,
                                  marginTop: 12,
                                  fontSize: 13,
                                  fontWeight: 'light',
                                  marginBottom: 4,
                                }} />

                              <Text style={{
                                width: 312,
                                marginTop: 12,
                                color: 'black',
                                fontSize: 13,
                                textAlign: 'left',
                                fontWeight: 'bold',
                              }}>Bukti bayar</Text>
                              <View style={stylesDetailList.upload_content}>
                                <TouchableOpacity>
                                  <ImageBackground source={require('../../assets/border-upload.png')} resizeMode="cover" style={stylesDetailList.bg_upload}>
                                    <Image source={{uri: `${BASE_URL}/storage/kas/${activeItem?.bukti_bayar}`}} style={stylesDetailList.icon_bukti_bayar} />
                                  </ImageBackground>
                                </TouchableOpacity>
                              </View>
                              <TouchableOpacity onPress={() => { setShowModal(!showModal) }}>
                                <Text style={stylesDetailList.btn_bayar}>Tutup</Text>
                              </TouchableOpacity>
                          </View>
                      </View>
                    </Modal>

                    <TouchableOpacity key={key}  onPress={() => { onPress(item) }}>
                      <View  style={styles.data}>
                        <Image source={require('./../../assets/payment.png')} style={styles.icon_in} />
                        <Text style={styles.text_desc}>{item.keterangan} </Text>
                        <Text style={styles.text_nom}>Rp.{rupiah(item.nominal)}</Text>
                      </View>
                    </TouchableOpacity>

                  </View>

                ))}
              </ScrollView>
            </View>
          </View>
        </ScrollView>

      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  modal: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    paddingTop: 44,
  },
  text: {
    color: '#3f2949',
    marginTop: 10,
  },

  bar_atas: {
    height: 43,
    width: 404,
    flexDirection: 'row',
    marginLeft: 18,
    marginTop: 54,
  },

  judul: {
    fontWeight: 'bold',
    letterSpacing: 0.155,
    fontSize: 24
  },

  gambar_account: {
    width: 40,
    height: 40,
    marginLeft: 202,
    borderRadius: 100,
  },

  icon_more: {
    width: 24,
    height: 24,
    marginLeft: 12
  },

  layout_banner: {
    justifyContent: 'center',
  },

  banner: {
    width: 373,
    height: 190,
    marginLeft: 9,
    marginTop: 31
  },

  bg_banner: {
    width: 373,
    height: 182,
    marginTop: 20,
  },

  txt_anda: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#FFFFFF',
    marginLeft: 14,
    marginTop: 7
  },

  txt_desc1: {
    width: 239,
    textAlign: 'left',
    fontSize: 14,
    color: '#FFFFFF',
    marginLeft: 14
  },

  txt_desc2: {
    width: 239,
    textAlign: 'left',
    fontSize: 12,
    color: '#FFFFFF',
    marginLeft: 14
  },

  button: {
    marginTop: 35,
    flexDirection: 'row',
    justifyContent: 'center',

  },

  button_content: {
    flexDirection: 'column',
    paddingRight: 11,
    paddingLeft: 11,
  },

  bg_button: {
    width: 133,
    height: 98,
  },

  bg_button_sum: {
    width: 133,
    height: 138,
  },

  btn_kas: {
    title: 'Kas',
    borderRadius: 20,
  },
  button_content_sum: {
    flexDirection: 'column',
    paddingRight: 11,
    paddingLeft: 11,
  },
  btn_sum: {
    title: 'Kas',
    alignContent: 'center',
    borderRadius: 20,
  },

  txt_btn_kas: {
    marginTop: 5,
    textAlign: 'center',
    color: '#2B3467',
    fontWeight: 'bold',
  },

  icon_kas: {
    marginTop: 20,
    marginLeft: 53,
  },

  icon_summary: {
    marginTop: 5,
    alignSelf: 'center',
    width: 34,
    height: 32.64,
  },

  btn_keuangan: {
    title: 'Kas',
    borderRadius: 20,
  },

  txt_btn_keuangan: {
    marginTop: 5,
    textAlign: 'center',
    color: '#BAD7E9',
    fontWeight: 'bold',
  },

  txt_btn_summary_label: {
    marginTop: 25,
    fontSize: 12,
    textAlign: 'center',
    color: '#000000',
    fontWeight: 'bold',
  },

  txt_btn_summary: {
    marginTop: 10,
    fontSize: 12,
    textAlign: 'center',
    color: '#000000',
    fontWeight: 'bold',
  },

  icon_keuangan: {
    marginTop: 20,
    marginLeft: 50,
  },

  layout_summary: {
    marginTop: 35,
    marginLeft: 14,
  },

  txt_tagihan: {
    fontWeight: 'bold',
    fontSize: 14,
  },
tagihan_content: {
    height: 150,
    marginTop: 35,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  layout_riwayat: {
    marginBottom: 160,
    marginLeft: 14,
  },

  txt_riwayat: {
    fontWeight: 'bold',
    marginBottom: 20,
    fontSize: 14,
  },
  riwayat_content: {
    height: 210,
  }, data: {
    flexDirection: 'row',
    padding: 5,
  }, icon_in: {
    width: 45,
    height: 45,
    marginRight: 16,
  },

  text_desc: {
    fontSize: 12,
    width: 212,
    height: 30,
    marginVertical: 7.5

  },
  text_nom: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#2B3467',
    alignSelf: 'center'
  }

});

const stylesDetailList = StyleSheet.create({
  main: {
    backgroundColor: '#FFFFFF',
  },
  infromasi: {
    width: 312,
    flexDirection: 'column',
    alignItems: 'center',
  },

  upload_content: {
    flexDirection: 'column',
  },

  bg_upload: {
    width: 314,
    height: 217,
    marginTop: 12,
  },

  icon_bukti_bayar: {
    width: 100,
    height: 90,
    borderRadius: 5,
    alignSelf: 'center',
    marginTop: 68
  },

  txt_btn_upload: {
    fontSize: 14,
    textAlign: 'center',
    fontWeight: 'bold',
    marginTop: 34,
  },

  btn_bayar: {
    width: 150,
    height: 44,
    borderRadius: 40,
    fontSize: 16,
    letterSpacing: 0.15,
    color: 'white',
    backgroundColor: '#2B3467',
    textAlign: 'center',
    justifyContent: 'center',
    textAlignVertical: 'center',
    marginLeft: 30,
    marginTop: 32
  }



});


