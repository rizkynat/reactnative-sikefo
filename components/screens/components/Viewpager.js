import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import Circle from '../decorations/Circle';

const Viewpager = ( props) => {
const styles = {
    logo: {
        width: props.width,
        height: props.height,
    }
}
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: props.backgroundColor
      }}
    > 
      <Text style={{ marginTop: 72, fontSize: 28, fontWeight: 'bold', color: 'white'}}>SIKEFO</Text>
      <View style={{width: 214, height: 237, marginTop: 120, justifyContent: 'center'}}>
        <Image style={styles.logo} source={props.urlImg}/>
      </View>
      <View style={{ marginTop: 44 }}>
        <Text style={{ fontSize: 16, color: 'white', textAlign: 'center', width: 220 }}>
          {props.title}
        </Text>
      </View>
      <View style={{flex: 1, flexDirection: 'row', marginTop: 64}}>
        <Circle color={props.color_1}/>
        <Circle color={props.color_2}/>
        <Circle color={props.color_3}/>
      </View>
    </View>
  );
};



export default Viewpager;