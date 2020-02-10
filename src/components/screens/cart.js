import React, { Component } from 'react'
import { Text, View, Button, FlatList, Image } from 'react-native';
import { connect } from "react-redux";
import { clearCart, getCart, storeItem } from "../../../actions";
import FontAwesome from "react-native-vector-icons/FontAwesome";

class Cart extends Component {

    componentDidMount() {
        this.props.dispatch(getCart());
        console.log('render page')
    }



    handleClear = () => {

        //cleart the cart
        this.props.dispatch(clearCart());

        //get the cart from session storage
        this.props.dispatch(getCart())

        //redirect to home screen
        this.props.navigation.navigate("Home")


    }



    renderCart = data => {

        if (data) {
            let cart = JSON.parse(data);

            return <FlatList

                data={cart}
                keyExtractor={(item, index) => index}

                renderItem={({ item, index }) => {

                    return <View>
                        <Text> {item.name} </Text>
                        <Image source={{ uri: item.cover }} style={{
                            width: 200,
                            height: 200
                        }} />
                        <FontAwesome name="trash" size={30} color="red" onPress={() => this.handleDelete(item, index)} />
                    </View>
                }}


            />
        } else {

            return <View>

                <Text> your cart is empty </Text>
            </View>
        }
    }

    handleDelete = (item, index) => {

        this.props.dispatch(getCart());

        let data = JSON.parse(this.props.cartData.cartData);

        data.splice(index, 1);
        this.props.dispatch(storeItem(data));
        this.props.dispatch(getCart());

        console.log("item removed")



    }

    render() {

        // console.log(this.props);
        return (
            <View>

                {this.renderCart(this.props.cartData.cartData)}

                <Button title="Clear Cart" onPress={() => this.handleClear()} />
                <Button title="Go Back Home" onPress={() => this.props.navigation.navigate("Home")} />
            </View>
        )
    }
}


const mapStateToProps = state => {
    return {

        cartData: state.cart
    }
}
export default connect(mapStateToProps)(Cart)