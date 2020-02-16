import React, { Component } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import mainStyles from "../../../styles";
import { connect } from "react-redux";
import { logoutUser, getUser } from "../../../actions";
import AsyncStorage from '@react-native-community/async-storage';
import _ from "lodash";

class settings extends Component {

    componentDidMount() {

        this.props.dispatch(getUser());
    }


    handleLogout = () => {

        this.props.dispatch(logoutUser());

        this.props.navigation.navigate("Login")
    }

    renderUser = data => {

        if (!_.isEmpty(data)) {

            let user = JSON.parse(data);
            return <View>

                <Text> Name: {user.name} </Text>
            </View>
        }
    }
    render() {

        console.log(this.props)
        return (
            <View>
                <Text style={[mainStyles.text, {
                    fontSize: 40,
                    textAlign: "center",
                    marginTop: 20
                }]}> Setttings </Text>

                {this.renderUser(this.props.userData.userData)}

                <TouchableOpacity onPress={() => this.handleLogout()} style={{
                    backgroundColor: "blue",
                    padding: 20
                }}>



                    <Text style={{
                        textAlign: "center",
                        color: "white"
                    }}> Logout  </Text>
                </TouchableOpacity>


            </View>
        )
    }
}

const mapStateToProps = state => {

    return {

        userData: state.user
    }
}
export default connect(mapStateToProps)(settings) 