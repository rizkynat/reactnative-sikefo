import React from "react";
import { Text, TouchableOpacity } from "react-native";

const TransparantButton = ({label, onPress}) => {
    return(
        <TouchableOpacity
        style={{alignItems: 'flex-start', justifyContent: 'center'}}
        onPress={onPress}>
            <Text style={{fontSize: 16  , color: '#2B3467', fontWeight: 'bold'}}>
                {label}
            </Text>
        </TouchableOpacity>
    );
}

export default TransparantButton;