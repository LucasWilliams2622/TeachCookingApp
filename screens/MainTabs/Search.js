import { SafeAreaView, StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { TextInput } from 'react-native-paper'
import { COLOR, ICON } from '../../constants/Themes'

const Search = () => {
  return (
    <View style={styles.container}>
        <TouchableOpacity >
            <Image source={ICON.Search} style={styles.imageSearch}></Image>
        </TouchableOpacity>
        <TextInput placeholder='Tìm kiếm' style={styles.input}></TextInput>

        
{/* 
        <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
            <Text style={[styles.text, { color: 'black' }]}>News</Text>
            <Text style={styles.text}>Topics</Text>
            <Text style={styles.text}>Author</Text>
        </View> */}

        {/* <Image source={require('./image/line.png')} style={{ marginLeft: 45, width: 40, height: 3, marginBottom: 20 }}></Image> */}

        {/* {
            isLoanding == true ?
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <ActivityIndicator size='large' color='#33FF33' />
                </View>

                :

                <FlatList style={styles.box}
                    data={data}
                    renderItem={({ item }) => <ItemListNews data={item} navigation={navigation} />}
                    keyExtractor={item => item._id}
                    showsVerticalScrollIndicator={false}
                />
        } */}

    </View>
)
}

export default Search

const styles = StyleSheet.create({
    container: {
        height: 50,
        borderColor: COLOR.PRIMARY,
        borderWidth: 1,
        backgroundColor : COLOR.GRAY,
        marginStart: 20,
        marginEnd: 25,
        marginTop: 15,
        borderRadius: 30,
        flexDirection: 'row'
    },
    input: {
        
        placeholderTextColor: COLOR.WHITE,
        backgroundColor : COLOR.GRAY,
        height: 30,
        width: '60%',
        borderRadius: 6,
        marginTop:10,
        paddingLeft: 10
    },
    imageSearch: {
        
        placeholderTextColor: COLOR.WHITE,
        marginTop: 1,
        marginLeft: 10,
        marginTop: 10,
        height: 30,
        width: 30,
    },
    text: {
        fontFamily: 'Poppins',
        fontSize: 16,
        fontWeight: '400',
        fontStyle: 'normal',
        marginRight: 10
    }
})