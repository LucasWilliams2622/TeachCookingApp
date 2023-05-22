import React, { Component } from 'react'
import {
    StyleSheet, Text, View, Image,
    TouchableWithoutFeedback, StatusBar,
    TextInput, SafeAreaView, Keyboard, TouchableOpacity,
    KeyboardAvoidingView,
    Pressable
} from 'react-native'
export default class Login extends Component {
    render() {
        return (
            <SafeAreaView style={styles.container}>
                <StatusBar barStyle="light-content" />
                <KeyboardAvoidingView behavior='padding' style={styles.container}>
                    <TouchableWithoutFeedback style={styles.container} onPress={Keyboard.dismiss}>
                        <View style={styles.logoContainer}>
                            <View style={styles.logoContainer}>
                                <View>
                                    <Text style={styles.title}>Chào mừng quay trở lại </Text>
                                </View>
                                <Image style={styles.logo} source={require('../../asset/image/logogenius2.png')} />

                            </View>
                            <TouchableOpacity
                                style={[styles.button, { backgroundColor: '#4A4A4A' }]}>
                                <Image
                                    style={styles.tinyLogo} source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/2008px-Google_%22G%22_Logo.svg.png', }}
                                />
                                <Text style={styles.buttonText}>Đăng nhập bằng Google </Text>
                            </TouchableOpacity>                        
                        </View>
                    </TouchableWithoutFeedback>
                    <TouchableOpacity style={styles.createAccountButton}>
                        <Text style={styles.createAccountButtonText}>Đăng nhập bằng gmail </Text>
                    </TouchableOpacity>
                    <View>
                        <Text style={{ textAlign: 'center', top: 190, color: 'white', width: 319, fontSize: 15, left: 40 }}>
                          Khi đăng ký, tức là bạn đã đồng ý với <Text style={{ color: '#00BEFA',textDecorationLine: 'underline' }}>Điều khoản dịch vụ</Text> và <Text style={{ color: '#00BEFA',textDecorationLine: 'underline' }}>Chính sách bảo mật</Text> của Genius Cooking</Text>
                    </View>
                </KeyboardAvoidingView>
            </SafeAreaView>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
        flexDirection: 'column',
        justifyContent: 'center',
    },
    logoContainer: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo: {
        marginTop: -100,
        width: 319,
        height: 271,
    },
    title: {
        color: 'white',
        marginBottom: 10,
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: -180,
        opacity: 0.9
    },
    infoContainer: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        height: 300,
        padding: 20,

    },
    input: {
        borderRadius: 10,
        height: 40,
        backgroundColor: '#666666',
        color: '#FFF',
        marginBottom: 20,
        paddingHorizontal: 10
    },
    buttonContainer: {
        backgroundColor: '#666666',
        paddingVertical: 15,
        width: 290,
        height: 49,
        marginLeft: 50,
        borderRadius: 10
    },
    buttonText: {
        height: 30,
        textAlign: 'center',
        color: 'white',
        left: 50,
        bottom: 5,
        fontSize: 18
    },
    button: {
        borderColor: '#F96900',
        borderWidth: 1,
        padding: 12,
        marginBottom: 12,
        flexDirection: 'row',
        borderRadius: 40,
        width: 350,
        height: 42
    },
    tinyLogo: {
        width: 22,
        height: 22,
        bottom: 4
    },
    createAccountButton: {
        marginTop: 20,
    },
    createAccountButtonText: {
        color: '#C9520F',
        fontSize: 17,
        textAlign: 'center',
        textDecorationLine: 'underline'
    },
})