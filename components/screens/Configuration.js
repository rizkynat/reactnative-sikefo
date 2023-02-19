import * as React from 'react';
import { Image, View, StyleSheet, TouchableOpacity, Text, ScrollView, Button, TextInput } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState } from 'react';

export default function Configuration() {
    const [user, setUser] = useState([]);
    const [BaseConfig, setBaseConfig] = useState('')

    // check if url
    function isValidURL(string) {
        var res = string.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g);
        return (res !== null)
    };


    const getUser = async () => {
        try {
            const savedUser = await AsyncStorage.getItem("userInfo");
            const currentUser = JSON.parse(savedUser);
            console.log("Ini data user ketika masuk Informasi Akun:")
            console.log(currentUser);
            global.dataUser = await currentUser
            setUser(currentUser)
        } catch (error) {
            console.log(error);
        }
    };

    const storeBaseConfig = async (value) => {
        try {
            if (isValidURL(value)) {
                await AsyncStorage.setItem("base_config", JSON.stringify(value));
                const baseConfig = await AsyncStorage.getItem("base_config");
                console.log(JSON.parse(baseConfig));
            }else{
                console.log("Harus berupa url")
            }

        } catch (error) {
            console.log(error);
        }
    };
    React.useEffect(() => {
        getUser();

    }, [])
    const data = user
    return (
        <View style={styles.main}>
            <View style={styles.container}>
                <View style={styles.profile}>
                    <Image source={{ uri: `${data.picture_url}` }} style={{
                        width: 148,
                        height: 154,
                        borderRadius: 100
                    }} />
                </View>
                <View style={styles.content}>
                    <Text style={{
                        textAlign: 'center',
                        marginTop: 23,
                        color: 'black',
                        fontWeight: 'bold',
                        fontSize: 20,
                    }}>{data.nama_lengkap}</Text>
                    <View style={styles.email}>
                        <Image source={require('../../assets/gmailProfile.png')} style={{
                            marginTop: 12,
                            marginRight: 5,
                            width: 16,
                            height: 16,
                        }} />
                        <Text style={{
                            textAlign: 'center',
                            marginTop: 10,
                            color: 'black',
                            fontSize: 12,
                            paddingBottom: 22,
                        }}>{data.email}</Text>
                    </View>
                </View>
            </View>
            <View style={styles.informasi}>
                <Text style={{
                    width: 340,
                    marginTop: 14,
                    color: '#999999',
                    fontSize: 13,
                    letterSpacing: 0.76,
                    textAlign: 'left',
                }}>Infromasi Akun</Text>

                <Text style={{
                    width: 340,
                    marginTop: 14,
                    color: 'black',
                    fontSize: 13,
                    textAlign: 'left',
                    fontWeight: 'bold',
                }}>URL Backend</Text>

                <TextInput label="base_config"
                    style={{
                        width: 340,
                        height: 40,
                        borderRadius: 88,
                        backgroundColor: '#E9E9E9',
                        color: '#757171',
                        paddingLeft: 23,
                        marginTop: 12,
                        fontSize: 13,
                        fontWeight: 'light',
                        marginBottom: 4,
                    }}
                    onChangeText={(BaseConfig) => setBaseConfig(BaseConfig)} />
                <TouchableOpacity onPress={() => { storeBaseConfig(BaseConfig) }}>
                    <Text style={styles.btn_simpan}>Simpan</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    main: {
        width: '100%',
        height: '100%',
        backgroundColor: '#FFFFFF',
    },

    container: {
        alignItems: 'center',
    },

    content: {
        width: 428,
        flexDirection: 'column',
        borderBottomColor: '#D1D1D6',
        borderBottomWidth: StyleSheet.hairlineWidth
    },

    profile: {
        marginTop: 57,
        alignItems: 'center',
    },

    email: {
        alignSelf: 'center',
        flexDirection: 'row',
    },

    informasi: {
        width: 340,
        alignSelf: 'center',
        flexDirection: 'column',
        alignItems: 'center',
    },

    btn_simpan: {
        width: 150,
        height: 44,
        borderRadius: 40,
        fontSize: 16,
        letterSpacing: 0.15,
        color: 'white',
        backgroundColor: '#2B3467',
        textAlign: 'center',
        justifyContent: 'center',
        textAlignVertical: 'center',
        marginLeft: 30,
        marginTop: 32
    }


});


