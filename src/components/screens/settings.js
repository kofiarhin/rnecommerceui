import React, { Component } from 'react'
import { Text, View } from 'react-native'
import mainStyles from "../../../styles";

export default class settings extends Component {
    render() {
        return (
            <View>
                <Text style={[mainStyles.text, {
                    fontSize: 40,
                    textAlign: "center",
                    marginTop: 20
                }]}> Setttings </Text>
            </View>
        )
    }
}
