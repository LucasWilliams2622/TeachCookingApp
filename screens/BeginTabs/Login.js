import React, { Component } from 'react'
import {
    StyleSheet, Text, View, Image,
    TouchableWithoutFeedback, StatusBar,
    TextInput, SafeAreaView, Keyboard, TouchableOpacity,
    KeyboardAvoidingView, Button, Platform
} from 'react-native'

export default class Login extends Component {
    render() {
        return (

            <SafeAreaView style={styles.container}>
                <StatusBar barStyle="light-content" />
                <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                    style={styles.container}>
                    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                        <View style={styles.logoContainer}>
                            <View style={styles.logoContainer}>
                                <View>
                                    <Text style={styles.title}>Chào mừng quay trở lại </Text>
                                </View>
                                <Image style={styles.logo} source={require
                                  ('../../asset/image/logogenius2.png')} />
                            </View>
                            <View style={styles.infoContainer}>
                                <Text style={styles.label}>Email</Text>

                                <TextInput style={styles.input}
                                    placeholder="Email address"
                                    placeholderTextColor='white'
                                    keyboardType='email-address'
                                    returnKeyType='next'
                                    autoCorrect={false}
                                    onSubmitEditing={() => this.refs.txtPassword.focus()}
                                />
                                <Text style={styles.label}>Password</Text>
                                <TextInput style={styles.input}
                                    placeholder="Password"
                                    placeholderTextColor='white'
                                    returnKeyType='go'
                                    secureTextEntry
                                    autoCorrect={false}
                                    ref={"txtPassword"}
                                />
                                <TouchableOpacity style={styles.createAccountButton}>
                                    <Text style={styles.createAccountButtonText}>Forgot Password? </Text>
                                </TouchableOpacity>

                                <TouchableOpacity style={styles.buttonContainer}>
                                    <Text style={styles.buttonText}>Login </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </TouchableWithoutFeedback>
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
    },
    logoContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    },
    logo: {
        bottom: 180,
        width: 319,
        height: 271,
    },
    title: {
        color: 'white',
        marginBottom: 10,
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: -200,
        opacity: 0.9,

    },
    infoContainer: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 180,
        padding: 20,

    },
    input: {
        borderRadius: 10,
        height: 40,
        backgroundColor: '#666666',
        color: '#FFF',
        marginBottom: 5,
        paddingHorizontal: 10,
    },
    buttonContainer: {
        backgroundColor: '#FF5C00',
        paddingVertical: 15,
        width: 190,
        height: 49,
        marginLeft: 100,
        marginTop: 30,
        borderRadius: 30
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
})