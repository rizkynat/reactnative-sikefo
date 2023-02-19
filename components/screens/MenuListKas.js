import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, Image, ImageBackground, TouchableOpacity, CheckBox, FlatList } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import { IconButton, MD3Colors, Button, Menu, Divider, Provider, ActivityIndicator } from 'react-native-paper';
import { BASE_URL } from './Config';

const bulan = [
    { label: 'Semua', value: 0 },
    { label: 'Januari', value: 1 },
    { label: 'Februari', value: 2 },
    { label: 'Maret', value: 3 },
    { label: 'April', value: 4 },
    { label: 'Mei', value: 5 },
    { label: 'Juni', value: 6 },
    { label: 'Juli', value: 7 },
    { label: 'Agustus', value: 8 },
    { label: 'September', value: 9 },
    { label: 'Oktober', value: 10 },
    { label: 'November', value: 11 },
    { label: 'Desember', value: 12 },
  ];

export default function MenuListKas(props) {

    //loading data flatlist
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    //filter data
    const [value, setValue] = useState(null);
    const [isFocus, setIsFocus] = useState(false);

    const rupiah = (bilangan)=>{
        var	number_string = bilangan.toString(),
        sisa 	= number_string.length % 3,
        rupiah 	= number_string.substr(0, sisa),
        ribuan 	= number_string.substr(sisa).match(/\d{3}/g);
            
        if (ribuan) {
            separator = sisa ? '.' : '';
            rupiah += separator + ribuan.join('.');
        }
        return rupiah;

        }
  
    const getDataKas = async () => {
       try {
        const response = await fetch(`${BASE_URL}/api/kas`);
        const json = await response.json();
        setData(json.data);
        console.log(json.data)
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }
  
    useEffect(() => {
      getDataKas();
    }, []);

    let listFilter = null
    if(value == 0 || value == null){
       listFilter = data
    }else{
       listFilter = data.filter(a => a.bulan === value)
    }

    return (
      <View style={styles.main}>
        <Dropdown
          style={[styles.dropdown, isFocus && { borderColor: '#2B3467' }]}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          containerStyle={styles.itemContainer}
          iconStyle={styles.iconStyle}
          data={bulan}
          search
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder={!isFocus ? 'Pilih Bulan' : '...'}
          searchPlaceholder="Search..."
          value={value}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={item => {
            setValue(item.value);
            console.log(typeof(item.value))
            console.log(listFilter)
            setIsFocus(false);
          }}
        />

        {isLoading ? <ActivityIndicator/> : (          
          <View>
            <FlatList
            data={listFilter}
            keyExtractor={({ id_kas }, index) => id_kas}
            renderItem={({ item }) => (
              <View style={styles.data}>
                <Image  source={require('./../../assets/payment.png')} style={styles.icon_in} />
                <Text style={styles.text_desc}>{item.keterangan} </Text>
                <Text style={styles.text_nom}>Rp.{rupiah(item.nominal)}</Text>
              </View>
            )}
          />
          </View>
        )}
      </View>
    );


}

const styles = StyleSheet.create({
    main: {
      backgroundColor: '#FFFFFF',
      flex: 1,
      padding: 16,
    },

    data: {
        flexDirection:'row' ,
        padding: 5,
    },

    icon_in: {
        width:45,
        height:45,
        marginRight:16,
    },

    text_desc: {
        fontSize:12,
        width: 212,
        height: 30,
        marginVertical:7.5

    },
    text_nom: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#2B3467',
        alignSelf:'center'
    },dropdown: {
        height: 50,
        borderColor: 'gray',
        borderWidth: 0.5,
        borderRadius: 8,
        paddingHorizontal: 8,
        marginBottom: 12,
      },
      icon: {
        marginRight: 5,
      },
      placeholderStyle: {
        fontSize: 16,
      },
      selectedTextStyle: {
        fontSize:16,
      },
      iconStyle: {
        width: 20,
        height: 20,
      },
      inputSearchStyle: {
        height: 40,
        fontSize: 16,
      },
      itemContainer: {
          marginTop: -30,
        },

})