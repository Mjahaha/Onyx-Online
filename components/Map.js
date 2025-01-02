import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';

const MapScreen = () => {

    const [location, setLocation] = useState(null);
    useEffect(() => {
        (async () => {
          // Request location permissions
          let { status } = await Location.requestForegroundPermissionsAsync();
          if (status !== 'granted') {
            console.error('Permission to access location was denied');
            return;
          }
    
          // Get user's current location
          let currentLocation = await Location.getCurrentPositionAsync({});
          setLocation(currentLocation.coords);
        })();
      }, []);

    const returnValue = (
    <View style={styles.container}>
        <MapView
            style={styles.map}
            showsUserLocation={true}
            scrollEnabled={true}          // Enable scroll/pan
            zoomEnabled={true}           // Enable zoom
            rotateEnabled={true}
            pitchEnabled={true}
            region={location ? {
                latitude: location.latitude,
                longitude: location.longitude,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
            } : undefined}
        >
        </MapView>
    </View>
    )
  return (
    returnValue
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: '90',
  },
  map: {
    flex: 1,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});

export default MapScreen;

/*
  const [location, setLocation] = useState(null);
  // Example points - replace with your data
  const [points] = useState([
    { id: 1, title: 'Point 1', coordinate: { latitude: -33.8688, longitude: 151.2093 } },
    { id: 2, title: 'Point 2', coordinate: { latitude: -33.8712, longitude: 151.2045 } },
  ]);

  useEffect(() => {
    (async () => {
      // Request location permissions
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        console.error('Permission to access location was denied');
        return;
      }

      // Get user's current location
      let currentLocation = await Location.getCurrentPositionAsync({});
      setLocation(currentLocation.coords);
    })();
  }, []);
  */

  /*
        //pointerEvents="box-none"
        //provider={PROVIDER_GOOGLE}
        region={location ? {
            latitude: location.latitude,
            longitude: location.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
        } : undefined}
        region={location ? {
            latitude: location.latitude,
            longitude: location.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
        } : undefined}
{points.map(point => (
    <Marker
      key={point.id}
      coordinate={point.coordinate}
      title={point.title}
    />
    <Marker
            coordinate={{ latitude: -33.8688, longitude: 151.2093 }}
            title="Hardcoded Marker"
            />
  ))} 
*/