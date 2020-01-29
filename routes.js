import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack"
import { createBottomTabNavigator } from "react-navigation-tabs"
import HomeScreen from "./src/components/screens/home";
import CartScreen from "./src/components/screens/cart";
import MessageScreen from "./src/components/screens/messages";
import SettingsScreen from "./src/components/screens/settings";
import SearchScreen from "./src/components/screens/search";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Entypo from "react-native-vector-icons/Entypo"
import HeaderLeft from "./src/components/widgets/headerLeft";
import styles from "./styles"
import {
    TouchableOpacity
} from "react-native";

import {
    Text,
    View
} from "react-native";

// stack navigator
const HomeStack = createStackNavigator({

    Home: {
        screen: HomeScreen,
        navigationOptions: ({ navigation }) => ({
            title: "EscoShop",

        })

    },
    Search: {
        screen: SearchScreen
    }
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

        headerLeft: () => <View style={{
            paddingLeft: 10
        }}>
            <FontAwesome name="bars" size={30} color="rgba(0,0,0, 0.6)" />
        </View>,

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
                <FontAwesome name="envelope-o" size={30} color={tintColor} />
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