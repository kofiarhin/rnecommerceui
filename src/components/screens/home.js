import React, { Component } from 'react'
import { Text, View, Button, TextInput, Dimensions, ScrollView } from 'react-native';
import { BoxShadow } from "react-native-shadow";

export default class extends Component {
    render() {


        return (


            <View style={{
                marginTop: 10
            }}>

                {/* search input */}
                <View>
                    <TextInput placeholder="Search Product" style={{
                        fontSize: 25,
                        paddingHorizontal: 20,
                        borderBottomWidth: 2,
                        borderBottomColor: "rgba(0,0, 0, 0.4)"

                    }} />
                </View>

                {/*  list of products */}
                <ScrollView>
                    <View style={{
                        height: 300,
                        backgroundColor: "black",
                        marginBottom: 20
                    }}>
                        <Text>item 1</Text>
                    </View>
                    <View style={{
                        height: 300,
                        backgroundColor: "black",
                        marginBottom: 20
                    }}>
                        <Text>item 1</Text>
                    </View>

                    <View style={{
                        height: 300,
                        backgroundColor: "black",
                        marginBottom: 20
                    }}>
                        <Text>item 1</Text>
                    </View>







                </ScrollView>
            </View>

        )
    }
}
