import { StyleSheet } from "react-native";


const colors = {
    blue: "#5C77FF"
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
    }
})

export default styles;