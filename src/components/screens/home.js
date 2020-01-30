import React, { Component } from 'react'
import { Text, View, Button, TextInput, Dimensions, ScrollView } from 'react-native';
import ElevatedView from "react-native-elevated-view";
import styles from "../../../styles";
import { TouchableOpacity } from 'react-native-gesture-handler';
import Options from "../options/options";

export default class extends Component {
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
                    <View>
                        <Options />
                    </View>





                </View>
            </ScrollView>

        )
    }
}
