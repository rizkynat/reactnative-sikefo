import React, { useEffect, useState } from 'react';
import { FlatList, Text, View, StyleSheet, Image, Button } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import { AntDesign } from '@expo/vector-icons';

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

export default App = () => {
    //loading data flatlist
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
    //filter data
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);



  //fetching data
  const getDataKas = async () => {
    try {
     const response = await fetch('http://9f40-112-215-245-249.ngrok.io/api/kas');
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
    console.log(listFilter)
 }
  return (

    <View style={{ flex: 1, padding: 24 }}>
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
    
      {isLoading ? <Text>Loading...</Text> : 
      ( <View style={{ flex: 1, flexDirection: 'column', justifyContent:  'space-between'}}>
          <FlatList
            data={listFilter}
            keyExtractor={({ id_kas }, index) => id_kas}
            renderItem={({ item }) => (
              <View style={styles.data}>
                <Image  source={require('./../../assets/arrow_in.png')} style={styles.icon_in} />
                <Text style={styles.text_desc}>{item.keterangan} </Text>
                <Text style={styles.text_nom}>Rp.{item.created_at}</Text>
              </View>
            )}
          />
        </View>
      )}
    </View>
  );
};

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
        width: 12,
        height: 30,
        marginVertical:7.5

    },
    text_nom: {
        fontSize: 14,
        fontWeight: 'bold',
        alignSelf:'center'
    },
    dropdown: {
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