import React, { Component } from 'react'
import { Text, View, Button, TextInput, Dimensions, ScrollView, Image, TouchableOpacity, AsyncStorage } from 'react-native';
import ElevatedView from "react-native-elevated-view";
import styles from "../../../styles";
import Options from "../options/options";
import { connect } from "react-redux";

import data from "../../../data";
import _ from "lodash";

import { getProducts, getCart, searchProduct, getUser } from "../../../actions";
import ItemUnit from "../widgets/itemUnit";

class Home extends Component {

    state = {
        data: "",
        cart: []
    }

    componentDidMount() {

        //check if user is logged in
        // this.props.navigation.navigate("Login")

        // load products
        this.props.dispatch(getProducts())
        this.props.dispatch(getCart())
        this.props.dispatch(getUser())

    }

    handleDetails = item => {

        this.props.navigation.navigate("Details", item)
    }

    renderItems = items => {

        if (items && items.length > 0) {

            return items.map((item, index) => {
                return <ItemUnit key={index.toString} item={item} index={index} handleDetails={item => this.handleDetails(item)} />
            })
        }
    }

    handleSearch = search => {
        //search for a product
        if (search !== "") {

            this.props.dispatch(searchProduct(data, search))
        } else {

            this.props.dispatch(getProducts())
        }
    }

    render() {

        console.log(this.props)
        return (


            <ScrollView style={styles.container}>
                <View style={{
                    marginTop: 10
                }}>

                    {/* search input */}
                    <View style={{
                        marginBottom: 10
                    }}>
                        <ElevatedView

                            elevation={1}
                        >
                            <TextInput placeholder="Search Product" style={{
                                fontSize: 25,
                                paddingHorizontal: 20,

                            }} onChangeText={search => this.handleSearch(search)} />
                        </ElevatedView>

                    </View>


                    {/* options */}
                    <View style={{
                        marginBottom: 20
                    }}>
                        <Options />
                    </View>

                    {/* list of items */}
                    <View style={styles.itemsWrapper}>
                        {this.renderItems(this.props.products.productData)}
                    </View>


                </View>
            </ScrollView>

        )
    }
}

function mapStateToProps(state) {

    return {
        products: state.products,
        userData: state.user
    }
}

export default connect(mapStateToProps)(Home)