import * as FileSystem from 'expo-file-system';

const createRecord = async (record) => {
  try {
    const path = FileSystem.documentDirectory + 'records.json';
    
    // Check if the file already exists
    const fileInfo = await FileSystem.getInfoAsync(path);
    let records = [];
    
    if (fileInfo.exists) {
      // Read existing records
      const existingData = await FileSystem.readAsStringAsync(path);
      records = JSON.parse(existingData);
    }
    
    // Add new record
    records.push(record);
    await FileSystem.writeAsStringAsync(path, JSON.stringify(records));
    console.log('Record saved!');
  } catch (e) {
    console.error('Error saving record:', e);
  }
};

const getRecords = async () => {
  try {
    const path = FileSystem.documentDirectory + 'records.json';
    const fileInfo = await FileSystem.getInfoAsync(path);
    
    if (fileInfo.exists) {
      const data = await FileSystem.readAsStringAsync(path);
      return JSON.parse(data);
    }
    return []; // No records yet
  } catch (e) {
    console.error('Error reading records:', e);
    return [];
  }
};

export { createRecord, getRecords };
