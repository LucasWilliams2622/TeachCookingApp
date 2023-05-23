import { SafeAreaView, StyleSheet, Text, View, TouchableOpacity,Dimensions, Image } from 'react-native'
import React from 'react'
import { TextInput } from 'react-native-paper'
import { COLOR, ICON } from '../../constants/Themes'
const windowWIdth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const Search = () => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity >
                    <Image source={ICON.Search} style={styles.imageSearch}></Image>
                </TouchableOpacity>
                <TextInput 
                placeholder='Gõ vào tên món ăn ...' 
                placeholderTextColor={COLOR.WHITE}
                style={styles.input}></TextInput>
            </View>
        </SafeAreaView>
    )
}

export default Search

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLOR.BACKGROUND
    },
    header: {   
        flexDirection: 'row',
        height:'10%',
        backgroundColor: COLOR.BACKGROUND3,
        justifyContent:'flex-start',
        alignItems:'center',

    },
    input: {
        tintColor: COLOR.WHITE,
        placeholderTextColor: COLOR.WHITE,
        backgroundColor: COLOR.BACKGROUND3,
        height: 30,
        width: '80%',
        borderRadius: 6,
        color: COLOR.WHITE,
        marginTop: 10,
        paddingLeft: 10
    },
    imageSearch: {
        tintColor: COLOR.WHITE,
        // borderWidth: 2, borderColor: COLOR.WHITE,
        marginTop: 1,
        marginLeft: 10,
        marginTop: 10,
        height: 30,
        width: 30,
    },

})