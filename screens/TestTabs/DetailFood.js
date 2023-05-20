import { ScrollView, StyleSheet, Text, View, Image, PixelRatio, TextInput } from 'react-native'
import React from 'react'


const DetailFood = () => {
    return (
        <ScrollView style={{ backgroundColor: '#242424', }}>
            <Image style={styles.logo} source={require('../../asset/image/green_background.png')} />
            <View style={{ padding: 20 }}>
                <Text style={{ color: '#FFFDFD', fontWeight: 'bold', fontSize: 24 }}>Bắp xào tép</Text>
                <View style={{ marginTop: 20, flexDirection: 'row' }}>
                    <Image style={styles.logo} source={require('../../asset/icon/icon_people.png')} />

                    <Text style={{ color: '#FFFDFD', fontSize: 15, marginLeft: 10, marginTop: 15 }} >Bếp của Quỳnh</Text>

                </View>
                <Text style={{ color: '#FFFFFF', fontSize: 15, marginLeft: 10, marginTop: 15 }} >Đà nẵng vào mùa tép tươi,tép xào bắp su ngon voãi lò</Text>
                <Text style={{ color: '#FFFFFF', fontSize: 15, marginLeft: 10, marginTop: 15 }} >_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _</Text>
                <View style={{ marginTop: 20, flexDirection: 'row', alignSelf: 'center' }}>
                    <Image style={styles.logo} source={require('../../asset/icon/icon_clock2.png')} />

                    <Text style={{ color: '#FFFFFF', fontSize: 15, marginLeft: 10, marginTop: 10 }} >30 phút</Text>

                </View>
                <Text style={{ color: '#FFFFFF', fontSize: 15, marginLeft: 10, marginTop: 15, fontWeight: 'bold' }} >Nguyên liệu</Text>
                <View style={{ marginTop: 20, flexDirection: 'row' }}>
                    <Image style={{tintColor:'white'}} source={require('../../asset/icon/icon_human.png')} />

                    <Text style={{ color: '#FFFDFD', fontSize: 15, marginLeft: 10 }} >2 người</Text>

                </View>
                <View>
                    <View style={{ padding: 10 }}>
                        <Text style={{ color: '#FFFFFF', fontSize: 15, marginLeft: 10, marginTop: 15 }} >200 gram tép biển</Text>
                        <Text style={{ color: '#FFFFFF', fontSize: 15, marginLeft: 10, marginTop: 15 }} >_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ </Text>
                        <Text style={{ color: '#FFFFFF', fontSize: 15, marginLeft: 10, marginTop: 15 }} >500 gram bắp</Text>
                        <Text style={{ color: '#FFFFFF', fontSize: 15, marginLeft: 10, marginTop: 15 }} >_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ </Text>
                        <Text style={{ color: '#FFFFFF', fontSize: 15, marginLeft: 10, marginTop: 15 }} >200 gram tép biển</Text>
                        <Text style={{ color: '#FFFFFF', fontSize: 15, marginLeft: 10, marginTop: 15 }} >_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ </Text>
                        <Text style={{ color: '#FFFFFF', fontSize: 15, marginLeft: 10, marginTop: 15 }} >100 gram đậu cove</Text>
                        <Text style={{ color: '#FFFFFF', fontSize: 15, marginLeft: 10, marginTop: 15 }} >_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ </Text>
                        <Text style={{ color: '#FFFFFF', fontSize: 15, marginLeft: 10, marginTop: 15 }} >2 quả cà chua</Text>
                        <Text style={{ color: '#FFFFFF', fontSize: 15, marginLeft: 10, marginTop: 15 }} >_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ </Text>
                        <Text style={{ color: '#FFFFFF', fontSize: 15, marginLeft: 10, marginTop: 15 }} >Hành tím</Text>
                        <Text style={{ color: '#FFFFFF', fontSize: 15, marginLeft: 10, marginTop: 15 }} >_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ </Text>
                        <Text style={{ color: '#FFFFFF', fontSize: 15, marginLeft: 10, marginTop: 15 }} >Hành ngò</Text>
                    </View>
                    <View style={{ backgroundColor: 'white', height: 2, marginLeft: 10, marginTop: 15 }}>

                    </View>

                    <Text style={{ color: '#FFFFFF', fontSize: 15, marginLeft: 10, marginTop: 15, fontWeight: 'bold' }} >Cách làm</Text>
                    <View style={{ padding: 10 }}>

                        <View style={{ marginTop: 20, flexDirection: 'row' }}>
                            <View style={{ backgroundColor: 'white', height: 34, width: 34, borderRadius: 17, alignItems: 'center' }}>
                                <Text style={{ fontSize: 20, fontWeight: 'bold' }}>1</Text>
                            </View>

                            <Text style={{ color: '#FFFFFF', fontSize: 15, marginLeft: 10,paddingRight:20 }} >Sơ chế :Rửa sạch bắp, đậu code, cà, hành tím, rồi cắt ra</Text>


                        </View>
                        <View style={{ marginTop: 20, flexDirection: 'row' }}>
                            <View style={{ backgroundColor: 'white', height: 34, width: 34, borderRadius: 17, alignItems: 'center' }}>
                                <Text style={{ fontSize: 20, fontWeight: 'bold' }}>2</Text>
                            </View>

                            <Text style={{ color: '#FFFFFF', fontSize: 15, marginLeft: 10,paddingRight:20 }} >Cho chảo lên bếp, phi hành với dầu sôi,  cho tép vào xào</Text>


                        </View>
                        <View style={{ marginTop: 20, flexDirection: 'row' }}>
                            <View style={{ backgroundColor: 'white', height: 34, width: 34, borderRadius: 17, alignItems: 'center' }}>
                                <Text style={{ fontSize: 20, fontWeight: 'bold' }}>3</Text>
                            </View>

                            <Text style={{ color: '#FFFFFF', fontSize: 15, marginLeft: 10,paddingRight:20 }} >Sơ chế :Rửa sạch bắp, đậu code, cà, hành tím, rồi cắt ra</Text>


                        </View>
                    </View>

                    <View style={{ backgroundColor: 'white', height: 2, marginLeft: 10, marginTop: 15 }}>

                    </View>
                    <View style={{ marginTop: 20, flexDirection: 'row' }}>
                        <Image style={{tintColor:'white'}} source={require('../../asset/icon/icon_coment.png')} />

                        <Text style={{ color: '#FFFFFF', fontSize: 15, marginLeft: 10, fontWeight: 'bold' }} >Bình luận</Text>



                    </View>
                    <Text style={{ color: '#FFFDFD', fontSize: 15, marginTop: 15 }} >Xem tất cả bình luận</Text>

                    <View style={{ marginTop: 20, flexDirection: 'row' }}>
                        <Image style={{ width: 30, height: 30 }} source={require('../../asset/icon/icon_people.png')} />

                        <View style={{ marginTop: 5, flexDirection: 'row' }} >
                            <Text style={{ color: '#FFFFFF', fontSize: 15, marginLeft: 10, fontWeight: 'bold' }} >Tom</Text>
                            <Text style={{ color: '#FFFFFF', fontSize: 15, marginLeft: 10 }} >món rất cười tôi đã hài</Text>
                        </View>


                    </View>

                    <View style={{ marginTop: 20, flexDirection: 'row' }}>
                        <Image style={{ width: 30, height: 30 }} source={require('../../asset/icon/icon_people.png')} />

                        <TextInput
                            style={{ backgroundColor: '#3c3c3c', marginLeft: 20, height: 40, width: 250 , borderRadius:20,paddingLeft:10,borderWidth:1,borderColor:'white'}}>
                            <Text style={{ fontSize: 14 ,color:'white'}} >Thêm bình luận</Text>
                        </TextInput>


                    </View>


                    <View style={{ backgroundColor: 'white', height: 2, marginLeft: 10, marginTop: 15 }}>

                    </View>
                    <View style={{ marginTop: 20, flexDirection: 'row' }}>
                        <Image style={{tintColor:'white'}} source={require('../../asset/icon/icon_dishes.png')} />

                        <Text style={{ color: '#FFFFFF', fontSize: 15, marginLeft: 10, fontWeight: 'bold' }} >Món mới của Quỳnh</Text>



                    </View>
                    
                    <View style={{ flexDirection: 'row', marginTop: 20, justifyContent: 'space-between' }}>
                        <View>
                            <Image source={require('../../asset/image/pikachu.png')} />

                            <Text style={{ color: '#FFFFFF', fontSize: 15, marginLeft: 10, marginTop: 15 }} >Pikachu nướng muối ớt </Text>

                        </View>
                        <View>
                            <Image source={require('../../asset/image/pikachu.png')} />

                            <Text style={{ color: '#FFFFFF', fontSize: 15, marginLeft: 10, marginTop: 15 }} >Pikachu nướng muối ớt </Text>

                        </View>


                    </View>

                </View>
            </View>
        </ScrollView>
    )
}

export default DetailFood

const styles = StyleSheet.create({
    circle: {
        height: 30,
        width: 30,
        borderRadius: 30
        ,
        backgroundColor: 'white'
            / PixelRatio.get(),
    }
})