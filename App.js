import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Banner from './components/Banner';
import MapScreen from './components/Map';
import NewFormButton from './components/NewFormButton';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createRecord, getRecords } from './database/CRUD';

// Get data from database
const recordData = async () => {
    try {
        const records = await getRecords(); // Use it directly
        console.log('Records:', records);
        return records;
    } catch (error) {
        console.error('Error fetching records:', error);
    }
};


// Main App component
export default function App() {
  const [records, setRecords] = useState([]);

  useEffect(() => {
      const fetchData = async () => {
          const data = await recordData();
          setRecords(data);
      };
      fetchData();
  }, []);

  return (
    <View style={styles.container}>
      <Banner style={styles.banner} />
      <View style={styles.content}>
        <MapScreen records={records}/>
      </View>
      <Text>               {typeof records}123</Text>
    </View>
  );
}

// <NewFormButton />

// Styling for the App component
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
