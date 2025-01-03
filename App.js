import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Banner from './components/Banner';
import MapScreen from './components/Map';
import NewFormButton from './components/NewFormButton';


export default function App() {
  return (
    <View style={styles.container}>
      <Banner style={styles.banner} />
      <View style={styles.content}>
        <MapScreen />
      </View>
      <NewFormButton />
    </View>
  );
}



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