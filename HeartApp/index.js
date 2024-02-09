/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import messaging from '@react-native-firebase/messaging';
// messaging().setBackgroundMessageHandler(async remoteMessage => {
//   // Handle the incoming background message here
//   console.log('Received background message:', remoteMessage);
// });
// messaging().getInitialNotification(async remoteMessage => {
//   // Handle the incoming background message here
//   console.log('Received Kill message:', remoteMessage);
// });

AppRegistry.registerComponent(appName, () => App);
