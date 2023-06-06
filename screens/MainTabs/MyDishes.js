import { StyleSheet, Text, TouchableOpacity, Image, Dimensions, View, RefreshControl, FlatList } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import { ICON, IMAGES, COLOR } from '../../constants/Themes';
import React, { useEffect, useContext, useState } from 'react';
import ItemSearch from '../../component/ItemSearch';
import { AppContext } from '../../utils/AppContext';
import ItemMyDish from '../../component/ItemMyDish';
import AxiosInstance from '../../constants/AxiosInstance';

const MyDishes = (props) => {
  const { navigation } = props;
  const { infoUser, idUser } = useContext(AppContext);
  const [recipe, setRecipe] = useState([]);
  const [stateList, setStateList] = useState(0);
  const [refreshControl, setRefreshControl] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  console.log("infoUser My Dish", infoUser);
  console.log("idUser My Dish", idUser);
  const goAddNew = () => {
    navigation.navigate('AddNew')
  }
  const getRecipeOfUser = async () => {
    try {
      const response = await AxiosInstance().get("recipe/api/search-by-author?author=" + idUser);
      if (response.result) {
        console.log("========>",response.recipe);
        setRecipe(response.recipe)
        setIsLoading(true)
      } else {
        console.log("Failed to get user recipe");
      }
    } catch (error) {
      console.log("Failed to get user recipe !!!");
    }
  }
  useEffect(() => {
    getRecipeOfUser();
  }, [stateList]);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.main}>
        <View style={styles.header}>
          <ItemSearch />
        </View>
        {isLoading ?
          (<View style={styles.boxList}>

            <FlatList
              style={{ marginVertical: 15, width: '100%' }}
              showsHorizontalScrollIndicator={false}
              vertical
              numColumns={2}
              horizontal={false}
              data={recipe}
              renderItem={({ item }) => <ItemMyDish recipe={item} />}
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
    marginTop: 20,marginHorizontal:20,
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
  }
})