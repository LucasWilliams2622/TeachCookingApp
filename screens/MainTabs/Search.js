import { SafeAreaView, StyleSheet, Text, View, TouchableOpacity, Dimensions, Image, StatusBar, FlatList, ActivityIndicator, ToastAndroid } from 'react-native'
import React, { useState, useEffect } from 'react'
import { TextInput } from 'react-native-paper'
import { COLOR, ICON } from '../../constants/Themes'
const windowWIdth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
import ItemDishesVertical from '../../component/ItemDishesVertical'
import AxiosInstance from '../../constants/AxiosInstance';
const Search = () => {
    let timeOut = null;
    const [searchRecipe, setSearchRecipe] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const countdownSearch = (searchText) => {

        if (timeOut) {
            clearTimeout(timeOut);
        }
        timeOut = setTimeout(() => {
            console.log("======>", searchText);
            // if(searchText.length===0){
            // console.log("AAAAAAAAAA");
            // }
            search(searchText);
        }, 1500);
    }

    const getAllRecipe = async () => {
        try {
            const response = await AxiosInstance().get("recipe/api/get-all");
            if (response.result) {
                setSearchRecipe(response.recipe);
                response.recipe.forEach(recipe => {
                });
            } else {
                console.log("Failed to get all RECIPE");
            }
        } catch (error) {
            console.log("=========>", error);
        }
    }
    useEffect(() => {

        getAllRecipe();
        return () => {
        }
    }, [])
    const onClickSear = async () => {
        try {
            console.log(searchText);

            // const response = await AxiosInstance().get("/recipe/api/search-by-title?title=" + searchText);
            // if (response.result) {
            //     console.log(response.recipe);
            //     setSearchRecipe(response.recipe);
            //     setIsLoading(false);
            // } else {
            //     setIsLoading(true);
            //     ToastAndroid.show("Không tìm thấy món ăn", ToastAndroid.SHORT);
            // }
        } catch (error) {
            console.log("ERROR", error);
        }
    }
    const search = async (searchText) => {
        try {
            console.log("searchText", searchText);
            const response = await AxiosInstance().get("/recipe/api/search-by-title?title=" + searchText);
            if (response.result) {
                // console.log(response.recipe);
                setSearchRecipe(response.recipe);
                setIsLoading(false);
            } else {
                setIsLoading(true);
                ToastAndroid.show("Không tìm thấy món ăn", ToastAndroid.SHORT);
            }
        } catch (error) {
            console.log("ERROR", error);
        }
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => { onClickSear() }} >
                    <Image source={ICON.Search} style={styles.imageSearch}></Image>
                </TouchableOpacity>
                <TextInput
                    onChangeText={(text) => countdownSearch(text)}
                    placeholder='Gõ vào tên món ăn ...'
                    placeholderTextColor={COLOR.WHITE}
                    style={styles.input}></TextInput>
            </View>

            <View style={styles.listRecipe}>

                {isLoading ?
                    (<View>
                        <ActivityIndicator size={'large'} color='#fff00' />
                        <Text >Loading...</Text>
                    </View>)
                    :
                    (<View style={{}}>
                        <View>
                            <Text style={styles.textNew}>Các món mới</Text>
                            <View style={styles.line} />
                        </View>
                        <FlatList
                            style={{ marginBottom: 50, }}
                            showsHorizontalScrollIndicator={false}
                            numColumns={2}
                            vertical
                            data={searchRecipe}
                            renderItem={({ item }) => (
                                <ItemDishesVertical
                                    recipe={item}
                                    onPress={() => { }}
                                />
                            )} />
                    </View>)}
            </View>

            <StatusBar barStyle="light-content" backgroundColor={COLOR.BACKGROUND3} />

        </SafeAreaView>
    )
}

export default Search

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLOR.BACKGROUND
    },
    header: {
        flexDirection: 'row',
        height: '10%',
        backgroundColor: COLOR.BACKGROUND3,
        justifyContent: 'flex-start',
        alignItems: 'center',

    },
    input: {
        tintColor: COLOR.WHITE,
        placeholderTextColor: COLOR.WHITE,
        backgroundColor: COLOR.BACKGROUND3,
        height: 30,
        width: '80%',
        borderRadius: 6,
        color: COLOR.WHITE,
        marginTop: 10,
        paddingLeft: 10
    },
    imageSearch: {
        tintColor: COLOR.WHITE,
        // borderWidth: 2, borderColor: COLOR.WHITE,
        marginLeft: 10,
        marginTop: 10,
        height: 30,
        width: 30,
    },
    textNew: {
        fontSize: 16,
        color: COLOR.WHITE,
        fontWeight: '500',
        marginHorizontal: 20,
        marginVertical: 10,

    },
    line: {
        height: 1,
        width: '26%',
        marginHorizontal: 20,
        marginBottom: 20,
        color: COLOR.WHITE,
        backgroundColor: COLOR.WHITE,

    },
    listRecipe: {
        height: '100%', marginBottom: 80,


    }

})