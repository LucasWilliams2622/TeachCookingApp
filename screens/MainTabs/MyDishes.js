import { StyleSheet, Text, TouchableOpacity, Image, Dimensions, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ICON, IMAGES, COLOR } from '../../constants/Themes';
import React, { useEffect } from 'react'
import ItemSearch from '../../component/ItemSearch'
const windowWIdth = Dimensions.get('window').width;

const MyDishes = (props) => {
  const { navigation } = props;
  const goAddNew = () => {
    navigation.navigate('AddNew')
  }
  useEffect(() => {
    // Thực hiện các tác vụ khởi tạo ở đây

  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.main}>
        <View style={styles.header}>
          <ItemSearch />
        </View>
        <View style={styles.content}>
          <Image style={styles.image} source={require('../../asset/image/mtMydish.jpg')}></Image>
          <Text style={styles.title}>Chưa có món nafo</Text>
          <Text style={styles.text}>Bạn vẫn chưa đăng món nào. Hãy chia sẻ món bạn </Text>
          <Text style={styles.text}>yêu thích và bạn sẽ thầy những món ấy ở đây </Text>
          <TouchableOpacity
            onPress={() => { goAddNew() }}
            style={styles.buttonGoNew}>
            <Text style={styles.textButton}>Viết món mới</Text>
          </TouchableOpacity>
        </View>
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
    marginHorizontal: 20,
  },
  header: {
    marginTop: 20,
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