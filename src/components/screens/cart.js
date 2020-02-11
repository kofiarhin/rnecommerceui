import React, { Component } from 'react'
import {
    Text,
    View,
    StyleSheet,
    Image,
    FlatList,
    ScrollView
} from 'react-native';
import { connect } from "react-redux";
import { getCart, storeItem, clearCart } from "../../../actions";
import _ from "lodash";
import mainStyles from "../../../styles";

import FontAwesome from "react-native-vector-icons/FontAwesome";



class Cart extends Component {
    componentDidMount() {

        // this.props.dispatch(getCart());

        //clear cart
        this.props.dispatch(clearCart())

        //get cart
        this.props.dispatch(getCart());
    }

    handleDelete = (item, index) => {

        this.props.dispatch(getCart());

        let data = this.props.cartData.cartData;

        if (!_.isEmpty(data)) {

            let cart = JSON.parse(data);
            console.log(typeof cart);
        }
    }

    renderCart = data => {

        if (!_.isEmpty(data)) {

            let cart = JSON.parse(data);
            return <FlatList
                data={cart}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item, index }) => {

                    return <View style={styles.cartUnit}>
                        <View style={styles.coverUnit}>
                            <Image source={{ uri: item.cover }} style={styles.cover} resizeMode="cover" />
                        </View>

                        <View style={styles.content}>
                            <Text style={[mainStyles.text, styles.name]} numberOfLines={1}> {item.name} </Text>
                            <Text style={[mainStyles.text, styles.price]}> ${item.price} </Text>
                        </View>
                        <View style={styles.iconWrapper}>
                            <FontAwesome name="trash" color="red" size={30} onPress={() => this.handleDelete(item, index)} />
                        </View>
                    </View>
                }}
            />
        }
    }

    render() {


        return (
            <View style={mainStyles.container}>
                <ScrollView>
                    <View>
                        <Text style={[mainStyles.text, styles.title]}> Your Cart </Text>
                        {this.renderCart(this.props.cartData.cartData)}
                    </View>
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({

    title: {
        fontSize: 40,
        textAlign: "center",
        marginVertical: 20
    },

    cartUnit: {
        flexDirection: "row",
        marginBottom: 20,
        justifyContent: "space-between",
        padding: 20,
        borderBottomWidth: 2,
        borderBottomColor: "black"
    },
    cover: {
        width: 100,
        height: 150,
    },
    name: {
        fontSize: 25
    },
    price: {
        fontSize: 20
    },
    iconWrapper: {
        marginTop: 40
    }
})
const mapStateToProps = state => {

    return {
        cartData: state.cart
    }
}
export default connect(mapStateToProps)(Cart);
