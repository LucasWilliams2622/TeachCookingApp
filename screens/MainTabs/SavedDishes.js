import { StyleSheet, Text, TouchableOpacity, Image, Dimensions, View, FlatList, RefreshControl, TextInput } from 'react-native'
import React, { useState, useEffect, useContext } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ICON, IMAGES, COLOR } from '../../constants/Themes';
import ItemSearch from '../../component/ItemSearch';
import ItemSavedRecipe from '../../component/ItemSavedRecipe';
import AxiosInstance from '../../constants/AxiosInstance';
import { AppContext } from '../../utils/AppContext';
import { ScrollView } from 'react-native-virtualized-view';

const windowWIdth = Dimensions.get('window').width;

const SavedDishes = (props) => {
  const { navigation } = props;
  const [isLoading, setIsLoading] = useState(true);
  const [recipe, setRecipe] = useState([]);
  const [stateList, setStateList] = useState(0);
  const [refreshControl, setRefreshControl] = useState(false);
  const { infoUser, idUser } = useContext(AppContext);
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
  const search = async (searchText) => {
    try {
      // console.log("searchText", searchText);
      const response = await AxiosInstance().get("/recipe/api/search-by-title?title=" + searchText);
      // console.log(response);
      if (response.result) {
        // console.log(response.recipe);
        setRecipe(response.recipe);
        setIsLoading(false);
      } else {
        ToastAndroid.show("Không tìm thấy món ăn", ToastAndroid.SHORT);
        getAllRecipe();
      }
    } catch (error) {
      console.log("ERROR", error);
    }
  }
  const getSavedRecipe = async () => {
    try {
      const response = await AxiosInstance().get("favorite/api/get-by-idUser?idUser=" +idUser);
      console.log("SAVED===========>", response)
      if (response.result) {
        setIsLoading(false)
        setRecipe(response.favorite)
        // if (response.favorite) {
        //   console.log(isLoading);
        //   setIsLoading(true)
         
        // } else {
        //   console.log("aaaaaaaaa",isLoading);
        //   setIsLoading(false)
        //   setRecipe(response.favorite)
        // }
      } else {
        setIsLoading(true)
      }
    } catch (error) {
      console.log("Failed  !!!");
    }
  }
  useEffect(() => {
    getSavedRecipe();
    return () => {
    }
  }, [stateList])

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.main}>
        <View style={styles.header}>
          <TouchableOpacity style={styles.buttonChose} >
            <Image style={styles.save} source={ICON.Saved}></Image>
            <Text style={styles.textButton}>Món đã lưu</Text>
          </TouchableOpacity>
          <View style={styles.inputSearch}>
            <TouchableOpacity >
              <Image source={ICON.Search} style={styles.imageSearch}></Image>
            </TouchableOpacity>
            <TextInput placeholder='Tìm kiếm' onChangeText={(text) => countdownSearch(text)}
              placeholderTextColor={COLOR.WHITE}
              style={styles.input}></TextInput>
          </View>
        </View>
        {isLoading ?
          (
            <View style={styles.content}>
              <Image style={styles.image} source={require('../../asset/image/mtSaved.jpg')}></Image>
              <Text style={styles.title}>Chưa có món mới nào được lưu</Text>
              <Text style={styles.text}>Bạn vẫn chưa lưu món nào. Hãy tìm món bạn yêu </Text>
              <Text style={styles.text}>thích và lưu món đó để nấu và tìm thầy những món đó ở đây </Text>
              <Text style={styles.text}> nhé!</Text>
            </View>
          )
          :
          ( <View style={styles.boxList}>
              <FlatList
                style={{ marginVertical: 15, marginBottom: 260, width: '100%' }}
                showsHorizontalScrollIndicator={false}
                vertical
                numColumns={2}
                horizontal={false}
                data={recipe}
                renderItem={({ item }) => <ItemSavedRecipe recipe={item} navigation={navigation} />}
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
        }
      </View>
    </SafeAreaView >
  )
}

export default SavedDishes

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR.BLACK,
  },
  main: {

  },
  header: {
    flexDirection: 'column',
    marginHorizontal: 20,
  },
  buttonChose: {

    flexDirection: 'row',
    marginVertical: 20,
    height: 35,
    width: 150,
    borderRadius: 50,
    paddingVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLOR.PRIMARY,

  },
  save: {
    // backgroundColor: COLOR.WHITE,
    marginVertical: -1,
    height: 24,
    width: 24,
    borderColor: COLOR.WHITE,
  },
  textButton: {
    // backgroundColor: COLOR.WHITE,
    color: COLOR.BLACK,
    lineHeight: 25,
    height: 30,
    fontSize: 17,
    fontWeight: '400',
  },
  content: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    marginTop: 30,
    height: 200,
    width: 200,
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
  boxList: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 60
  },
  input: {
    placeholderTextColor: COLOR.WHITE,
    backgroundColor: COLOR.BLACK,
    height: 38,
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
  textinInput: {
    fontFamily: 'Poppins',
    fontSize: 16,
    fontWeight: '400',
    fontStyle: 'normal',
    marginRight: 10,

  },
  inputSearch: {
    height: 50,
    borderColor: COLOR.WHITE,
    borderWidth: 1,
    backgroundColor: COLOR.BLACK,
    borderRadius: 30,
    flexDirection: 'row'
  }
})