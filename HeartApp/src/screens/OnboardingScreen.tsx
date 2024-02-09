import {Image, StyleSheet, Text} from 'react-native';
import React from 'react';
import {Center, Heading, View} from 'native-base';
import {COLORS, ICONS} from '../resources';
import {useAppDispatch} from '../stateManagemer/Store';
import {setBannerData} from '../stateManagemer/slice/UserSlice';

const OnboardingScreen = () => {
  const dispatch = useAppDispatch();
  const fetchData = async () => {
    await fetch('http://heartapp.technochords.com/api/get-banners')
      .then(res => res.json())
      .then(async res => {
        console.log(res?.response, 'HERE');
        await dispatch(setBannerData(res));
        // setDataList(res.response);
      })
      .catch(er => {
        console.log(er);
      });
    // setFlag(true);
  };
  return (
    <View style={{backgroundColor: COLORS.white, flex: 1}}>
      <Image
        resizeMode="contain"
        style={{
          marginTop: '10%',
          height: 120,
          width: 120,
          alignSelf: 'center',
        }}
        source={ICONS.LOGO_ICON}
      />
    </View>
  );
};

export default OnboardingScreen;

const styles = StyleSheet.create({});
