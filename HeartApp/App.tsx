import {Alert, LogBox, Platform, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Home} from './src/screens';
import {Provider} from 'react-redux';
import {store} from './src/stateManagemer/Store';
import RootNavigation from './src/navigation/RootNavigation';
import {NativeBaseProvider} from 'native-base';
import SplashScreen from 'react-native-splash-screen';
import {PermissionsAndroid} from 'react-native';
import messaging from '@react-native-firebase/messaging';
import PushNotification from 'react-native-push-notification';
import {Utils} from './src/resources';
import {COLORS, ICONS, SHADOW, SIZES} from './src/resources';

const App = () => {
  const [flag, setFlag] = useState(false);
  // PushNotification.configure({
  //   onRegister: function (token) {
  //     console.log('TOKEN:', token);
  //   },

  //   onNotification: function (notification) {
  //     console.log('NOTIFICATION:', notification);
  //     // notification.finish(PushNotificationIOS.FetchResult.NoData);
  //   },
  //   onAction: function (notification) {
  //     console.log('ACTION:', notification.action);
  //     console.log('NOTIFICATION:', notification);
  //   },
  //   onRegistrationError: function (err) {
  //     console.error(err.message, err);
  //   },
  //   permissions: {
  //     alert: true,
  //     badge: true,
  //     sound: true,
  //   },

  //   popInitialNotification: true,
  //   requestPermissions: true,
  // });
  const getDeviceToken = async () => {
    await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS,
    );
    await messaging().registerDeviceForRemoteMessages();
    const token = await messaging().getToken();
    console.log(token);
  };
  const configureLocalNotifications = async () => {
    // let data = await Utils.getNotificationData();
    // try {
    //   if (Platform.OS == 'android')
    //     PushNotification.createChannel(
    //       {
    //         channelId: 'daily-reminder',
    //         channelName: 'Daily Reminder',
    //       },
    //       res => {
    //         if (!flag) {
    //           setFlag(true);
    //           PushNotification.localNotificationSchedule({
    //             channelId: 'daily-reminder',
    //             title: data.title,
    //             message: data.message,
    //             date: new Date(new Date().setHours(10, 0, 0, 0)), // 10 AM every day
    //             repeatType: 'day',
    //           });
    //         }
    //       },
    //     );
    // } catch (er) {
    //   console.log(er);
    // }
  };

  useEffect(() => {
    getDeviceToken();
    messaging().onMessage(async remoteMessage => {
      // testFunction(remoteMessage);
    });
    configureLocalNotifications();
  }, []);

  useEffect(() => {
    // Alert.alert("hide")
    async function prepare() {
      try {
        // our api calls will be here.
        new Promise(resolve => setTimeout(resolve, 10000)); // wait for 5 secs
      } catch (e) {
        console.warn(e);
      } finally {
        // Alert.alert("hide")
        SplashScreen.hide();
      }
    }
    prepare();
  });

  const testFunction = async (remoteMessage: any) => {
    const data = await {
      id: 0,
      title: remoteMessage?.notification?.title ?? 'notification',
      message: remoteMessage?.notification?.body ?? 'notification',
      picture: remoteMessage?.notification?.smallIcon ?? ICONS.SMALL_ICON,
    };
    PushNotification.localNotification(data);
  };
  LogBox.ignoreAllLogs();
  return (
    <NativeBaseProvider>
      <Provider store={store}>
        <RootNavigation />
      </Provider>
      {/* <PushController /> */}
    </NativeBaseProvider>
  );
};

export default App;

const styles = StyleSheet.create({});
function dispatch(arg0: any) {
  throw new Error('Function not implemented.');
}
