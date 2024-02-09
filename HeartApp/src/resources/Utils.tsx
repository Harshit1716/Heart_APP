import AsyncStorage from '@react-native-async-storage/async-storage';
import {Alert} from 'react-native';

export const storeData = async (key: string, value: any) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(key, jsonValue).then(res => {
      getData('userData');
    });
  } catch (e) {
    // saving error
    Alert.alert('Error');
  }
};

export const getData = async (key: string) => {
  try {
    let jsonValue = await AsyncStorage.getItem(key);
    jsonValue = await JSON.parse(jsonValue ?? '');
    return jsonValue;
  } catch (e) {
    return null;
  }
};

export const clearAll = async () => {
  try {
    await AsyncStorage.clear();
  } catch (e) {
    // clear error
  }
  console.log('Done.');
};

export const getNotificationData = () => {
  const notifications = [
    {
      title: 'Notification 1',
      message: 'This is notification 1.',
    },
    {
      title: 'Notification 2',
      message: 'This is notification 2.',
    },
    {
      title: 'Notification 3',
      message: 'This is notification 3.',
    },
  ];

  const randomIndex = Math.floor(Math.random() * notifications.length);

  return notifications[randomIndex];
};
