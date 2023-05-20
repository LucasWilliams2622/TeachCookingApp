import { ScrollView, StyleSheet, Text, View, Image } from 'react-native'
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
                <View style={{ marginTop: 20, flexDirection: 'row',alignSelf:'center' }}>
                    <Image style={styles.logo} source={require('../../asset/icon/icon_clock.png')} />

                    <Text style={{ color: '#FFFFFF', fontSize: 15, marginLeft: 10, marginTop: 10 }} >30 phút</Text>

                </View>
                <Text style={{ color: '#FFFFFF', fontSize: 15, marginLeft: 10, marginTop: 15 }} >Nguyên liệu</Text>
                <Text style={{ color: '#FFFFFF', fontSize: 15, marginLeft: 10, marginTop: 15 }} >_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _</Text>
                <Text style={{ color: '#FFFFFF', fontSize: 15, marginLeft: 10, marginTop: 15 }} >Cách làm</Text>
                <Text style={{ color: '#FFFFFF', fontSize: 15, marginLeft: 10, marginTop: 15 }} >_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _</Text>
                <Text style={{ color: '#FFFFFF', fontSize: 15, marginLeft: 10, marginTop: 15 }} >Bình luận</Text>
                <Text style={{ color: '#FFFFFF', fontSize: 15, marginLeft: 10, marginTop: 15 }} >_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _</Text>
                <Text style={{ color: '#FFFFFF', fontSize: 15, marginLeft: 10, marginTop: 15 }} >Món mới của Quỳnh </Text>

            </View>  

        </ScrollView>
    )
}

export default DetailFood

const styles = StyleSheet.create({})