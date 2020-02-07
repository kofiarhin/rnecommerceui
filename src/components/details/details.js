import React, { Component } from 'react'
import { Text, View, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native'
import SimilarProduct from "./similarProduct"
import AsyncStorage from '@react-native-community/async-storage';
import _ from "lodash";
import { connect } from "react-redux";

class Details extends Component {

    state = {

        item: "",
        cart: []
    }


    async  componentDidMount() {


        // get cart from session storage
        const strCart = await AsyncStorage.getItem("cart");

        const cart = JSON.parse(strCart);

        const item = this.props.navigation.state.params;

        if (item) {
            this.setState({
                item,
                cart
            })
        }
    }


    handleAdd = item => {


        console.log("add item", item);


        // //get cart from state
        // const cart = this.state.cart;
        // //add item to cart
        // cart.push(item);
        // //convert cart to string
        // const strCart = JSON.stringify(cart);

        // //store cart in session
        // AsyncStorage.setItem('cart', strCart);
        // this.props.navigation.navigate("Cart");


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

                {/* add item cta */}
                <TouchableOpacity onPress={() => this.handleAdd(item)}>
                    <Text style={[styles.btn, styles.btnText]} > Add To Cart</Text>
                </TouchableOpacity>

            </View>

            {/*  list of similar products */}
            <SimilarProduct />
        </View>
    }
    render() {

        // console.log("??????", this.state.item)

        console.log("details of cart", this.state.cart);
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

const mapStateToProps = state => {
    return {
        cartData: state.cart
    }
}

export default connect(mapStateToProps)(Details)