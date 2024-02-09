import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';

import LinearGradient from 'react-native-linear-gradient';
import {Heading} from 'native-base';
import {COLORS, SIZES} from '../resources';

interface BtnProps {
  title: string;
  onPress: () => void;
}

const CustomAppBtn = (props: BtnProps) => {
  return (
    <TouchableOpacity style={{marginBottom: 20}} onPress={props.onPress}>
      <LinearGradient
        style={{
          borderRadius: 10,
          padding: '4%',
          width: SIZES.width * 0.6,
          //   width: '100%',
          alignSelf: 'center',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        colors={[COLORS.header2, COLORS.header3]}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}>
        <Heading size={'md'} color={'white'}>
          {props.title}
        </Heading>
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default CustomAppBtn;

const styles = StyleSheet.create({});
