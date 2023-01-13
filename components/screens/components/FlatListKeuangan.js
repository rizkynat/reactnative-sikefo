import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, Image, ImageBackground, TouchableOpacity, CheckBox, FlatList } from 'react-native';

export default function FlatListKeuangan(listFilter, id_kas, ){

    return(
        <View>
            <FlatList
            data={listFilter}
            keyExtractor={({ id_kas }, index) => id_kas}
            renderItem={({ item }) => (
              <View style={styles.data}>
                <Image  source={require('./../../assets/arrow_in.png')} style={styles.icon_in} />
                <Text style={styles.text_desc}>{item.deskripsi} </Text>
                <Text style={styles.text_nom}>Rp.{rupiah(item.nominal_keuangan)}</Text>
              </View>
            )}
          />
          </View>
    );
}

const styles = StyleSheet.create({

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
        alignSelf:'center'
    }
});