import React from "react";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack"
import { createBottomTabNavigator } from "react-navigation-tabs"
import HomeScreen from "./src/components/screens/home";
import CartScreen from "./src/components/screens/cart";
import MessageScreen from "./src/components/screens/messages";
import SettingsScreen from "./src/components/screens/settings";
import SearchScreen from "./src/components/screens/search";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Entypo from "react-native-vector-icons/Entypo"
import DetailsScreen from "./src/components/details/details";
import StatusScreen from "./src/components/screens/status";
import PaymentScreen from "./src/components/screens/payment"
import LoginScreen from "./src/components/screens/login";
import styles from "./styles"
import {
    TouchableOpacity
} from "react-native";

import {
    Text,
    View
} from "react-native";

//switchStack

const SwitchStack = createSwitchNavigator({

    Status: {
        screen: StatusScreen,
        navigationOptions: ({ navigation }) => ({
            headerTitle: null
        })
    },
    Search: {
        screen: SearchScreen
    },
    Payment: {
        screen: PaymentScreen
    }

})

// stack navigator
const HomeStack = createStackNavigator({

    Login: {

        screen: LoginScreen,
        navigationOptions: ({ navigation }) => ({
            header: null
        })
    },

    Home: {
        screen: HomeScreen,
        navigationOptions: ({ navigation }) => ({
            title: "EscoShop",
            headerLeft: () => <View style={{
                paddingLeft: 10
            }}>
                <FontAwesome name="bars" size={30} color="rgba(0,0,0, 0.6)" />
            </View>,

        })

    },


    SwitchStack: {
        screen: SwitchStack,
        navigationOptions: () => ({
            header: null
        })
    },
    Details: {
        screen: DetailsScreen,
        navigationOptions: ({ navigation }) => ({
            title: "Details Screen",
            headeLeft: null
        })
    },

}, {
    // headerLayoutPreset: "center ",
    defaultNavigationOptions: ({ navigation }) => ({
        headerTitleAlign: "center",
        headerStyle: {
            height: 70
        },
        headerTitleStyle: {
            fontSize: 30,
            fontFamily: "firaBold",
            color: "rgba(0, 0, 0, .7)"
        },



        headerRight: () => <View style={{
            paddingRight: 10
        }}>
            <FontAwesome name="shopping-cart" size={30} color="rgba(0,0,0, 0.6)"
                onPress={() => navigation.navigate("Cart")} />
        </View>,

    })
});


// bottom navigator
const BottomNav = createBottomTabNavigator({

    Home: {
        screen: HomeStack,
        navigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused, tintColor }) => (
                <FontAwesome name="home" size={30} color={tintColor} />
            )
        })
    },
    Cart: {
        screen: CartScreen,
        navigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused, tintColor }) => (
                <FontAwesome name="shopping-cart" size={30} color={tintColor} />
            )
        })
    },
    Messages: {
        screen: MessageScreen,
        navigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused, tintColor }) => (
                <Entypo name="mail" size={30} color={tintColor} />
            )
        })
    },
    Settings: {
        screen: SettingsScreen,
        navigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused, tintColor }) => (
                <FontAwesome name="cog" size={30} color={tintColor} />
            )
        })
    }
}, {
    initialRouteName: "Home",
    tabBarOptions: {
        showLabel: false,
        activeTintColor: "#5C77FF",
    },
})

export default createAppContainer(BottomNav)