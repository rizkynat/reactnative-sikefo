import React from "react";
import { Text, TouchableOpacity, StyleSheet, View } from "react-native";

const RoundedButton = ({label, onPress}) => {
    return(
        <View
        style={{marginTop: 70, alignItems: 'center'}}>
            <TouchableOpacity
            style={styles.buttonContainer}
            onPress={onPress}>
                <Text style={styles.ButtonText}>
                    {label}
                </Text>
            </TouchableOpacity>
        </View>
        
    );
}

export default RoundedButton;

const styles = StyleSheet.create({
    buttonContainer: {
        backgroundColor: "#2B3467",
        borderRadius: 40,
        paddingVertical: 12,
        width: 300
    },
    ButtonText: {
      fontSize: 15,
      color: "#fff",
      fontWeight: "bold",
      alignSelf: "center",
    }
  });