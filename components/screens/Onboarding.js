import React, {useRef} from 'react';
import { View } from 'react-native';
import {useFonts} from 'expo-font';
import { useNavigation } from '@react-navigation/native';

import ViewPager from '@react-native-community/viewpager';
import Viewpager from './components/Viewpager';
import Footer from './decorations/Footer';

const Onboarding = () => {
  const navigation = useNavigation();
  const pagerRef = useRef(null);

  const handlePageChange = pageNumber => {
    pagerRef.current.setPage(pageNumber);
  };
  
  return (
    <View style={{ flex: 1 }}>
      <ViewPager style={{ flex: 1 }} initialPage={0} ref={pagerRef}>
        <View key="1">          
          <Viewpager
            backgroundColor="#2B3467"
            urlImg={slides.viewpager_1}
            width={size.width_1}
            height={size.height_1}
            title="Transparasi Kas HIMA dengan SIKEFO"
            color_1="#009EFF"
            color_2="white"
            color_3="white"
          />
          <Footer 
            backgroundColor="white"
            rightButtonLabel="Selanjutnya"
            rightButtonPress={() => 
            handlePageChange(1)}/>
        </View>
        <View key="2">
            <Viewpager
                backgroundColor="#2B3467"
                urlImg={slides.viewpager_2}
                width={size.width_2}
                height={size.height_2}
                title="Cek Secara Berkala Kas HIMA dengan SIKEFO"
                color_1="white"
                color_2="#009EFF"
                color_3="white"
            />
          <Footer 
            backgroundColor="white"
            rightButtonLabel="Selanjutnya"
            rightButtonPress={() => 
            handlePageChange(2)}/>
        </View>
        <View key="3">
            <Viewpager
                backgroundColor="#2B3467"
                urlImg={slides.viewpager_3}
                width={size.width_3}
                height={size.height_3}
                title="Cek Secara Berkala Kas HIMA dengan SIKEFO"
                color_1="white"
                color_2="white"
                color_3="#009EFF"
            />
          <Footer 
            backgroundColor="white"
            rightButtonLabel="Selanjutnya"
            rightButtonPress={() => 
              navigation.navigate('Login')
            }/>
        </View>
      </ViewPager>
    </View>
  );
};

const size = {
    width_1: 214,
    height_1: 237,
    width_2: 270,
    height_2: 149,
    width_3: 256,
    height_3: 231, 
}

const slides = {
    viewpager_1: require('./../../assets/viewpager_1.png'),
    viewpager_2: require('./../../assets/viewpager_2.png'),
    viewpager_3: require('./../../assets/viewpager_3.png')
}
export default Onboarding;