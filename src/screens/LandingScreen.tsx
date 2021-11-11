import React from 'react';
import {View, StyleSheet, Text, Image, Dimensions} from 'react-native';

export const LandingScreen = () => {
    return(
        <View style={ styles.container }>
            <View style={ styles.navigation}></View>
            <View style={ styles.body }>
                <Image source= {require('../images/delivery_icon.png')} style={styles.deliveryIcon} />
                <View style= {styles.addressContainer}>
                    <Text>Delivery Address</Text>
                </View>
            </View>
            <View style={ styles.footer }></View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgba(242,242,242, 1)'
    },

    navigation: {
        flex: 2,
    },
    body: {
        flex: 9,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'yellow'
    },
    footer: {
        flex: 1,
    },
    deliveryIcon:{
        width: 120,
        height: 120
    },
    addressContainer: {
        
    }
})