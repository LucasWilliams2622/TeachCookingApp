import { StyleSheet, Text, View, Image, Dimensions, TextInput, FlatList, TouchableOpacity, ImageBackground } from 'react-native'
import React, { useState, useCallback, useContext, useEffect } from 'react'
const windowWIdth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
import { ICON, COLOR } from '../../constants/Themes'
import ItemSteps from '../../component/ItemSteps';
import { ScrollView } from 'react-native-virtualized-view'
import ItemMaterial from '../../component/ItemMaterial';
import ItemComent from '../../component/ItemComent';
import ItemAnotherFood from '../../component/ItemAnotherFood';
import YoutubeIframe from "react-native-youtube-iframe";
import { AppContext } from '../../utils/AppContext';
import AxiosInstance from '../../constants/AxiosInstance';

const DetailFood = (props) => {
    const { route, navigation } = props;
    const { params } = route;
    const { id } = '64822ba7915f63e79514a05f';
    const [recipe, setrecipe] = useState('');
    const [playing, setPlaying] = useState(false);
    const { setInfoUser, infoUser } = useContext(AppContext);
    const [content, setContent] = useState('');
    const [comment, setcomMent] = useState([]);
    const [name, setname] = useState('')
    const [avatar, setavatar] = useState('')
    const [email, setemail] = useState('')
    const getRecipeByID = async () => {
        try {
            const response = await AxiosInstance().get("recipe/api/get-by-id?id=" + params.id);
            console.log(response.recipe);
            console.log(response.recipe.author.name);
            console.log(response.recipe.author.avatar);
            setname(response.recipe.author.name);
            setavatar(response.recipe.author.avatar);
            setemail(response.recipe.author.email);
            setrecipe(response.recipe);
            console.log(recipe);
        } catch (error) {

        }
    }

    const getAllCommnet = async () => {
        try {
            const response = await AxiosInstance().get("/comment/api/get-all");
            // console.log(response)
            if (response.result) {
                setcomMent(response.comment);
                //console.log(comment);
                //console.log("Get all comment");
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
            getAllCommnet();
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

    const [step, setStep] = useState([
        {
            content: "Tom",
        },
        {
            content: "Toma",
        }
    ])
    useEffect(() => {
        getRecipeByID();
        getAllCommnet();
        return () => {

        }
    }, [])

    return (
        <ScrollView style={{ backgroundColor: COLOR.BACKGROUND }} >
            <ImageBackground style={{ width: "100%", height: 400 }}
                source={{ uri: recipe.image }}>
                <TouchableOpacity onPress={() => { goBack() }}>
                    <Image style={styles.icon} source={require('../../asset/icon/icon_back.png')} />
                </TouchableOpacity></ImageBackground>
            <View style={{ padding: 16 }}>
                <Text style={styles.bapxaotep}>{recipe.title}</Text>
                <View style={{ marginTop: 20, flexDirection: 'row', }}>
                    <Image style={styles.logo}
                        source={!avatar ? { uri: avatar } : require('../../asset/icon/icon_people.png')} />
                    <View>
                        <Text style={[styles.text, { color: COLOR.WHITE2, fontWeight: 'bold' }]} >{name}</Text>
                         <Text style={[styles.text, { color: COLOR.WHITE2, marginTop: 2 }]} >{email}</Text>
                    </View>

                </View>
                <Text style={[styles.text, { color: COLOR.WHITE }]}>
                    {recipe.description}
                </Text>
                <View style={styles.line}></View>
                <View style={styles.boxTime}>
                    <Image style={{ width: 20, height: 20, tintColor: COLOR.WHITE }} source={require('../../asset/icon/icon_clock.png')} />
                    <Text style={styles.time} >{recipe.time} giờ</Text>
                </View>
                <View style={{ marginTop: 20, marginLeft: 8, flexDirection: 'row' }}>
                    <Image style={{ tintColor: COLOR.WHITE }} source={require('../../asset/icon/icon_human.png')} />
                    <Text style={styles.people}>{recipe.mealType}</Text>
                </View>
                {/* Nguyen lieu */}
                <Text style={styles.title} >Nguyên liệu</Text>

                <FlatList
                    data={recipe.ingredients}
                    renderItem={({ item }) => <ItemMaterial data={item} />}
                    keyExtractor={item => item._id}
                    showsVerticalScrollIndicator={false}
                />
                <View style={styles.line}></View>


                {/* Cach lam` */}
                <Text style={styles.title}>Cách làm</Text>
                <View style={{ padding: 10 }}>
                    <FlatList
                        data={recipe.steps}
                        renderItem={({ item }) => <ItemSteps data={item} />}
                        keyExtractor={(subItem) => subItem.id}
                        listKey={(subItem) => 'subList-' + subItem.id}
                        showsVerticalScrollIndicator={false}
                    />
                </View>
                <View style={styles.videoYoutube}>

                    {/* //co bug */}
                    {/* <YoutubeIframe
                        height={350}
                        play={playing}
                        videoId={recipe.idVideo}
                       onChangeState={onStateChange}
                    /> */}
                    {/* <Button title={playing ? "pause" : "play"} onPress={togglePlaying} /> */}
                </View>
                <View style={styles.line}></View>

                {/* Binh` luan */}
                {/* <View style={{ marginTop: 20, flexDirection: 'row' }}>
                    <Image style={{ tintColor: COLOR.WHITE }} source={require('../../asset/icon/icon_coment.png')} />
                    <Text style={[styles.title, { marginTop: -5 }]} >Bình luận</Text>
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
                <View style={styles.line}></View> */}


                {/* Mon moi cua Quynh */}
                <View style={{ marginTop: 20, flexDirection: 'row' }}>
                    <Image style={{ tintColor: 'white' }} source={require('../../asset/icon/icon_dishes.png')} />
                    <Text style={styles.newFoodof} >Món mới của {name}</Text>
                </View>
                <View style={{ flexDirection: 'row', marginTop: 20, marginBottom: 70, justifyContent: 'space-between' }}>
                    <FlatList horizontal
                        data={anotherFood}
                        renderItem={({ item }) => <ItemAnotherFood data={item} />}
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
        marginLeft: 10,
        marginTop: 15
    }
    ,
    title: {
        color: COLOR.WHITE,
        fontSize: 20,
        marginLeft: 10,
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
        marginLeft: 10,
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

    }

})

const dataNe = [
    {
        "_id": "1",
        "content": "Sơ chế :Rửa sạch bắp, đậu code, cà, hành tím, rồi cắt ra",
    },
    {
        "_id": "2",
        "content": "Cho chảo lên bếp, phi hành với dầu sôi,  cho tép vào xào",

    },
    {
        "_id": "3",
        "content": "Sơ chế :Rửa sạch bắp, đậu code, cà, hành tím, rồi cắt ra",
    }


]
const dataNguyenLieu = [
    {
        "_id": "1",
        "content": "200 gram tép biển",
    },
    {
        "_id": "2",
        "content": "500 gram bắp",

    },
    {
        "_id": "3",
        "content": "200 gram tép biển",
    }
    ,
    {
        "_id": "4",
        "content": "100 gram đậu cove",
    }
    ,
    {
        "_id": "5",
        "content": "2 quả cà chua",
    }
    ,
    {
        "_id": "6",
        "content": "Hành tím",
    }
    ,
    {
        "_id": "7",
        "content": "Hành ngò",
    }

]
const dataComent = [
    {
        "_id": "1",
        "name": "Tom",
        "content": "Thật tuyệt",
    },
    {
        "_id": "2",
        "name": "Tom",
        "content": "OiShiiiiii",
    },
    {
        "_id": "3",
        "name": "Marry",
        "content": "Ngon vậy sao",
    }


]
const anotherFood = [
    {
        "_id": "1",
        "content": "Pikachu nướng muối tỏi",
    },
    {
        "_id": "2",
        "content": "Pikachu nướng sốt Thái",
    },
    {
        "_id": "3",
        "content": "Pikachu nướng muối ớt",
    }
]