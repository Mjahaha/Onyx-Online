import * as SQLite from 'expo-sqlite';
import { createRecord } from './CRUD';

const db = SQLite.openDatabase('myDatabase.db');

// Example
const testData = [
  { title: 'Bensons', coordinate: { latitude: -32.251706, longitude: 148.569655 } },
  { title: 'Pridgeons', coordinate: { latitude: -32.256918, longitude: 148.64977 } },
  { title: 'Bunnings', coordinate:{ latitude: -32.260862, longitude: 148.647195 } },
];
createRecord(testData[0].title, testData[0].coordinate, '');
createRecord(testData[1].title, testData[1].coordinate, '');
createRecord(testData[2].title, testData[2].coordinate, '');
