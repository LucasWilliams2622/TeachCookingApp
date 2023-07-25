import { StyleSheet } from 'react-native';
import { COLOR } from './Theme';
export const appStyle = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLOR.bg,
    },
    icon: {
        height: 24,
        width: 24,
    },
    bigIcon: {
        height: 32,
        width: 32,
    },
    avatar: {
        borderRadius: 1000,
        height: 82,
        width: 82,
    },
    avatarItem: {
        borderRadius: 1000,
        height: 50,
        width: 50,
    },
    bigAvatar: {
        borderRadius: 1000,
        height: 100,
        width: 100,
    },
    imageVehicle: {
        width: 90,
        height: 90,
        borderRadius: 8,
    },
    title: {
        fontFamily: "Josefin Sans",
        fontStyle: 'normal',
        fontWeight: "500",
        letterSpacing: 0.5,
        fontSize: 20,
        color: COLOR.titleHeader,

    },
    text: {
        fontFamily: "Josefin Sans",
        fontStyle: 'normal',
        fontWeight: "400",
        letterSpacing: 0.5,
        fontSize: 16,
        color: COLOR.text,
    },
    normalText: {
        fontFamily: "Josefin Sans",
        fontStyle: 'normal',
        fontWeight: "400",
        letterSpacing: 0.5,
        fontSize: 16,
        color: COLOR.normalText,
    },
    textCapital: {
        fontWeight: '700',
        fontSize: 16,
        fontFamily: "Josefin Sans",
        fontStyle: 'normal',
        color: COLOR.title,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'flex-start',
    },
    column: {
        flexDirection: 'column',
        alignItems: 'flex-start',
    },

    itemAdmin: {
        height: "100%",
        width: '25%',
        backgroundColor: COLOR.bgLabel,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        marginHorizontal: 68,
        marginVertical: 0,

        shadowColor: "#000000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.18,
        shadowRadius: 4.59,
        elevation: 5
    },
    titleLabel: {
        fontSize: 24,
        fontWeight: '400',
        fontStyle: 'normal',
        color: COLOR.titleLabel,
        fontFamily: "Josefin Sans",

    },

    titleBreadCrumb: {
        fontSize: 16,
        fontFamily: "Josefin Sans",
        fontStyle: 'normal',
        fontWeight: '400',
        color: COLOR.titleBreadCrumb,
        marginRight: 10,
    },
    button: {
        backgroundColor: COLOR.bgButton,
        paddingVertical: 8,
        paddingHorizontal: 40,
        alignItems: 'center',
        borderRadius: 8,

    },
    titleButton: {
        color: COLOR.white,
        fontWeight: '400',
        fontSize: 16,
        fontFamily: "Josefin Sans",
        fontStyle: 'normal',
        letterSpacing: 0.5,
    },
    middleDot: {
        width: 5,
        height: 5,
        borderRadius: 1000,
        backgroundColor: COLOR.normalText,
        marginRight: 10
    },
    boxShadow: {
        borderRadius: 8,
        paddingHorizontal: 18,
        paddingVertical: 28,
        alignItems: 'flex-start',
        backgroundColor: 'white',

        shadowColor: "#000",
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.29,
        shadowRadius: 1,
        elevation: 7,
        borderColor: '#D4D4D4',
        borderWidth: 0.5,
    },
    textInput: {
        borderWidth: 0.5,
        borderRadius: 5,
        backgroundColor: COLOR.bg,
        width: '100%'
    },
    dotStatus: {
        width: 24,
        height: 24,
    },
    buttonPlus: {
        width: 80,
        height: 80,
    },
    boxInfo: {
        width: '90%',
        paddingLeft: 88,

    },
    TabView: {
        backgroundColor: COLOR.bg,
        width: '72%',
    },

    tableHead: {
        height: 58,
        width: '100%',
        backgroundColor: COLOR.secondary,

    },
    licenseImage: {
        width: 300,
        height: 212,
    },













    dropdown: {
        height: 41,
        width: 240,
        borderColor: 'gray',
        backgroundColor: COLOR.bg,
        borderWidth: 0.5,
        borderRadius: 32,
        paddingHorizontal: 15,
        paddingVertical: 11,
        marginLeft: 11,
    },
    placeholderStyle: {
        fontSize: 16,
        fontWeight: '500',
        paddingLeft: 16,

    },
    selectedTextStyle: {
        fontSize: 16,
        paddingLeft: 16,
        fontWeight: '400',
        color: COLOR.text,

    },
    iconStyle: {
        width: 20,
        height: 20,
    },
    inputSearchStyle: {
        height: 40,
        fontSize: 16,
    },


});