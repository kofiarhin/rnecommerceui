import { StyleSheet } from "react-native";


const colors = {
    blue: "#5C77FF",
    red: "#B7092B"
}

const styles = StyleSheet.create({

    container: {
        paddingHorizontal: 20
    },
    options: {
        marginTop: 20
    },
    btn: {
        marginRight: 20,
        padding: 20,
        borderRadius: 30
    },
    btnText: {
        fontSize: 20
    },
    btnActive: {
        backgroundColor: "white",
        borderWidth: 1,
        borderColor: "rgba(0, 0, 0, .5)"
    },
    btnInactive: {
        backgroundColor: "#5C77FF"
    },
    inactiveBtnText: {
        color: "white"
    },
    itemUnit: {
        flexDirection: "row",
        padding: 20,
        marginBottom: 20
    },
    itemCoverContainer: {
        width: "50%"
    },
    itemCover: {
        width: "100%",
        height: 250
    },
    content: {
        width: "50%",
        paddingHorizontal: 10
    },
    view: {
        backgroundColor: colors.blue,
        paddingVertical: 10

    },

    text: {
        fontFamily: "firaRegular",
        fontSize: 20
    },
    viewText: {
        color: "white",
        alignSelf: "center"
    },
    desc: {
        marginBottom: 20
    },
    name: {
        fontSize: 25
    },
    price: {
        fontSize: 22,
        color: colors.red
    }
})

export default styles;