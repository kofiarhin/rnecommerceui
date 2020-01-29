import React, { Component } from 'react'
import { Text, View, Button } from 'react-native'

export default class search extends Component {
    render() {
        return (
            <View>
                <Text> Search Screen </Text>
                <Button title="Go to Home Scren" onPress={() => this.props.navigation.navigate("Home")} />
            </View>
        )
    }
}
