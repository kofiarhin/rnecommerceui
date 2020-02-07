import React, { Component } from 'react'
import { Text, View } from 'react-native'
import AsyncStorage from '@react-native-community/async-storage'

export default class cart extends Component {

    state = {

        cart: []
    }
    componentDidMount() {

        AsyncStorage.getItem("cart").then(response => {

            this.setState({

                cart: JSON.parse(response)
            })
        })
    }
    render() {

        return (
            <View>
                <Text> textInComponent </Text>
            </View>
        )
    }
}
