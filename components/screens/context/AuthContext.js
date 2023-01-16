import React, {createContext} from 'react';
import { useState } from 'react';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const [isLoading, setIsLoading] = useState(false);
    const [data, setData] = useState([]);
    const [userInfo, setUserInfo] = useState({})
    const login = async (email, password) => {
        setIsLoading(true)
        
        await axios
        .post('https://4331-112-215-245-210.ngrok.io/api/login', {
            email, password
        })
        .then(res => {
            let userInfo = res.data.data;
            console.log(userInfo)
            setUserInfo(userInfo)
            AsyncStorage.setItem('userInfo', JSON.stringify(userInfo))
            setIsLoading(false)
        })
        .catch(e => {
            console.log(`login error ${e}`);
            setIsLoading(false)
        })
    }
    return (
    <AuthContext.Provider value={{isLoading, userInfo, login}}>{children}</AuthContext.Provider>
    );

}