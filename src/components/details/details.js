import React, { Component } from 'react'
import { Text, View, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native'
import SimilarProduct from "./similarProduct"
import AsyncStorage from '@react-native-community/async-storage';
import _ from "lodash";
import { connect } from "react-redux";
import { addToCart, getCart, storeItem, clearCart, saveCart } from "../../../actions";

class Details extends Component {

    state = {

        item: "",
    }


    componentDidMount() {


        this.props.dispatch(getCart())
        const item = this.props.navigation.state.params
        if (!_.isEmpty(item)) {
            this.setState({
                item,
            })
        }
    }


    handleAdd = item => {

        let cart = [];

        this.props.dispatch(getCart());

        let data = this.props.cartData.cartData;

        if (!_.isEmpty(data)) {

            cart = JSON.parse(data);
        }

        cart.push(item);

        this.props.dispatch(saveCart(cart));
        this.props.dispatch(getCart());

        this.props.navigation.navigate('Cart')

    }



    renderItem = item => {

        return <View style={styles.container}>
            <View style={styles.itemUnit}>
                <View>
                    <View>
                        <Image source={{ uri: item.cover }} style={{
                            width: "100%",
                            height: 300
                        }} resizeMode="contain" />
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

        // console.log(this.state) 
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
    },

})

const mapStateToProps = state => {
    return {
        cartData: state.cart
    }
}

export default connect(mapStateToProps)(Details)