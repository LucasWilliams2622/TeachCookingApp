import { SafeAreaView, StyleSheet, Text, Image, View, ScrollView, Switch,TouchableOpacity, FlatList } from 'react-native'
import React, { useState } from 'react'
import { appStyle, windowWidth } from '../../../../theme/appStyle'
import { COLOR } from '../../../../theme/color'
import ItemButton from '../../../../components/ItemButton'
const DATA = [{ title: "Point", }, { title: "Wallet", },]

const DATALINK = [{ title: "ISMOS", },
{ title: "ISLINK", },
{ title: "ISMOVE", },]
const DetailFnBStore = () => {
  const [isEnabled, setIsEnabled] = useState(true);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    return (
        <ScrollView style={[appStyle.boxSysFeature, { marginLeft: 100,width:windowWidth-480, }]} showsVerticalScrollIndicator={false}>
           <Switch
                  style={{ marginTop: 5, left: -10 }}
                  trackColor={{ false: '#767577', true: '#059669' }}
                  thumbColor={isEnabled ? '#f4f3f4' : '#f4f3f4'}
                  ios_backgroundColor="#3e3e3e"
                  onValueChange={toggleSwitch}
                  value={isEnabled}
                />
            <View style={appStyle.column}>
                <Image style={appStyle.bigAvatar} source={require('../../../../assets/icons/iconBigStore.png')} />
                <Text style={[appStyle.textMoney, { color: COLOR.text, marginTop: 25 }]}>Dì Năm</Text>
                <Text style={[appStyle.textMoney, { fontSize: 22 }]}>Active</Text>
            </View>
            <View style={[appStyle.column, { marginTop: 24, alignItems: 'flex-start' }]}>
                <View style={[appStyle.row, { marginBottom: 23 }]}>
                    <Text style={[appStyle.text, { fontSize: 20, fontWeight: '500' }]}>Information</Text>
                    <Image style={[appStyle.smallIcon, { tintColor: COLOR.text, marginLeft: 12 }]} source={require('../../../../assets/icons/ic_edit.png')} />
                </View>
                <View style={appStyle.row}>
                    <View style={[appStyle.column, { alignItems: 'flex-start' }]}>
                        <Text style={[appStyle.text, styles.spaceLine]}>Type</Text>
                        <Text style={[appStyle.text, styles.spaceLine]}>Store owner</Text>
                        <Text style={[appStyle.text, styles.spaceLine]}>Phone number</Text>
                        <Text style={[appStyle.text, styles.spaceLine]}>Address</Text>
                        <Text style={[appStyle.text, styles.spaceLine]}>Registration date</Text>
                        <Text style={[appStyle.text, styles.spaceLine]}>Upgraged</Text>
                    </View>
                    <View style={[appStyle.column, { alignItems: 'flex-start', marginLeft: 74 }]}>
                        <Text style={[appStyle.text, styles.spaceLine2]}>Retail</Text>
                        <Text style={[appStyle.text, styles.spaceLine2]}>Nguyễn Văn An</Text>
                        <Text style={[appStyle.text, styles.spaceLine2]}>0987654321</Text>
                        <Text style={[appStyle.text, styles.spaceLine2]} numberOfLines={1}>23 abc, Phường Tây Thạnh, Quận Tân Phú, Hồ Chí Minh</Text>
                        <Text style={[appStyle.text, styles.spaceLine2]}>10/01/2023</Text>
                        {/* <Text style={[appStyle.text, styles.spaceLine2, { color: COLOR.textError }]}>Not upgraded</Text> */}
                        <Text style={[appStyle.text, styles.spaceLine2, { color: COLOR.textMoney }]}>Upgraded</Text>

                    </View>
                </View>
            </View>

            <View style={{}}>
                <Text style={[appStyle.text, { fontSize: 20, fontWeight: '500', marginTop: 37, marginBottom: 13 }]}>Payment</Text>
                <FlatList
                    horizontal
                    data={DATA}
                    renderItem={({ item }) => <ItemButton data={item} />}
                    keyExtractor={item => item.id}
                />
                <Text style={[appStyle.text, { fontSize: 20, fontWeight: '500', marginTop: 37, marginTop: 45, marginBottom: 13 }]}>Link</Text>
                <FlatList
                    horizontal
                    data={DATALINK}
                    renderItem={({ item }) => <ItemButton data={item} />}
                    keyExtractor={item => item.id}
                />
            </View>

            <View style={[appStyle.column, { marginBottom: 1000, alignItems: 'flex-start' }]}>
                <Text style={[appStyle.text, { fontSize: 20, fontWeight: '500', marginTop: 45, marginBottom: 13 }]}>Setting</Text>
                <View style={[appStyle.row, { alignItems: 'flex-start', }]}>
                    <TouchableOpacity style={[appStyle.column, { marginRight: 70, }]}>
                        <View style={styles.bgItem}>
                            <Image style={appStyle.bigIcon} source={require('../../../../assets/icons/ic_ingredient.png')} />
                        </View>
                        <Text style={[appStyle.text, { fontSize: 18, marginTop: 7 }]}>Product</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[appStyle.column, { marginRight: 70 }]}>
                        <View style={styles.bgItem}>
                            <Image style={appStyle.bigIcon} source={require('../../../../assets/icons/ic_menu.png')} />
                        </View>
                        <Text style={[appStyle.text, { fontSize: 18, marginTop: 7 }]}>Sales Channel</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[appStyle.column, { marginRight: 70 }]}>
                        <View style={styles.bgItem}>
                            <Image style={appStyle.bigIcon} source={require('../../../../assets/icons/ic_table.png')} />
                        </View>
                        <Text style={[appStyle.text, { fontSize: 18, marginTop: 7 }]}>Counter</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[appStyle.column, { marginRight: 70 }]}>
                        <View style={styles.bgItem}>
                            <Image style={appStyle.bigIcon} source={require('../../../../assets/icons/ic_loadspeaker.png')} />
                        </View>
                        <Text style={[appStyle.text, { fontSize: 18, marginTop: 7 }]}>Promotion</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[appStyle.column, { marginRight: 70 }]}>
                        <View style={styles.bgItem}>
                            <Image style={appStyle.bigIcon} source={require('../../../../assets/icons/ic_surcharge.png')} />
                        </View>
                        <Text style={[appStyle.text, { fontSize: 18, marginTop: 7 }]}>Shift</Text>
                    </TouchableOpacity>
                </View>

                <View style={[appStyle.row, { alignItems: 'flex-start', marginTop: 40, }]}>
                    <TouchableOpacity style={[appStyle.column, { marginRight: 60 }]}>
                        <View style={styles.bgItem}>
                            <Image style={appStyle.bigIcon} source={require('../../../../assets/icons/ic_group.png')} />
                        </View>
                        <Text style={[appStyle.text, { fontSize: 18, marginTop: 7 }]}>Staff</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[appStyle.column, { marginRight: 70 }]}>
                        <View style={styles.bgItem}>
                            <Image style={appStyle.bigIcon} source={require('../../../../assets/icons/ic_list_check.png')} />
                        </View>
                        <Text style={[appStyle.text, { fontSize: 18, marginTop: 7 }]}>Sales Collatorabor</Text>
                    </TouchableOpacity>
                </View>

                <Text style={[appStyle.text, { fontSize: 20, fontWeight: '500', marginTop: 45, }]}>Statistical</Text>
                <View style={[appStyle.row, { alignItems: 'flex-start', marginTop: 14, }]}>
                    <View style={[appStyle.column, { marginRight: 70 }]}>
                        <TouchableOpacity style={styles.bgItem}>
                            <Image style={appStyle.bigIcon} source={require('../../../../assets/icons/ic_list.png')} />
                        </TouchableOpacity>
                        <Text style={[appStyle.text, { fontSize: 18, marginTop: 7 }]}>Bill</Text>
                    </View>
                    <View style={[appStyle.column, { marginRight: 70 }]}>
                        <TouchableOpacity style={styles.bgItem}>
                            <Image style={appStyle.bigIcon} source={require('../../../../assets/icons/ic_chart.png')} />
                        </TouchableOpacity>
                        <Text style={[appStyle.text, { fontSize: 18, marginTop: 7 }]}>Report</Text>
                    </View>
                    <View style={[appStyle.column, { marginRight: 70 }]}>
                        <TouchableOpacity style={styles.bgItem}>
                            <Image style={appStyle.bigIcon} source={require('../../../../assets/icons/ic_store.png')} />
                        </TouchableOpacity>
                        <Text style={[appStyle.text, { fontSize: 18, marginTop: 7 }]}>Branch</Text>
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}

export default DetailFnBStore

const styles = StyleSheet.create({
    spaceLine: {
        color: COLOR.normalText, fontSize: 18, marginBottom: 23
    },
    spaceLine2: {
        color: COLOR.text, fontSize: 18, marginBottom: 23
    },
    bgItem: {
        backgroundColor: COLOR.bgItem,
        borderRadius: 100,
        alignItems: 'center',
        padding: 14,
        width: 60,
        height: 60,
    }
})