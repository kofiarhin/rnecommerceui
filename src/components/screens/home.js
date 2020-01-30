import React, { Component } from 'react'
import { Text, View, Button, TextInput, Dimensions, ScrollView, Image } from 'react-native';
import ElevatedView from "react-native-elevated-view";
import styles from "../../../styles";
import { TouchableOpacity } from 'react-native-gesture-handler';
import Options from "../options/options";

import data from "../../../data";
import _ from "lodash";



export default class extends Component {

    state = {
        data: ""
    }

    componentDidMount() {

        if (!_.isEmpty(data)) { }

        this.setState({
            data
        })
    }

    renderItems = items => {

        if (items && items.length > 0) {

            return items.map((item, index) => {

                return <View key={index} style={styles.itemUnit}>

                    {/* cover */}
                    <View style={styles.itemCoverContainer}>
                        <Image source={{ uri: item.cover }}

                            style={styles.itemCover}
                            resizeMode="cover"
                        />
                    </View>

                    {/* end cover */}

                    {/* content */}
                    <View style={styles.content}>

                        <View style={styles.desc}>
                            <Text style={[styles.text, styles.name]}> {item.name}</Text>
                            <Text style={[styles.text, styles.price]}> ${item.price}</Text>
                            <Text style={[styles.text, styles.color]}> {item.color}</Text>

                        </View>

                        <TouchableOpacity style={styles.view} onPress={() => console.log("go to product details")}>
                            <Text style={[styles.text, styles.viewText]}> View Product</Text>
                        </TouchableOpacity>

                    </View>

                    {/* end content */}
                </View>
            })
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

                            }} />
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


                        {this.renderItems(this.state.data)}



                    </View>


                </View>
            </ScrollView>

        )
    }
}