import React, { Component } from 'react'
import { Text, View, FlatList, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native'
import { connect } from "react-redux";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import _ from "lodash";
import mainStyles from "../../../styles";
import Feather from "react-native-vector-icons/Feather"

import { getCart, saveCart, clearCart } from "../../../actions";
import { TSpan } from 'react-native-svg';

class cart extends Component {

    componentDidMount() {

        this.props.dispatch(getCart());
    }

    handleDelete = (item, index) => {

        let data = this.props.cartData.cartData;

        if (!_.isEmpty(data)) {

            let cart = JSON.parse(data);

            cart.splice(index, 1);

            this.props.dispatch(saveCart(cart));

            this.props.dispatch(getCart())


        }
    }

    calcTotal = data => {

        let sum = 0;
        data.forEach(item => {



            sum += parseInt(item.price);
        });

        return sum;
    }

    handleOrder = data => {

        if (!_.isEmpty(data)) {

            let cart = JSON.parse(data);

            this.props.dispatch(clearCart());
            this.props.dispatch(getCart());

            this.props.navigation.navigate("Status");
        }
    }

    renderCart = data => {

        if (!_.isEmpty(data)) {

            let cart = JSON.parse(data);

            if (cart.length > 0) {

                return <View>

                    <FlatList

                        data={cart}
                        keyExtractor={(item, index) => index.toString()}

                        renderItem={({ item, index }) => {

                            return <View style={styles.cartUnit}>
                                <View>
                                    <Image source={{ uri: item.cover }} style={styles.cover} resizeMode="contain" />
                                </View>
                                <View>
                                    <Text style={[mainStyles.text, styles.name]}> {item.name} </Text>
                                    <Text style={[mainStyles.text, styles.price]}> ${item.price} </Text>

                                </View>
                                <View>

                                    <FontAwesome name="trash" size={25} color="red" onPress={() => this.handleDelete(item, index)} />
                                </View>
                            </View>
                        }}

                    />
                    <View style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        marginBottom: 20
                    }}>
                        <Text style={[mainStyles.text, {
                            fontSize: 30,
                            fontWeight: "bold"
                        }]}>Total</Text>
                        <Text style={[mainStyles.text, {
                            fontSize: 30,
                            fontWeight: "bold"
                        }]}>${this.calcTotal(cart)} </Text>
                    </View>

                    <TouchableOpacity style={{
                        backgroundColor: "#5C77FF",
                        width: "100%",
                        padding: 20
                    }} onPress={() => this.handleOrder(this.props.cartData.cartData)}>
                        <Text style={[mainStyles.text, {
                            textAlign: "center",
                            fontSize: 20,
                            color: 'white'
                        }]}> Place Order</Text>
                    </TouchableOpacity>
                </View >
            } else {

                return <View>

                    <FontAwesome name="shopping-cart" size={80} color="rgba(0, 0, 0, .4)" style={{
                        textAlign: "center",
                        marginBottom: 20
                    }} />

                    <Text style={{
                        fontSize: 20,
                        textAlign: "center",
                        color: "rgba(0, 0, 0, .4)"
                    }}> Your cart is empty </Text>
                </View>
            }


        }
    }

    renderButton = data => {

        return data ? <Button title="Proceed to Checkout" /> : null;
    }
    render() {


        return (
            <ScrollView style={mainStyles.container}>

                <View>
                    <Text style={[mainStyles.text, styles.title]}>  Your Cart</Text>
                    {this.renderCart(this.props.cartData.cartData)}
                </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    title: {

        fontSize: 35,
        textAlign: "center",
        marginBottom: 20,
        marginTop: 20
    },
    cover: {

        width: 100,
        height: 100
    },
    name: {
        fontSize: 20,
        marginBottom: 10
    },
    price: {
        fontSize: 18
    },
    cartUnit: {
        flexDirection: 'row',
        marginBottom: 20,
        paddingBottom: 20,
        borderBottomWidth: 2,
        borderBottomColor: "#5C77FF",
        justifyContent: "space-between"
    }
})
const mapStateToProps = state => {

    return {
        cartData: state.cart
    }
}
export default connect(mapStateToProps)(cart);
