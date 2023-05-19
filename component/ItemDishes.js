import { StyleSheet, Text, TouchableOpacity, View, Dimensions, Image, ImageBackground } from 'react-native'
import React from 'react'
import { ICON, COLOR } from '../constants/Themes'
import { SafeAreaView } from 'react-native-safe-area-context'
import ItemUser from '../component/ItemUser'
const windowWIdth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const ItemCategories = (props) => {
    // const { category } = props
    // const { name, image, backGround } = category
    // const { onPress } = props
    return (
        <View style={styles.boxItem}>
            <ImageBackground style={styles.image} resizeMode='cover' source={require('../asset/image/food1.jpg')} >

            </ImageBackground>
            <View style={styles.infoUser}>
                <ItemUser />

            </View>
            <View style={styles.bottomItem}>
                <View style={{ flexDirection: 'row' }}>
                    <TouchableOpacity style={styles.boxEmotion}>
                        <Image style={styles.icon} source={require('../asset/icon/icon_heart.png')} />
                        <Text style={styles.textEmotion}>1</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.boxEmotion, { marginLeft: 9, }]}>
                        <Image style={[styles.icon, { tintColor: COLOR.WHITE }]} source={require('../asset/icon/icon_share.png')} />
                        <Text style={styles.textEmotion}>1</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={styles.boxEmotion}>
                    <Image style={[styles.icon, { tintColor: COLOR.WHITE }]} source={require('../asset/icon/icon_save.png')} />
                    <Text style={styles.textEmotion}>Lưu</Text>
                </TouchableOpacity>
            </View>
        </View>




    )
}

export default ItemCategories

const styles = StyleSheet.create({
    boxItem: {
        marginHorizontal: 10,
        width: windowWIdth - 70,


        borderRadius: 10,
        borderWidth: 1,
        borderColor: COLOR.WHITE,
        backgroundColor: COLOR.BACKGROUND2

    },
    image: {
        height: 200,
        width: windowWIdth - 74,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        flex: 1,

    },
    infoUser: {
        marginTop: 100,

    },
    nameUser: {
        fontWeight: 'bold',
        fontSize: 20,
        color: COLOR.WHITE,
    },
    bottomItem: {
        flexDirection: 'row',
        height: 50,
        marginTop: 20,
        // borderWidth: 2,
        // borderColor: 'red',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        marginHorizontal: 10
    },
    icon: {
        width: 20,
        height: 25,

    },
    boxEmotion: {

        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLOR.BACKGROUND3,
        padding: 10,
        borderRadius: 20,
        height: 35,
    },
    textEmotion: {
        fontSize: 14,
        marginLeft: 7,
        color: COLOR.WHITE
    }
})