import React from 'react';
import { StyleSheet, Text, View, Image, StatusBar } from 'react-native';

const logo = require('../assets/Favicon.png');

const bannerStyles = StyleSheet.create({
    container: {
        backgroundColor: '#110902',
        height: 105,
        width: '100%',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        paddingTop: 35, 
        paddingLeft: 15, 
        flexDirection: 'row',
    },
    logo: {
        height: 70,
        width: 70,
        resizeMode: 'contain',
        
    },
    text: {
        color: 'white',
        fontSize: 22,
        fontWeight: 'bold',
        marginLeft: 10,
        paddingTop: 30, 
        width: '70%',
        textAlign: 'center',
        fontFamily: 'Courier',
    },
});

export default function Banner() {
    return (
        <>
        <StatusBar barStyle="light-content" backgroundColor="#110902" />
        <View style={bannerStyles.container}>
            <Image source={logo} style={bannerStyles.logo} />
            <Text style={bannerStyles.text}>Onyx Secret Stealer</Text>
        </View>
        </>
    );
}