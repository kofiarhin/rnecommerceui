import React, { Component } from 'react'
import { Text, View, Button } from 'react-native'
import { connect } from "react-redux";
import { getUser, logoutUser, clearCart, getCart } from "../../../actions";
import _ from "lodash";


class settings extends Component {

    componentDidMount() {

        this.props.dispatch(getUser());
    }

    handleLogout = () => {

        this.props.dispatch(logoutUser());
        this.props.dispatch(getUser());
        this.props.dispatch(clearCart())
        this.props.dispatch(getCart());
        this.props.navigation.navigate("Home")
    }

    renderUser = data => {

        if (data && data.length > 0) {

            let user = JSON.parse(data);
            return <View>

                <Text style={{
                    fontSize: 30,
                    marginBottom: 20,
                    textAlign: "center",
                    marginTop: 20
                }}> Hi {user.name} </Text>

                <Button title="Logout" onPress={() => this.handleLogout()} />
            </View>
        }

    }
    render() {
        return (
            <View>
                {this.renderUser(this.props.userData.userData)}
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
