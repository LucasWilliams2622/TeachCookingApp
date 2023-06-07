import { StyleSheet, Text, View, Image, Dimensions, Alert, ImageBackground,ToastAndroid, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { COLOR } from '../constants/Themes';
import { SafeAreaView } from 'react-native-safe-area-context';
import AxiosInstance from '../constants/AxiosInstance'
const windowWIdth = Dimensions.get('window').width;

const ItemSavedRecipe = (props) => {
    const { recipe, navigation } = props;
    const [idRecipe, setIdRecipe] = useState('')
    const [isSaved, setIsSaved] = useState(false)
    const goDetail = () => {
        navigation.navigate("DetailFood")
    }
    const deleteMyRecipe = async () => {
        try {

            console.log("AAAAAAAAAAAA",recipe._id);
            const response = await AxiosInstance().delete("/recipe/api/delete-by-id?id="+ recipe._id );
            console.log(response.recipe)
            if (response.result) {
                ToastAndroid.show("Xoá thành công \n Hãy refresh danh sách ", ToastAndroid.SHORT);

                response.recipe.forEach(recipe => {
                    console.log(recipe.ingredients.quantity);
                    console.log(recipe.title);
                    console.log(recipe);
                });
            } else {
                console.log("Failed to delete RECIPE");
            }
        } catch (error) {
            console.log("=========>", error);
        }
    }
    const dialogConfirm = () => {
        return Alert.alert(
            "Thông báo",
            "Xóa lưu món",
            [{
                text: "Đồng ý",
                onPress: () => {
                    setIsSaved(false)
                    deleteMyRecipe()
                }
            },
            {
                text: "Hủy",
                onPress: () => {
                    setIsSaved(true)
                },
            }]);
    };
    return (
        <SafeAreaView style={styles.itemDishes}>
            <TouchableOpacity onPress={() => { goDetail() }}>
                <ImageBackground style={styles.image} resizeMode='cover'
                    imageStyle={{ borderTopLeftRadius: 10, borderTopRightRadius: 10 }}
                    source={

                        { uri: recipe.image }
                    } >
                    <View style={styles.boxSave}>
                        {!isSaved
                            ?
                            (<TouchableOpacity onPress={() => setIsSaved(true)}>
                                <Image style={[styles.icon, { tintColor: COLOR.WHITE }]} source={require('../asset/icon/icon_save.png')} />
                            </TouchableOpacity>)
                            :
                            (<TouchableOpacity onPress={() =>{}}>
                                <Image style={[styles.icon, { tintColor: COLOR.WHITE }]} source={require('../asset/icon/icon_saved.png')} />
                            </TouchableOpacity>)}
                    </View>
                </ImageBackground>
                <View style={styles.content}>
                    <View style={styles.boxInfo}>
                        <Image style={styles.avatar}
                            source={recipe.author.avatar == "" ?
                                (require('../asset/image/logo.png')) :
                                ({ uri: recipe.author.avatar })} />
                        <Text style={styles.nameUser}>{recipe.author.name}</Text>
                    </View>
                    <Text style={styles.nameDishes}>{recipe.title}</Text>
                    <View style={styles.boxTime}>
                        {/* <Image style={styles.icon} source={require('../asset/icon/icon_clock.png')} /> */}
                        <Text style={styles.textTime}>{recipe.time} giờ</Text>
                        <TouchableOpacity style={styles.boxEmotion} onPress={()=>{dialogConfirm()}}>
                            <Image style={styles.icon2} source={require('../asset/icon/icon_trash_bin.png')} />
                        </TouchableOpacity>
                    </View>
                </View>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

export default ItemSavedRecipe

const styles = StyleSheet.create({
    itemDishes: {
        height: 250,
        width: windowWIdth / 2 - 20,
        borderRadius: 10,
        marginLeft: 12,
        borderWidth: 1,
        borderColor: COLOR.BACKGROUND4,
        backgroundColor: COLOR.BACKGROUND2,
        marginVertical: 7,

    },
    image: {
        height: 140,
        width: windowWIdth / 2 - 24,
    },
    content: {
        height: 140,
        width: windowWIdth / 2 - 23,

        paddingHorizontal: 7,
    },
    boxInfo: {
        marginTop: 7,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',

    },
    avatar: {
        height: 25,
        width: 25,
        borderRadius: 1000,

    },
    nameUser: {
        fontSize: 12,
        fontStyle: 'normal',
        color: COLOR.BACKGROUND4,
        marginLeft: 5,

    },
    nameDishes: {
        marginTop: 8,
        color: COLOR.WHITE,
        fontWeight: 'bold',
        fontSize: 14,
    },
    boxTime: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 15,

    },
    icon: {
        width: 25,
        height: 25,
        tintColor: COLOR.WHITE,

    },

    textTime: {
        fontWeight: '400',
        color: COLOR.WHITE,
        fontSize: 13,
        fontStyle: 'normal',
        marginLeft: 6,
    },

    boxSave: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        padding: 10,
        marginTop: 10,

        borderRadius: 20,
        height: 25,
    },
    boxEmotion: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLOR.BACKGROUND3,
        borderRadius: 20,
        height: 25,
        width: 40
    },
    textEmotion: {
        fontSize: 13,
        marginLeft: 5,
        color: COLOR.WHITE
    },
    icon2: {
        width: 15,
        height: 15,
        tintColor:COLOR.WHITE

    },
})