import React, { Component } from 'react'
import { Text, View, StyleSheet, ScrollView, Image } from 'react-native'
import data from "./../../../data";

export default class similarProduct extends Component {

    state = {

        data: ""
    }

    componentDidMount() {

        this.setState({
            data
        })
    }

    renderUnits = data => {

        if (data) {

            return data.map(item => {

                return <View>
                    <Image source={{ uri: item.cover }} style={{
                        width: 80,
                        height: 80,
                        marginRight: 20
                    }} />
                </View>
            })
        }
    }
    render() {

        // console.log(this.state.data)
        return (
            <View>
                <View>
                    <Text style={[styles.text, styles.title]}> Similar Prodcts </Text>
                </View>

                <ScrollView horizontal>
                    {this.renderUnits(this.state.data)}
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({

    text: {
        fontSize: 20,
        fontFamily: "firaRegular"
    },
    title: {
        fontSize: 40
    }
})
