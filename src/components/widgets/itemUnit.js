import React from "react";
import {
    View,
    Text,
    Image,
    TouchableOpacity
} from 'react-native';

import styles from "../../../styles";

const ItemUnit = ({ item, index, handleDetails }) => {



    return <View style={styles.itemUnit}>

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

                <TouchableOpacity style={styles.view} onPress={() => handleDetails(item)}>
                    <Text style={[styles.text, styles.viewText]} > View Product</Text>
                </TouchableOpacity>
            </View>

        </View>
        {/* end content */}
    </View>
}


export default ItemUnit