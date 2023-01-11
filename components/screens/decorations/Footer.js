import React from "react";
import { View, useWindowDimensions} from 'react-native';

import TransparantButton from "./TransparantButton";

const Footer = ({
    backgroundColor,
    rightButtonLabel = false,
    rightButtonPress = false
}) =>{
    const windowWith = useWindowDimensions().width;
    const HEIGHT = 43;
    const FOOTER_PADDING = windowWith*0.1;
    console.log(windowWith)
    return(
        <View
        style={{    
            flexDirection: 'row',
            justifyContent: 'flex-end',
            height: HEIGHT,
            backgroundColor,
            opacity: 1,
            alignItems: 'center',
            paddingHorizontal: FOOTER_PADDING
        }}>
            <TransparantButton label={rightButtonLabel} onPress={rightButtonPress} />
        </View>
    );
}

export default Footer;