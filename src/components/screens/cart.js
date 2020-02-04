import React, { Component } from 'react'
import { Text, View, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native'
import MainStyles from "../../../styles";
import AsyncStorage from '@react-native-community/async-storage';
import _ from "lodash";
import { FlatList } from 'react-native-gesture-handler';
import { StackRouter } from 'react-navigation';
import FontAwesome from "react-native-vector-icons/FontAwesome";

export default class cart extends Component {

    state = {

        cart: ""
    }

    componentDidMount() {



        AsyncStorage.getItem("cart").then(response => {

            const cart = JSON.parse(response);

            if (!_.isEmpty(cart)) {

                this.setState({

                    cart
                })
            }
        });


    }

    handleDelete = (item, index) => {

        const cart = this.state.cart;

        if (cart) {

            cart.splice(index, 1);
            AsyncStorage.setItem('cart', JSON.stringify(cart));

            this.setState({
                cart
            })
        }


    }

    renderCart = cart => {


        if (!_.isEmpty(cart)) {

            return <FlatList

                data={cart}
                keyExtractor={(item, index) => index}
                renderItem={({ item, index }) => {
                    return <View style={styles.cartUnit}>

                        <View style={styles.coverContainer}>
                            <Image source={{ uri: item.cover }} style={styles.cover} resizeMode="contain" />
                        </View>
                        <View style={styles.content}>
                            <Text style={styles.name}> {item.name} </Text>
                            <Text style={styles.price}>{item.price} </Text>
                        </View>

                        <View>

                            <TouchableOpacity onPress={() => this.handleDelete(item, index)}>
                                <FontAwesome name="trash" style={styles.icon} />
                            </TouchableOpacity>
                        </View>

                    </View>
                }}
            />
        }
    }
    render() {
        return (
            <ScrollView>
                <View style={[MainStyles.container, {
                    paddingVertical: 20
                }]}>
                    <Text style={[MainStyles.text, MainStyles.title, {
                        textAlign: "center"
                    }]}> Your Cart  </Text>
                    <View>
                        {this.renderCart(this.props.navigation.state)}
                    </View>


                </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({

    container: {

        flex: 1,
        paddingHorizontal: 20
    },
    cover: {
        width: 150,
        height: 150,
    },
    cartUnit: {
        flexDirection: "row",
        marginBottom: 30,
        justifyContent: "space-between",
        borderBottomColor: "#5C77FF",
        borderBottomWidth: 4,
        paddingBottom: 20
    },
    name: {
        fontSize: 30,
        fontWeight: "bold",
        fontFamily: "firaBold"
    },
    price: {
        fontSize: 20
    },
    icon: {
        fontSize: 30,
        color: "#FF0000",
        marginTop: 20
    }
})
