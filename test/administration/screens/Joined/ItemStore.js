import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { COLOR } from '../../theme/color'
import { appStyle } from '../../theme/appStyle'
import ItemBranch from '../../components/ItemBranch'

const ItemStore = (props) => {
    return (
        <View style={styles.boxStore}>
            <View style={[appStyle.row, { justifyContent: 'space-between', }]}>
                <View style={appStyle.row}>
                    <Image style={appStyle.avatarItem} source={require('../../assets/icons/iconStore.png')} />
                    <View style={{ marginLeft: 16 }}>
                        <Text style={appStyle.text}>Lam Thảo Cosmetics</Text>
                        <Text style={[appStyle.text, { color: COLOR.titleLabel }]}>Retail</Text>
                    </View>
                </View>
                <View style={appStyle.column}>
                    <Text style={appStyle.text}>Used capacity</Text>
                    <Text style={appStyle.normalText}>10 GB</Text>
                </View>
            </View>
            <View style={[appStyle.row, { justifyContent: 'space-between', marginTop: 40, marginHorizontal: 65 }]}>
                <View style={appStyle.column}>
                    <Text style={[appStyle.text, { fontSize: 12 }]}>Status</Text>
                    <Text style={[appStyle.normalText, { fontSize: 12 }]}>Active</Text>
                </View>
                <View style={appStyle.column}>
                    <Text style={[appStyle.text, { fontSize: 12 }]}>Advertise</Text>
                    <Text style={[appStyle.normalText, { fontSize: 12 }]}>Linked</Text>
                </View>
                <View style={appStyle.column}>
                    <Text style={[appStyle.text, { fontSize: 12 }]}>Linked</Text>
                    <Text style={[appStyle.normalText, { fontSize: 12 }]}>Unlinked</Text>
                </View>
            </View>
            <View style={[appStyle.column, { alignItems: 'flex-start', marginTop: 40 }]}>
                <Text style={[appStyle.text, { marginBottom: 16 }]}>Branch list</Text>
                <ItemBranch />
                <ItemBranch />
            </View>
        </View>
    )
}

export default ItemStore

const styles = StyleSheet.create({
    boxStore: {
        borderWidth: 0.5,
        borderColor: COLOR.border,
        borderRadius: 8,
        paddingHorizontal: 20,
        paddingVertical: 20,
        width: 800,
        marginBottom: 16,
    }
})