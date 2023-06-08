import { StyleSheet, Text, View, Image, Dimensions, TextInput, FlatList, TouchableOpacity, ImageBackground } from 'react-native'
import React, { useState, useCallback } from 'react'
const windowWIdth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
import { ICON, COLOR } from '../../constants/Themes'
import ItemSteps from '../../component/ItemSteps';
import { ScrollView } from 'react-native-virtualized-view'
import ItemMaterial from '../../component/ItemMaterial';
import ItemComent from '../../component/ItemComent';
import ItemAnotherFood from '../../component/ItemAnotherFood';
import YoutubeIframe from "react-native-youtube-iframe";

const DetailFood = (props) => {
    const { route, navigation } = props;
    const { params } = route;
    const { recipe } = params;
    const [playing, setPlaying] = useState(false);
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
                        source={!recipe.author.avatar ? { uri: recipe.author.avatar } : require('../../asset/icon/icon_people.png')} />
                    <View>
                        <Text style={[styles.text, { color: COLOR.WHITE2, fontWeight: 'bold' }]} >{recipe.author.name}</Text>
                        <Text style={[styles.text, { color: COLOR.WHITE2, marginTop: 2 }]} >{recipe.author.email}</Text>
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
                        data={dataNe}
                        renderItem={({ item }) => <ItemSteps data={item} />}
                        keyExtractor={(subItem) => subItem.id}
                        listKey={(subItem) => 'subList-' + subItem.id}
                        showsVerticalScrollIndicator={false}
                    />
                </View>
                <View style={styles.videoYoutube}>
                    <YoutubeIframe
                        height={350}
                        play={playing}
                        videoId={recipe.idVideo}
                        onChangeState={onStateChange}
                    />
                    {/* <Button title={playing ? "pause" : "play"} onPress={togglePlaying} /> */}
                </View>
                <View style={styles.line}></View>

                {/* Binh` luan */}
                <View style={{ marginTop: 20, flexDirection: 'row' }}>
                    <Image style={{ tintColor: COLOR.WHITE }} source={require('../../asset/icon/icon_coment.png')} />
                    <Text style={[styles.title, { marginTop: -5 }]} >Bình luận</Text>
                </View>
                <Text style={styles.allComent} >Xem tất cả bình luận</Text>
                <FlatList
                    data={dataComent}
                    renderItem={({ item }) => <ItemComent data={item} />}
                    keyExtractor={(subItem) => subItem.id}
                    listKey={(subItem) => 'subList-' + subItem.id}
                    showsVerticalScrollIndicator={false}
                />
                <View style={{ marginTop: 20, flexDirection: 'row' }}>
                    <Image style={{ width: 30, height: 30 }} source={require('../../asset/icon/icon_people.png')} />
                    <TextInput
                        style={styles.addComent}>
                        <Text style={{ fontSize: 14, color: 'white' }} >Thêm bình luận</Text>
                    </TextInput>
                </View>
                <View style={styles.line}></View>


                {/* Mon moi cua Quynh */}
                <View style={{ marginTop: 20, flexDirection: 'row' }}>
                    <Image style={{ tintColor: 'white' }} source={require('../../asset/icon/icon_dishes.png')} />
                    <Text style={styles.newFoodof} >Món mới của {recipe.author.name}</Text>
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
        marginTop: -5
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
    },
    icon: {
        marginHorizontal: 10,
        marginVertical: 23,
        height: 25,
        width: 25,
        tintColor: COLOR.WHITE,


    },

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