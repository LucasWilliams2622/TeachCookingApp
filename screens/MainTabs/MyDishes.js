import { StyleSheet, Text, TouchableOpacity, Image, Dimensions, View, RefreshControl, FlatList } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import { ICON, IMAGES, COLOR } from '../../constants/Themes';
import React, { useEffect, useContext, useState } from 'react';
import ItemSearch from '../../component/ItemSearch';
import { AppContext } from '../../utils/AppContext';
import ItemMyDish from '../../component/ItemMyDish';
import AxiosInstance from '../../constants/AxiosInstance';
import { TextInput } from 'react-native-paper';

const MyDishes = (props) => {
  const { navigation } = props;
  const { infoUser, idUser } = useContext(AppContext);
  const [recipe, setRecipe] = useState([]);
  const [stateList, setStateList] = useState(0);
  const [refreshControl, setRefreshControl] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  let timeOut = null;
  const goAddNew = () => {
    navigation.navigate('AddNew')
  }
  const getRecipeOfUser = async () => {
    try {
      const response = await AxiosInstance().get("recipe/api/search-by-author?author=" + idUser);
      if (response.result) {
        // console.log("========>", response.recipe);
        setRecipe(response.recipe)
        setIsLoading(true)
      } else {
        console.log("Failed to get user recipe");
      }
    } catch (error) {
      console.log("Failed to get user recipe !!!");
    }
  }
  const countDownSearch = (searchText) => {
    if (timeOut) {
      clearTimeout(timeOut);
    }
    timeOut = setTimeout(() => {
      search(searchText);
    }, 1000);
  }
  const search = async (searchText) => {
    try {
      setIsLoading(false);
      const response = await AxiosInstance().get("recipe/api/search-by-title?title=" + searchText);
      if (response.result) {
        setRecipe(response.recipe);
        setIsLoading(true);
      } else {
        ToastAndroid.show('lay du lieu that bai', ToastAndroid.SHORT);
        getRecipeOfUser();
      }
    } catch (error) {
      console.log(error, "Error")
    }
  }
  useEffect(() => {
    getRecipeOfUser();
  }, [stateList,recipe]);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.main}>
        <View style={styles.header}>
          <TouchableOpacity >
            <Image source={ICON.Search} style={styles.imageSearch}></Image>
          </TouchableOpacity>
          <TextInput placeholder='Tìm kiếm' onChangeText={(text) => countDownSearch(text)}
            placeholderTextColor={COLOR.WHITE}
            style={styles.input}></TextInput>
        </View>
        {isLoading ?
          (<View style={styles.boxList}>

            <FlatList
              style={{ marginVertical: 15, marginBottom: 210, width: '100%' }}
              showsHorizontalScrollIndicator={false}
              vertical
              numColumns={2}
              horizontal={false}
              data={recipe}
              renderItem={({ item }) => <ItemMyDish recipe={item} navigation={navigation} />}
              keyExtractor={eachCategory => eachCategory.name}

              refreshControl={
                <RefreshControl refreshing={refreshControl} onRefresh={() => {
                  setRefreshControl(true)
                  console.log("Refresh")
                  setStateList(stateList + 1)
                  // console.log(stateList)
                  setRefreshControl(false)
                }} colors={['green']} />
              }
            />
          </View>)
          :
          (<View style={styles.content}>
            <Image style={styles.image} source={require('../../asset/image/mtMydish.jpg')}></Image>
            <Text style={styles.title}>Chưa có món nafo</Text>
            <Text style={styles.text}>Bạn vẫn chưa đăng món nào. Hãy chia sẻ món bạn </Text>
            <Text style={styles.text}>yêu thích và bạn sẽ thầy những món ấy ở đây </Text>
            <TouchableOpacity
              onPress={() => { goAddNew() }}
              style={styles.buttonGoNew}>
              <Text style={styles.textButton}>Viết món mới</Text>
            </TouchableOpacity>
          </View>)}
      </View>
    </SafeAreaView>

  )
}

export default MyDishes

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR.BLACK,
  },
  main: {
  },
  header: {
    marginTop: 20, marginHorizontal: 20,
    flexDirection: 'row'
  },
  content: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  image: {
    marginTop: 30,
    height: 200,
    width: 300,
  },
  title: {
    color: COLOR.WHITE,
    fontWeight: 'bold',
    fontSize: 17,
    marginBottom: 7
  },
  text: {
    color: COLOR.WHITE,
    fontWeight: '400',
    fontSize: 13,
    marginBottom: 5
  },
  buttonGoNew: {
    backgroundColor: COLOR.WHITE2,
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,

    marginVertical: 30,
    borderRadius: 10,
  },
  textButton: {
    color: COLOR.BLACK,
    fontWeight: '500',
    marginHorizontal: 23,
  },
  input: {

    placeholderTextColor: COLOR.WHITE,
    backgroundColor: COLOR.BLACK,
    height: 30,
    width: '60%',
    borderRadius: 6,
    marginTop: 10,
    paddingLeft: 10
  },
  imageSearch: {
    tintColor: COLOR.WHITE,
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