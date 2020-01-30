import React, { Component } from "react";
import {

    View,
    Text,
    ScrollView,
    TouchableOpacity

} from "react-native";

import styles from "../../../styles";


class Options extends Component {

    render() {

        return <View style={styles.options}>

            <ScrollView horizontal showsHorizontalScrollIndicator={false} >

                <TouchableOpacity style={[styles.btn, styles.btnActive]}>
                    <Text style={[styles.btnText, styles.activeBtnText]}> All </Text>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.btn, styles.btnInactive]}>
                    <Text style={[styles.btnText, styles.inactiveBtnText]}> Electricals </Text>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.btn, styles.btnInactive]}>
                    <Text style={[styles.btnText, styles.inactiveBtnText]}> Furniture </Text>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.btn, styles.btnInactive]}>
                    <Text style={[styles.btnText, styles.inactiveBtnText]}> Cosmetics </Text>
                </TouchableOpacity>



            </ScrollView>
        </View>
    }
}

export default Options;