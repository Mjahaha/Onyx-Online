import React from 'react';
import { View, Alert, StyleSheet, TouchableOpacity } from 'react-native';

const TestScreen = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.touchable} onPress={() => Alert.alert('Touched!')}>
        <View style={styles.box} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  touchable: {
    width: 200,
    height: 200,
    backgroundColor: 'blue',
  },
  box: {
    flex: 1,
  },
});

export default TestScreen;
