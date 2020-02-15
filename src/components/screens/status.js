import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from "react-native";
import mainStyles from "../../../styles";
import FontAwesome from "react-native-vector-icons/FontAwesome";

//colors
const blue = "#5C77FF"
const green = "#69D630"

class Status extends Component {

    render() {

        return <View style={styles.content}>
            <Text style={[mainStyles.text, styles.title]}> Awesome! </Text>

            <View style={styles.iconWrapper}>
                <FontAwesome name="thumbs-o-up" size={80} color="white" />
            </View>

            <TouchableOpacity style={{
                width: "100%",
                backgroundColor: green,
                padding: 20
            }} onPress={() => this.props.navigation.navigate("Home")}>
                <Text style={[mainStyles.text, {
                    textAlign: "center",
                    color: "white"
                }]}>Continue Shopping</Text>
            </TouchableOpacity>
        </View>
    }
}

const styles = StyleSheet.create({

    title: {
        fontSize: 50,
        textAlign: "center",
        marginBottom: 20
    },
    content: {
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
        padding: 20
    },
    iconWrapper: {
        flexDirection: "row",
        width: 200,
        height: 200,
        backgroundColor: green,
        justifyContent: "center",
        alignItems: 'center',
        alignSelf: "center",
        borderRadius: 100,
        marginBottom: 30
    }
})
export default Status;