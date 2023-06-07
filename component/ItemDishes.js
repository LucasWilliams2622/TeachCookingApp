import { StyleSheet, Text, TouchableOpacity, View, Dimensions, Image, ImageBackground } from 'react-native'
import React, { useState, useEffect } from 'react'
import { ICON, COLOR } from '../constants/Themes'
import { SafeAreaView } from 'react-native-safe-area-context'
import ItemUser from '../component/ItemUser'
const windowWIdth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
import AxiosInstance from '../constants/AxiosInstance'

const ItemCategories = (props) => {
    const { recipe, navigation } = props;
    const { onPress } = props
    const [isSaved, setIsSaved] = useState(false)

    const addToFavorite = async (idUser,idRecipe) => {
        try {
            const response = await AxiosInstance().post("favorite/api/new-to-favorite", { idUser:idUser, idRecipe: idRecipe });
            // console.log(response.recipe)
            if (response.result) {
                // console.log(response.result);
                ToastAndroid.show("Đã thêm vào món đã lưu  !!! ", ToastAndroid.SHORT, ToastAndroid.CENTER,);

                // console.log("data recipe:  ", dataRecipe);
                response.recipe.forEach(recipe => {
                    // console.log(recipe.ingredients);
                    // console.log(recipe.title);
                    // console.log("=========>",recipe.image);
                });
            } else {
                console.log("Failed to get all RECIPE");
            }
        } catch (error) {
            console.log("=========>", error);
        }
    }
    useEffect(() => {
        // console.log(isSaved);

        if (isSaved) {
            const idRecipe =recipe._id;
            const idUser = "647dc518dded9d94be4b27cc"
            addToFavorite(idUser,idRecipe)

        }

    }, [isSaved])

    return (
        <TouchableOpacity
            key={recipe.id}
            onPress={onPress}
            style={styles.boxItem}>
            <ImageBackground style={styles.image} resizeMode='cover'
                source={{ uri: recipe.image }} >
            </ImageBackground>
            <View style={styles.infoUser}>
                <View style={styles.boxInfo}>
                    <Image style={styles.avatar}
                        source={recipe.author.avatar == "" ?
                            (require('../asset/image/logo.png')) :
                            ({ uri: recipe.author.avatar })} />
                    <View style={styles.boxContent}>
                        <Text style={styles.nameUser}>{recipe.author.name}</Text>
                        <Text style={styles.title}>{recipe.title}</Text>
                    </View>
                </View>
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
                <View style={styles.boxEmotion}>
                    {
                        !isSaved
                            ?
                            (
                                <TouchableOpacity onPress={() => setIsSaved(true)}>
                                    <Image style={[styles.icon, { tintColor: COLOR.WHITE }]} source={require('../asset/icon/icon_save.png')} />
                                </TouchableOpacity>
                            )
                            :
                            (
                                <TouchableOpacity onPress={() => setIsSaved(false)}>
                                    <Image style={[styles.icon, { tintColor: COLOR.WHITE }]} source={require('../asset/icon/icon_saved.png')} />
                                </TouchableOpacity>
                            )
                    }

                    <Text style={styles.textEmotion}>Lưu</Text>
                </View>
            </View>
        </TouchableOpacity>

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
        marginLeft: 10,
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
    },
    avatar: {
        borderRadius: 1000,
        borderWidth: 1,
        borderColor: COLOR.BLACK,
        width: 30,
        height: 30,
    },
    boxInfo: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',

        marginTop: 40


    },
    boxContent: {
        flexDirection: 'column',
        marginLeft: 14,
    },
    nameUser: {
        color: COLOR.WHITE,
        fontSize: 16,
    },
    title: {
        fontSize: 20,
        color: COLOR.WHITE,
        fontWeight: 'bold',
    }
})