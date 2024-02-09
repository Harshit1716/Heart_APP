import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Home} from '../screens';
import Details from '../screens/Details';
import {Login} from '../screens';
import {useAppDispatch, useAppSelector} from '../stateManagemer/Store';
import BottomTab from './BottomTabs';
import Quiz from '../screens/Quiz';
import KnowYourHeart from '../screens/KnowYourHeart';
import SignUp from '../screens/SignUp';
import OnboardingScreen from '../screens/OnboardingScreen';
import {setLoading} from '../stateManagemer/slice/UserSlice';
import ChangePassword from '../screens/ChangePassword';
import UpdateProfile from '../screens/UpdateProfile';
import TestAgreement from '../screens/TestAgreement';

const RootStack = createNativeStackNavigator();
const RootNavigation = () => {
  const user = useAppSelector(state => state.userReducer.email);
  const [flag, setFlag] = useState(false);

  return (
    <NavigationContainer>
      <RootStack.Navigator
        screenOptions={{
          headerStyle: {
            // backgroundColor: '#e11d48',
            // color: 'white',
          },
        }}>
        {user == '' && (
          <RootStack.Screen
            name="Login"
            options={{headerShown: false}}
            component={Login}
          />
        )}
        {user == '' && (
          <RootStack.Screen
            name="SignUp"
            options={{headerShown: false}}
            component={SignUp}
          />
        )}
        {user !== '' && (
          <RootStack.Screen
            options={{headerShown: false}}
            name="Tabs"
            component={BottomTab}
          />
        )}
        {user !== '' && (
          <RootStack.Screen
            options={{headerShown: false}}
            name="Quiz"
            component={Quiz}
          />
        )}
        {user !== '' && (
          <RootStack.Screen
            options={{headerShown: false}}
            name="Know Your Heart"
            component={KnowYourHeart}
          />
        )}
        {user !== '' && (
          <RootStack.Screen
            options={{headerShown: false}}
            name="Details"
            component={Details}
          />
        )}
        {user !== '' && (
          <RootStack.Screen
            options={{headerShown: false}}
            name="ChangePassword"
            component={ChangePassword}
          />
        )}
        {user !== '' && (
          <RootStack.Screen
            options={{headerShown: false}}
            name="UpdateProfile"
            component={UpdateProfile}
          />
        )}
        {user !== '' && (
          <RootStack.Screen
            options={{headerShown: false}}
            name="Agreement"
            component={TestAgreement}
          />
        )}
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigation;

const styles = StyleSheet.create({});
