import React, { Component } from "react";
import {
    Text,
    View,
    TextInput,
    TouchableOpacity
} from "react-native";
import mainStyles from "../../../styles";
import _ from "lodash";

import { connect } from "react-redux";
import { loginUser, getUser } from "../../../actions";
import AsyncStorage from "@react-native-community/async-storage";


class Login extends Component {

    state = {

        email: "",
        password: ""
    }

    componentDidMount() {

        this.props.dispatch(getUser())

        let userData = this.props.userData.userData;

        if (!_.isEmpty(userData)) {

            let data = JSON.parse(userData);

            if (data.email === "admin") {

                this.props.navigation.navigate("Home")
            }
        }
    }

    handleSubmit = () => {

        let userData = {
            email: "admin",
            name: "admin",
            password: "admin"
        }

        let dataToStore = JSON.stringify(userData);

        this.props.dispatch(loginUser(dataToStore));

        this.props.navigation.navigate("Home")




    }

    render() {



        return <View style={mainStyles.container}>

            {/* title */}
            <Text style={[mainStyles.text, {
                fontSize: 40,
                textAlign: "center",
                marginTop: 20,
                marginBottom: 20
            }]}> Login Screen </Text>

            <View>

                {/* email */}
                <View style={{
                    marginBottom: 20
                }}>
                    <Text style={[mainStyles.text, {
                        marginBottom: 15
                    }]}> Email</Text>
                    <TextInput placeholder="johndoe@gmail.com" borderWidth={1} style={{
                        padding: 15
                    }} borderColor="rgba(0, 0, 0,  .4)" onChangeText={email => this.setState({
                        email
                    })} />
                </View>

                {/* password */}
                <View style={{
                    marginBottom: 20
                }}>
                    <Text style={[mainStyles.text, {
                        marginBottom: 15
                    }]}> Password</Text>
                    <TextInput placeholder="johndoe@gmail.com" borderWidth={1} style={{
                        padding: 15
                    }} borderColor="rgba(0, 0, 0,  .4)" secureTextEntry onChangeText={password => this.setState({
                        password
                    })} />
                </View>


                {/* submit button */}

                <TouchableOpacity style={{
                    backgroundColor: "blue",
                    padding: 20
                }} onPress={() => this.handleSubmit()}>

                    <Text style={[mainStyles.text, {
                        color: "white",
                        textAlign: "center"
                    }]}> Login </Text>
                </TouchableOpacity>
            </View>
        </View>
    }
}

const mapStateToProps = state => {

    return {

        userData: state.user
    }
}

export default connect(mapStateToProps)(Login);