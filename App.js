import React, { Component } from 'react'
import { Text, View } from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome"
export default class App extends Component {
  render() {
    return (
      <View>
        <Text> Ecommerce App </Text>
        <Icon name="bars" size={100} />
      </View>
    )
  }
}
