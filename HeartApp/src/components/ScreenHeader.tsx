import {StyleSheet, TouchableOpacity, View, Image} from 'react-native';
import React from 'react';
import {COLORS, ICONS, SIZES} from '../resources';
import {Center, Text} from 'native-base';

interface ScreenHeaderProps {
  title: string;
  backPress: () => void;
}
const ScreenHeader = (props: ScreenHeaderProps) => {
  return (
    <View
      style={{
        width: '100%',
        backgroundColor: '#e11d48',
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        paddingVertical: '5%',
        paddingHorizontal: '5%',
        flexDirection: 'row',
        alignItems: 'center',
      }}>
      <TouchableOpacity onPress={props.backPress}>
        <Image
          style={{tintColor: COLORS.white, height: 40, width: 40}}
          source={ICONS.BACK_ICON}
        />
      </TouchableOpacity>

      <View style={{flex: 1, paddingHorizontal: '5%'}}>
        <Text
          mt={3}
          flex={1}
          w={'100%'}
          style={{fontSize: 20}}
          color={'white'}
          italic
          bold>
          {props.title}
        </Text>
      </View>
    </View>
  );
};

export default ScreenHeader;

const styles = StyleSheet.create({});
