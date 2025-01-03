import React, { useState } from 'react';
import { View, Button, Image } from 'react-native';

const NewFormButton = ({onPress}) => {
  return (
    <View title={'New form'} style={styles.container}>
        <Image source={require('../assets/editImage.png')} style={styles.editImage} />
    </View>
  );
}

const buttonSize = 85;
const styles = {
    container: {
        flex: 1,
        position: 'absolute', 
        backgroundColor: '#fff',
        borderColor: 'black',
        borderWidth: 4,
        borderRadius: buttonSize,
        width: buttonSize,
        height: buttonSize,
        bottom: 20, 
        right: 20,
        zIndex: 2,
        justifyContent: 'center',
        alignItems: 'center',
    },
    editImage: {
        width: 50,
        height: 50,
        paddingRight: 5,
        paddingBottom: 5,  
    }
};

export default NewFormButton;