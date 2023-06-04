import { StyleSheet, Text, View, Image, TouchableOpacity, ToastAndroid, Alert } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { TextInput } from 'react-native-paper'
import { COLOR } from '../../constants/Themes'
import { checkPassNew } from'../../constants/Validate'
import { checkEmail } from'../../constants/Validate'
import AxiosInstance from '../../constants/AxiosInstance'
const Login = (props) => {
    const { navigation } = props;
    const [check, setCheck] = useState(false);
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('');
    //Login
    const onLogin = async () => {
        try {
            console.log(password,email)
            const response = await AxiosInstance().post("user/api/login",
                { email: email, password: password });
            console.log(response)
            if (response.result) {
                // await AsyncStorage.setItem("token", response.token);
                ToastAndroid.show("Login Success", ToastAndroid.SHORT);
                navigation.navigate("BottomTabs")

            } else {
                ToastAndroid.show("Login Failed !!! \n Please check your email and password", ToastAndroid.SHORT, ToastAndroid.CENTER,);
             
            }
        } catch (error) {
            ToastAndroid.show("Login Failed \n Please check your email and password", ToastAndroid.SHORT, ToastAndroid.CENTER,);
        }
    }
    const checkValidate=()=>
    {
        if(check==true)
        {
            console.log("connect");
            
        }else
        {
            Alert.alert('Error','Please check your emai and password');
        }

    }
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Chào mừng quay trở lại </Text>
            <View style={styles.logoContainer}>
                <Image style={styles.logo}
                    source={require('../../asset/image/logogenius2.png')} />
            </View>
            <View style={styles.infoContainer}>
                <Text style={styles.label}>Email</Text>

                <TextInput style={styles.input}
                    placeholder="example@gmail.com"
                    placeholderTextColor='white'
                    keyboardType='email-address'
                    returnKeyType='next'
                    autoCorrect={false}
                    value={email}
                    onChangeText={text => {
                        setEmail(text)
                        // setValidatePass2(text);
                        if (checkEmail(text) === false) {
                           setCheck(false);
                           console.log('loi email');
                        } else {
                          setCheck(true);
                          console.log("dung r r")
                        }
                    }}
                // onSubmitEditing={() => this.refs.txtPassword.focus()}
                />
                <Text style={styles.label}>Password</Text>
                <TextInput style={styles.input}
                    placeholder="***************"
                    placeholderTextColor='white'
                    returnKeyType='done'
                    secureTextEntry
                    autoCorrect={false}
                    value={password}
                    onChangeText={text => {
                        setPassword(text)
                        // setValidatePass2(text);
                        if (checkPassNew(text) === false) {
                           setCheck(false);
                           console.log('loi mat khau');
                        } else {
                          setCheck(true);
                          console.log("dung r r")
                        }
                    }}
                />
                <TouchableOpacity style={styles.createAccountButton}>
                    <Text style={styles.createAccountButtonText}>Forgot Password? </Text>
                </TouchableOpacity>
                <View style={styles.boxCenter} >
                    <TouchableOpacity onPress={() => { onLogin(),checkValidate() }} style={styles.buttonContainer}>
                        <Text style={styles.buttonText}>Login </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default Login

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
        flexDirection: 'column',
    },
    logoContainer: {
        alignItems: 'center',
    },
    logo: {
        width: 319,
        height: 271,
    },
    title: {
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 30,
        opacity: 0.9,
        color: COLOR.WHITE,

    },
    infoContainer: {
        paddingHorizontal: 20,
        justifyContent: 'flex-start',

    },
    input: {
        borderRadius: 10,
        height: 40,
        backgroundColor: COLOR.BACKGROUND6,
        color: COLOR.WHITE,
        marginBottom: 5,
        paddingHorizontal: 10,
    },
    buttonContainer: {
        backgroundColor: '#FF5C00',
        paddingVertical: 15,
        width: '50%',
        height: 49,
        marginTop: 20,
        borderRadius: 30,

    },
    buttonText: {
        height: 44,
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'white',
        fontSize: 24,
        top: -8,
    },
    createAccountButton: {
        marginBottom: 15
    },
    createAccountButtonText: {
        color: '#C9520F',
        fontSize: 17,
        textAlign: 'left',
        textDecorationLine: 'underline',
    },
    label: {
        fontSize: 16,
        color: '#FAF8F8',
        padding: 7
    },
    boxCenter: {
        justifyContent: 'center',
        alignItems: 'center'
    }
})