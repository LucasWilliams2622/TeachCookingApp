import React, { useEffect ,useContext} from 'react'
import {
    StyleSheet, Text, View, Image,
    TouchableWithoutFeedback, StatusBar,
    TextInput, SafeAreaView, Keyboard, TouchableOpacity,
    KeyboardAvoidingView,ToastAndroid
} from 'react-native'
import {
    GoogleSignin,
    GoogleSigninButton,
    statusCodes,
} from '@react-native-google-signin/google-signin';
import AxiosInstance from '../../constants/AxiosInstance';
import { AppContext } from '../../utils/AppContext';

GoogleSignin.configure({
    scopes: ['https://www.googleapis.com/auth/drive.readonly'], // what API you want to access on behalf of the user, default is email and profile
    webClientId: '<FROM DEVELOPER CONSOLE>', // client ID of type WEB for your server (needed to verify user ID and offline access)
    offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
    hostedDomain: '', // specifies a hosted domain restriction
    forceCodeForRefreshToken: true, // [Android] related to `serverAuthCode`, read the docs link below *.
    accountName: '', // [Android] specifies an account name on the device that should be used
    iosClientId: '<FROM DEVELOPER CONSOLE>', // [iOS] if you want to specify the client ID of type iOS (otherwise, it is taken from GoogleService-Info.plist)
    googleServicePlistPath: '', // [iOS] if you renamed your GoogleService-Info file, new name here, e.g. GoogleService-Info-Staging
    openIdRealm: '', // [iOS] The OpenID2 realm of the home web server. This allows Google to include the user's OpenID Identifier in the OpenID Connect ID token.
    profileImageSize: 120, // [iOS] The desired height (and width) of the profile image. Defaults to 120px
});

export default LoginGoogleLogin = (props) => {
    const {isLogin, setIsLogin, setInfoUser } = useContext(AppContext);

    const { navigation } = props;
    const goLogin = () => {
        navigation.navigate('Login')
    }
    useEffect(() => {
        GoogleSignin.configure();
    }, [])
    const signOut = async () => {
        try {
            await GoogleSignin.signOut();
            console.log("Logout");
            //setState({ user: null }); // Remember to remove the user from your app's state as well
        } catch (error) {
            console.error(error);
        }
    };

    const signInGoogle = async () => {
        try {
          await GoogleSignin.hasPlayServices();
          const userInfo = await GoogleSignin.signIn();
    
          const email = userInfo.user.email;
          const name = userInfo.user.name;
          const avatar = userInfo.user.photo;
          console.log('Id: ', userInfo.user.id);
          console.log('Email: ', userInfo.user.email);
          console.log('Name: ', userInfo.user.name);
          console.log('FamilyName: ', userInfo.user.familyName);
          console.log('GivenName: ', userInfo.user.givenName);
          console.log('Photo: ', userInfo.user.photo);
          try {
            const response = await AxiosInstance().post("user/api/loginGoogle",
              { email: email, name: name, avatar: avatar });
            if (response.result) {
              console.log("SIGN UP & SIGN IN GOOGLE SUCCESS!");
              setIsLogin(true)
              setInfoUser(userInfo)
            //   navigation.navigate("BottomTabs")
            } else {
              console.log("SIGN UP & SIGN IN GOOGLE FAILED!");
            }
          } catch (error) {
            console.log(error);
          }
        } catch (error) {
          if (error.code === statusCodes.SIGN_IN_CANCELLED) {
            // user cancelled the login flow
          } else if (error.code === statusCodes.IN_PROGRESS) {
            // operation (e.g. sign in) is in progress already
          } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
            // play services not available or outdated
          } else {
            // some other error happened
          }
        }
      };


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
                            onPress={() => { signInGoogle() }}
                            style={[styles.button, { backgroundColor: '#4A4A4A' }]}>
                            <Image
                                style={styles.tinyLogo} source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/2008px-Google_%22G%22_Logo.svg.png', }}
                            />
                            <Text style={styles.buttonText}>Đăng nhập bằng Google </Text>
                        </TouchableOpacity>
                    </View>
                </TouchableWithoutFeedback>
                <TouchableOpacity style={styles.createAccountButton} onPress={goLogin}>
                    <Text style={styles.createAccountButtonText}>Đăng nhập bằng gmail </Text>
                </TouchableOpacity>
                <View>
                    <Text style={{ textAlign: 'center', top: 190, color: 'white', width: 319, fontSize: 15, left: 40 }}>
                        Khi đăng ký, tức là bạn đã đồng ý với <Text style={{ color: '#00BEFA', textDecorationLine: 'underline' }}>Điều khoản dịch vụ</Text> và <Text style={{ color: '#00BEFA', textDecorationLine: 'underline' }}>Chính sách bảo mật</Text> của Genius Cooking</Text>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
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
        marginLeft:50,
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
        height: 42,
      
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
        textDecorationLine: 'underline',
        
    },
})