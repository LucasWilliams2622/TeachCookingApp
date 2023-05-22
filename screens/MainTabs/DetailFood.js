import { StyleSheet, Text, View, Image, Dimensions, TextInput, FlatList } from 'react-native'
import React, { useState } from 'react'
const windowWIdth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
import { ICON, COLOR } from '../../constants/Themes'
import ItemSteps from '../../component/ItemSteps';
import { ScrollView } from 'react-native-virtualized-view'
import ItemMaterial from '../../component/ItemMaterial';
import ItemComent from '../../component/ItemComent';
import ItemAnotherFood from '../../component/ItemAnotherFood';

const DetailFood = ({ navigation }) => {
    const [step, setStep] = useState([
        {
            content: "Tom",
        },
        {
            content: "Toma",
        }
    ])
    return (
        <ScrollView style={{ backgroundColor: COLOR.BACKGROUND }} >
            <Image style={{ width: "100%", height: 400 }} source={require('../../asset/image/bapxaotep.jpg')} />
            <View style={{ padding: 20 }}>
                <Text style={styles.bapxaotep}>Bắp xào tép</Text>
                <View style={{ marginTop: 20, flexDirection: 'row' }}>
                    <Image style={styles.logo} source={require('../../asset/icon/icon_people.png')} />
                    <View>
                        <Text style={[styles.text, { color: COLOR.WHITE2, fontWeight: 'bold' }]} >Bếp của Quỳnh</Text>
                        <Text style={[styles.text, { color: COLOR.WHITE2, marginTop: 2 }]} >@QuynhAlee</Text>
                    </View>

                </View>
                <Text style={[styles.text, { color: COLOR.WHITE }]}>Đà nẵng vào mùa tép tươi,tép xào bắp su ngon voãi lò</Text>
                <View style={styles.line}></View>
                <View style={{ marginTop: 20, flexDirection: 'row', alignSelf: 'center' }}>
                    <Image style={{ tintColor: COLOR.WHITE }} source={require('../../asset/icon/icon_clock.png')} />
                    <Text style={styles.time} >30 phút</Text>
                </View>

                {/* Nguyen lieu */}
                <Text style={styles.title} >Nguyên liệu</Text>
                <View style={{ marginTop: 20, flexDirection: 'row' }}>
                    <Image style={{ tintColor: COLOR.WHITE }} source={require('../../asset/icon/icon_human.png')} />
                    <Text style={styles.people}>2 người</Text>
                </View>
                <FlatList
                    data={dataNguyenLieu}
                    renderItem={({ item }) => <ItemMaterial dulieu={item} />}
                    keyExtractor={item => item._id}
                    showsVerticalScrollIndicator={false}
                />
                <View style={styles.line}></View>


                {/* Cach lam` */}
                <Text style={styles.title}>Cách làm</Text>
                <View style={{ padding: 10 }}>
                    <FlatList
                        data={dataNe}
                        renderItem={({ item }) => <ItemSteps dulieu={item} />}
                        keyExtractor={item => item._id}
                        showsVerticalScrollIndicator={false}
                    />
                </View>
                <View style={styles.line}></View>

                {/* Binh` luan */}
                <View style={{ marginTop: 20, flexDirection: 'row' }}>
                    <Image style={{ tintColor: COLOR.WHITE }} source={require('../../asset/icon/icon_coment.png')} />
                    <Text style={styles.title} >Bình luận</Text>
                </View>
                <Text style={styles.allComent} >Xem tất cả bình luận</Text>
                <FlatList
                    data={dataComent}
                    renderItem={({ item }) => <ItemComent dulieu={item} />}
                    keyExtractor={item => item._id}
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
                    <Text style={styles.newFoodof} >Món mới của Quỳnh</Text>
                </View>
                <View style={{ flexDirection: 'row', marginTop: 20, justifyContent: 'space-between' }}>
                    <FlatList horizontal
                        data={anotherFood}
                        renderItem={({ item }) => <ItemAnotherFood dulieu={item} />}
                        keyExtractor={item => item._id}
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
        fontSize: 15,
         marginLeft: 10, 
         marginTop: 10,
          fontWeight: 'bold'
    },
    addComent: {
        backgroundColor: COLOR.BACKGROUND2,
         marginLeft: 20,
          height: 40, 
          width: 250, 
          borderRadius: 20, 
          paddingLeft: 10, 
          borderWidth: 1, 
          borderColor: 'white'
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
          marginTop: 10
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