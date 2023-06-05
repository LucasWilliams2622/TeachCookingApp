import { SafeAreaView, StyleSheet, Text, View, TouchableOpacity, Dimensions, Image, FlatList, ActivityIndicator } from 'react-native'
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

            search(searchText);
        }, 3000);
    }

    const getAllRecipe = async () => {
        try {
            const response = await AxiosInstance().get("recipe/api/get-all");
            console.log("DÂT", response.recipe)
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

    const search = async (searchText) => {
        try {
            console.log(searchText);

            const response = await AxiosInstance().get("/recipe/api/search-by-title?title="+searchText);
            if (response.result) {
                console.log(response.recipe);
                setSearchRecipe(response.recipe);
                setIsLoading(false);
            } else {
                setIsLoading(true);
            }
        } catch (error) {
            console.log("ERROR", error);
        }
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={search} >
                    <Image source={ICON.Search} style={styles.imageSearch}></Image>
                </TouchableOpacity>
                <TextInput
                    onChangeText={(text) => countdownSearch(text)}
                    placeholder='Gõ vào tên món ăn ...'
                    placeholderTextColor={COLOR.WHITE}
                    style={styles.input}></TextInput>

            </View>
            {
                isLoading == true ? (
                    <View>
                        <ActivityIndicator size={'large'} color='#fff00' />
                        <Text >Loading...</Text>
                    </View>
                ) : (

                    <View style={styles.newDishes}>
                        <FlatList
                            style={{ marginBottom: 10, }}
                            showsHorizontalScrollIndicator={false}
                            numColumns={2}
                            vertical
                            data={searchRecipe}
                            renderItem={({ item }) => (
                                <ItemDishesVertical
                                    category={item}
                                    onPress={() => { }}
                                />
                            )}
                        />
                    </View>
                )
            }

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
        marginTop: 1,
        marginLeft: 10,
        marginTop: 10,
        height: 30,
        width: 30,
    },

})