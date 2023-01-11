import React from "react";
import { Text, TouchableOpacity, StyleSheet, View, Image } from "react-native";

const RoundedButtonLogo = ({label, onPress}) => {
    return(
        <View
        style={{marginTop: 30, alignItems: 'center'}}>
            <TouchableOpacity
            style={styles.buttonContainer}
            onPress={onPress}>
                <Image
                source={require('../../../assets/google.png')}
                style={styles.ImageIconStyle}
                />
                <Text style={styles.ButtonText}>
                    {label}
                </Text>
            </TouchableOpacity>
        </View>
        
    );
}

export default RoundedButtonLogo;

const styles = StyleSheet.create({
    buttonContainer: {
        backgroundColor: "#F0F0F0",
        borderRadius: 40,
        paddingVertical: 12,
        width: 300,
        flexDirection: 'row',
        justifyContent: 'center'
    },
    ButtonText: {
      fontSize: 15,
      color: "#2B3467",
      fontWeight: "bold",
      alignSelf: "center",
    },
    ImageIconStyle: {
        width: 25,
        height: 25,
        marginRight: 7,
        resizeMode: 'stretch',
    }
  });