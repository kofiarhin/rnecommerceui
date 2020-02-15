import React, { Component } from 'react'
import { Text, View, Button, TextInput, Dimensions, ScrollView, Image, TouchableOpacity } from 'react-native';
import ElevatedView from "react-native-elevated-view";
import styles from "../../../styles";
import Options from "../options/options";
import { connect } from "react-redux";

import data from "../../../data";
import _ from "lodash";

import { getProducts, getCart, searchProduct } from "../../../actions";
import { timing } from 'react-native-reanimated';


class Home extends Component {

    state = {
        data: "",
        cart: []
    }

    componentDidMount() {

        // load products
        this.props.dispatch(getProducts())
        this.props.dispatch(getCart())

    }

    handleDetails = item => {

        this.props.navigation.navigate("Details", item)
    }

    renderItems = items => {

        if (items && items.length > 0) {

            return items.map((item, index) => {

                return <View key={index} style={styles.itemUnit}>

                    {/* cover */}
                    <View style={styles.itemCoverContainer}>
                        <Image source={{ uri: item.cover }}
                            style={styles.itemCover}
                            resizeMode="contain"
                        />
                    </View>
                    {/* end cover */}

                    {/* content */}
                    <View style={styles.content}>

                        <View style={styles.desc}>
                            <Text numberOfLines={1} style={[styles.text, styles.name]}> {item.name}</Text>
                            <Text style={[styles.text, styles.price]}> ${item.price}</Text>
                            <Text style={[styles.text, styles.color]}> {item.color}</Text>

                        </View>

                        <View>

                            <TouchableOpacity style={styles.view} onPress={() => console.log("go to product details")}>
                                <Text style={[styles.text, styles.viewText]} onPress={() => this.handleDetails(item)}> View Product</Text>
                            </TouchableOpacity>
                        </View>

                    </View>
                    {/* end content */}
                </View>
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
        products: state.products
    }
}

export default connect(mapStateToProps)(Home)