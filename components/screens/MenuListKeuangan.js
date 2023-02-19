import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, Image, ImageBackground, TouchableOpacity, CheckBox, FlatList } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import { IconButton, MD3Colors, Button, Menu, Divider, Provider, ActivityIndicator } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';
const bulan = [
    { label: 'Semua', value: 'Semua' },
    { label: 'Uang Masuk', value: 'Uang Masuk' },
    { label: 'Uang Keluar', value: 'Uang Keluar' },
  ];

export default function MenuListKeuangan(props) {

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
  
    const getDataKeuangan = async () => {
       try {
        const BaseConfig = JSON.parse(await AsyncStorage.getItem("base_config"))
        const response = await fetch(`${BaseConfig}/api/keuangan`);
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
      getDataKeuangan();
    }, []);

    let listFilter = null
    if(value == 'Semua' || value == null){
       listFilter = data
    }else{
       listFilter = data.filter(a => a.status === value)
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
          placeholder={!isFocus ? 'Pilih Status' : '...'}
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
            renderItem={({ item }) => {
              if(item.status == 'Uang Masuk'){  
                return(            
                  <View style={styles.data}>
                  <Image  source={require('./../../assets/arrow_left.png')} style={styles.icon_in} />
                  <Text style={styles.text_desc}>{item.deskripsi} </Text>
                  <Text style={styles.text_nom_masuk}>Rp.{rupiah(item.nominal_keuangan)}</Text>
                  </View>

                )
              }if (item.status == 'Uang Keluar') { 
                return(            
                  <View style={styles.data}>
                  <Image  source={require('./../../assets/arrow_right.png')} style={styles.icon_in} />
                  <Text style={styles.text_desc}>{item.deskripsi} </Text>
                  <Text style={styles.text_nom_keluar}>Rp.{rupiah(item.nominal_keuangan)}</Text>
                  </View>
                )
                
              } else {
                
              }
            }}
          />
          </View>
        )}
      </View>
    );


}

const icon = {
    arrowIconIn: require('./../../assets/arrow_in.png'),
    arrowIconOut: require('./../../assets/arrow_out.png'),
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

    },text_nom_masuk: {
      fontSize: 14,
      fontWeight: 'bold',
      color:'#20C997',
      alignSelf:'center'
  },
    text_nom_keluar: {
        fontSize: 14,
        fontWeight: 'bold',
        color:'#FF0032',
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