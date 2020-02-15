import React, { Component } from 'react'
import { Text, View } from 'react-native'
import mainStyles from "../../../styles";

export default class messages extends Component {
    render() {
        return (
            <View style={mainStyles.container}>
                <Text style={[mainStyles.text, {
                    fontSize: 40,
                    textAlign: "center",
                    marginTop: 20
                }]}> Messages </Text>
            </View>
        )
    }
}
