import React, { Component } from 'react'
import { Text, View, StyleSheet, Image, ScroillView } from 'react-native'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import SimilarProduct from "./similarProduct"
export default class details extends Component {

    state = {

        item: "",
        cart: ""
    }

    handleAdd = item => {

        console.log(item)
    }

    componentDidMount() {

        const item = this.props.navigation.state.params;

        if (item) {
            this.setState({
                item
            })
        }
    }

    renderItem = item => {

        return <View style={styles.container}>
            <View style={styles.itemUnit}>
                <View>
                    <View>
                        <Image source={{ uri: item.cover }} style={styles.cover} resizeMode="contain" />
                    </View>
                    <Text style={[styles.text, styles.name]}>  {item.name} </Text>
                    <Text style={[styles.text, styles.price]}> ${item.price}</Text>
                    <Text style={[styles.text, styles.description]}> {item.description} </Text>
                </View>


                <View>

                </View>

                <TouchableOpacity>

                    <Text style={[styles.btn, styles.btnText]} onPress={() => this.handleAdd(item)}> Add To Cart</Text>
                </TouchableOpacity>

            </View>
            <SimilarProduct />
        </View>
    }
    render() {

        // console.log("??????", this.state.item)
        return (
            <ScrollView>
                <View>
                    {this.renderItem(this.state.item)}
                </View>
            </ScrollView>
        )
    }
}

const colors = {
    blue: "#5C77FF"
}


const styles = StyleSheet.create({

    container: {
        paddingVertical: 20,
    },
    itemUnit: {
        marginBottom: 20
    },
    cover: {
        width: "100%",
        height: 400,
        marginBottom: 20
    },

    name: {
        fontSize: 40,
        alignSelf: "center"
    },
    text: {
        fontSize: 20,
        fontFamily: "firaRegular"
    },
    price: {
        alignSelf: "center",
        fontSize: 70,
        color: "#5C77FF"
    },
    description: {
        fontSize: 20,
        lineHeight: 20,
        marginBottom: 20
    },
    btnColor: {
        backgroundColor: "#5C77FF"
    },
    btn: {
        backgroundColor: colors.blue,
        padding: 20,
        width: "80%",
        alignSelf: "center"
    },
    btnText: {

        color: "white",
        textAlign: "center"
    }
})