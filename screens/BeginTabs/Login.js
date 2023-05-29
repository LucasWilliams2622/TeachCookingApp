import { StyleSheet, Text, View, Image, TouchableOpacity, ToastAndroid } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { TextInput } from 'react-native-paper'
import { COLOR } from '../../constants/Themes'
import AxiosInstance from '../../constants/AxiosIntance'
const Login = (props) => {
    const { navigation } = props;
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
                        // if (isValidEmpty(text) == false) {
                        //   setErrorPass2('Please fill it out completely');
                        // } else {
                        //   setErrorPass2('');
                        // }
                    }}
                />
                <TouchableOpacity style={styles.createAccountButton}>
                    <Text style={styles.createAccountButtonText}>Forgot Password? </Text>
                </TouchableOpacity>
                <View style={styles.boxCenter} >
                    <TouchableOpacity onPress={() => { onLogin() }} style={styles.buttonContainer}>
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