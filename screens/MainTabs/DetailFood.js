import { StyleSheet, Text, View, Image, Dimensions, TextInput, FlatList, TouchableOpacity, ImageBackground, ToastAndroid } from 'react-native'
import React, { useState, useCallback, useContext, useEffect } from 'react'
const windowWIdth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
import { ICON, COLOR } from '../../constants/Themes'
import ItemSteps from '../../component/ItemSteps';
import { ScrollView } from 'react-native-virtualized-view'
import ItemMaterial from '../../component/ItemMaterial';
import ItemComent from '../../component/ItemComent';
import ItemDishesVertical from '../../component/ItemDishesVertical';
import ItemAnotherFood from '../../component/ItemAnotherFood';

import YoutubeIframe from "react-native-youtube-iframe";
import { AppContext } from '../../utils/AppContext';
import AxiosInstance from '../../constants/AxiosInstance';

const DetailFood = (props) => {
    const { route, navigation } = props;
    const { params } = route;
    const [isSaved, setIsSaved] = useState(false)
    const [recipe, setRecipe] = useState('');
    const [playing, setPlaying] = useState(false);
    const { setInfoUser, infoUser, idUser } = useContext(AppContext);
    const [content, setContent] = useState('');
    const [comment, setcomMent] = useState([]);
    const [recipeOfAuthor, setRecipeOfAuthor] = useState([])
    const [name, setName] = useState('')
    const [avatar, setAvatar] = useState('')
    const [email, setEmail] = useState('')
    const [idAuthor, setIdAuthor] = useState('')
    const getRecipeByID = async () => {
        try {
            const response = await AxiosInstance().get("recipe/api/get-by-id?id=" + params.id);
            // console.log(response.recipe);
            // console.log(response.recipe.author.name);
            setIdAuthor(response.recipe.author._id)
            setName(response.recipe.author.name);
            setAvatar(response.recipe.author.avatar);
            setEmail(response.recipe.author.email);
            setRecipe(response.recipe);

            const response2 = await AxiosInstance().get("recipe/api/search-by-author?author=" + response.recipe.author._id);
            console.log("=======>", response2)
            if (response2.result) {
                setRecipeOfAuthor(response2.recipe)
            } else {
                console.log("Failed to get all category");
            }
        } catch (error) {
            console.log(error);
        }
    }
    const getAllComment = async () => {
        try {
            const response = await AxiosInstance().get("/comment/api/get-all");
            // console.log(response)
            if (response.result) {
                setcomMent(response.comment);
                // console.log(comment);
                // console.log("Get all comment");
            } else {
                console.log("Failed to get all comment");
            }
        } catch (error) {
            console.log("Failed to get all comment !!!");
        }
    }
    const addComment = async () => {
        const response = await AxiosInstance().post("/comment/api/add-new", { name: infoUser.user.name, content: content, image: infoUser.user.avatar });
        if (response.result) {
            ToastAndroid.show("Cập nhật thành công", ToastAndroid.SHORT);
            setContent('');
            getAllComment();
        }
        else {
            ToastAndroid.show("Cập nhật không thành công", ToastAndroid.SHORT);
        }
    }
    const onStateChange = useCallback((state) => {
        if (state === "ended") {
            setPlaying(false);
            Alert.alert("video has finished playing!");
        }
    }, []);
    const togglePlaying = useCallback(() => {
        setPlaying((prev) => !prev);
    }, []);
    const goBack = () => {
        navigation.goBack()
    }
    const getRecipeByAuthor = async () => {
        try {
            console.log("idAuthor", idAuthor);
            const response = await AxiosInstance().get("recipe/api/search-by-author?author=" + idAuthor);
            console.log("=======>", response)
            if (response.result) {
                console.log(response.recipe)
                setRecipeOfAuthor(response.recipe)
            } else {
                console.log("Failed to get all category");
            }
        } catch (error) {
            console.log("Failed to get all category !!!");
        }
    }
    const addToFavorite = async (idRecipe) => {
        try {
            // console.log("idUser", idUser);
            const response = await AxiosInstance()
                .post("favorite/api/new-to-favorite", { idUser: idUser, idRecipe: idRecipe });
            if (response.result) {
                ToastAndroid.show("Lưu món thành công !!! ", ToastAndroid.SHORT, ToastAndroid.CENTER,);
            } else {
                console.log("Failed to favorite RECIPE");
            }
        } catch (error) {
            console.log("=========>", error);
        }
    }
    useEffect(() => {
        getRecipeByID();
        getAllComment();
        if (isSaved) {
            const idRecipe = recipe._id;
            addToFavorite(idRecipe)
        }

    }, [isSaved])

    return (
        <ScrollView style={{ backgroundColor: COLOR.BACKGROUND }} >
            <ImageBackground style={{ width: "100%", height: 400 }}
                source={{ uri: recipe.image }}>
                <TouchableOpacity onPress={() => { goBack() }}>
                    <Image style={styles.icon} source={require('../../asset/icon/icon_back.png')} />
                </TouchableOpacity></ImageBackground>
            <View style={{}}>
                <View style={styles.boxInfo}>
                    <Text style={styles.bapxaotep}numberOfLines={2} >{recipe.title}</Text>
                    <View style={{ marginTop: 10, flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', marginBottom: 10, }}>
                        <Image style={styles.logo} source={require('../../asset/image/logo.png')} />
                        <View>
                            <Text style={[styles.text, { color: COLOR.WHITE2, fontWeight: 'bold' }]}numberOfLines={1}  >{name}</Text>
                            <Text style={[styles.text, { color: COLOR.WHITE2, marginTop: 2 }]} numberOfLines={1} >{email}</Text>
                        </View>
                    </View>
                    <Text style={[styles.text, { color: COLOR.WHITE }]} numberOfLines={4} >
                        Mô tả: {recipe.description}
                    </Text>
                    {!isSaved ?
                        (<TouchableOpacity style={styles.buttonSave} onPress={() => setIsSaved(true)}>
                            <Image style={styles.iconSave} source={require('../../asset/icon/icon_save.png')} />
                            <Text style={styles.textButton}> Lưu món</Text>
                        </TouchableOpacity>)
                        :
                        (<TouchableOpacity style={styles.buttonSave} onPress={() => setIsSaved(false)}>
                            <Image style={styles.iconSave} source={require('../../asset/icon/icon_saved.png')} />
                            <Text style={styles.textButton}> Món đã lưu</Text>
                        </TouchableOpacity>)
                    }
                    <View style={styles.line}></View>
                    <View style={styles.boxTime}>
                        <Image style={{ width: 20, height: 20, tintColor: COLOR.WHITE }} source={require('../../asset/icon/icon_clock.png')} />
                        <Text style={styles.time}numberOfLines={1}  >{recipe.time} giờ</Text>
                    </View>
                    <View style={{ marginTop: 20, marginLeft: 8, flexDirection: 'row' }}>
                        <Image style={{ tintColor: COLOR.WHITE }} source={require('../../asset/icon/icon_human.png')} />
                        <Text style={styles.people}numberOfLines={1} >{recipe.mealType}</Text>
                    </View>
                </View>

                <View style={styles.boxIngredients}>
                    <Text style={styles.title} >Nguyên liệu</Text>
                    <FlatList
                        data={recipe.ingredients}
                        renderItem={({ item }) => <ItemMaterial data={item} />}
                        keyExtractor={item => item._id}
                        showsVerticalScrollIndicator={false}
                    />
                    <View style={styles.line}></View>
                </View>

                <View style={styles.boxSteps}>
                    <Text style={styles.title}>Cách làm</Text>
                    <View style={{}}>
                        <FlatList
                            data={recipe.steps}
                            renderItem={({ item }) => <ItemSteps data={item} />}
                            keyExtractor={(subItem) => subItem.id}
                            listKey={(subItem) => 'subList-' + subItem.id}
                            showsVerticalScrollIndicator={false}
                        />
                    </View>
                    <View style={styles.videoYoutube}>
                        {/* <>{
                        recipe.idVideo == null ?
                            <View>

                            </View>
                            :
                            <YoutubeIframe
                                height={350}
                                play={playing}
                                videoId={recipe.idVideo}
                                onChangeState={onStateChange}
                            />
                    }</> */}
                        {/* <Button title={playing ? "pause" : "play"} onPress={togglePlaying} /> */}
                    </View>
                    <View style={styles.line}></View>
                </View>

                <View style={styles.boxComment}>
                    <View style={{ marginTop: 20, flexDirection: 'row' }}>
                        <Image style={{ tintColor: COLOR.WHITE }} source={require('../../asset/icon/icon_coment.png')} />
                        <Text style={[styles.title, { marginTop: -5, marginLeft: 10, }]} >Bình luận</Text>
                    </View>
                    <Text style={styles.allComent} >Xem tất cả bình luận</Text>
                    <FlatList
                        data={comment}
                        renderItem={({ item }) => <ItemComent data={item} />}
                        keyExtractor={(subItem) => subItem.id}
                        listKey={(subItem) => 'subList-' + subItem.id}
                        showsVerticalScrollIndicator={false}
                    />
                    <View style={{ marginTop: 20, flexDirection: 'row' }}>
                        <Image style={{ width: 30, height: 30 }} source={{ uri: infoUser.user.avatar }} />
                        <TextInput value={content} onChangeText={text => setContent(text)} style={styles.addComent}></TextInput>
                        <TouchableOpacity onPress={addComment}>
                            <Image style={styles.imagePost} source={require('../../asset/icon/icon_post.png')}></Image>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.line}></View>
                </View>

                <View style={{ marginTop: 20, flexDirection: 'row' }}>
                    <Image style={{ tintColor: 'white' }} source={require('../../asset/icon/icon_dishes.png')} />
                    <Text style={styles.newFoodof} >Món mới của {name}</Text>
                </View>
                <View style={{ flexDirection: 'row', marginTop: 20, marginBottom: 70, justifyContent: 'space-between' }}>
                    <FlatList
                        data={recipeOfAuthor}
                        numColumns={2}
                        vertical
                        renderItem={({ item }) => <ItemDishesVertical recipe={item} />}
                        keyExtractor={(subItem) => subItem.id}
                        listKey={(subItem) => 'subList-' + subItem.id}
                        showsVerticalScrollIndicator={false}
                    />
                </View>
            </View>
        </ScrollView>
    )
}

export default DetailFood

const styles = StyleSheet.create({
    line: {
        backgroundColor: 'white',
        height: 1,
        marginTop: 15
    }
    ,
    title: {
        color: COLOR.WHITE,
        fontSize: 20,
        marginTop: 10,
        fontWeight: 'bold'
    },
    addComent: {
        backgroundColor: COLOR.BACKGROUND2,
        marginLeft: 10,
        height: 40,
        width: 310,
        borderRadius: 20,
        paddingLeft: 20,
        borderWidth: 1,
        borderColor: 'white',
        marginTop: -5,
        color: COLOR.WHITE
    }
    ,
    text: {
        fontSize: 15,
        marginTop: 10
    },
    time: {
        color: COLOR.WHITE,
        fontSize: 15,
        marginLeft: 10,

    },
    allComent: {
        color: COLOR.WHITE2,
        fontSize: 15,
        marginTop: 15
    }
    ,
    newFoodof: {
        color: COLOR.WHITE,
        fontSize: 15,
        marginLeft: 10,
        fontWeight: 'bold'
    }
    ,
    bapxaotep: {
        color: COLOR.WHITE2,
        fontWeight: 'bold',
        fontSize: 24
    }
    ,
    people: {
        color: COLOR.WHITE2,
        fontSize: 15,
        marginLeft: 10
    },
    boxTime: {
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    videoYoutube: {
        marginTop: 30,
        borderRadius: 20,
    }
    ,
    imagePost: {
        marginTop: 10,
        marginLeft: 7,
        height: 20,
        width: 20
    },
    icon: {
        marginHorizontal: 10,
        marginVertical: 23,
        height: 25,
        width: 25,
        tintColor: COLOR.WHITE,
    },
    boxComment: {
        padding: 15
    },
    boxSteps: {
        padding: 15
    },
    boxIngredients: {
        padding: 15

    },
    boxInfo: {
        padding: 15

    },
    buttonSave: {
        backgroundColor: COLOR.PRIMARY,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        height: 40,
        marginTop: 20,
    },
    iconSave: { tintColor: COLOR.BLACK, height: 25, width: 25 },
    textButton: {
        color: COLOR.BLACK,
        fontSize: 16,
        fontWeight: '500',
        marginLeft: 10,
    },
    logo: {
        height: 34, width: 34, marginRight: 16, top: 7
    }


})


