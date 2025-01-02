import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Banner from './components/Banner';
import MapScreen from './components/Map';
import TestScreen from './components/TestScreen';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import MyScrollView from './components/MyScrollView';

export default function App() {
  return (
    <View style={styles.container}>
      <Banner style={styles.banner} />
      <View style={styles.content}>
        <MapScreen />
      </View>
    </View>
  );
}
//<Banner style={styles.banner} />
/*
    <View style={styles.container}>
      <Banner style={styles.banner} />
      <View style={styles.content}>
        <MapScreen />
      </View>
    </View>
    */

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  banner: {
    flex: 1,
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});