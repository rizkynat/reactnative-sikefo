import React from "react";
import { View, StyleSheet } from "react-native";

const Circle = (props) => {
    const circle = StyleSheet.create({
        width: 10,
        height: 10,
        borderRadius: 20,
        marginHorizontal: 14,
        backgroundColor: props.color    
    });

    return (
        <View style={circle}>            
        </View>
    )
}

export default Circle;