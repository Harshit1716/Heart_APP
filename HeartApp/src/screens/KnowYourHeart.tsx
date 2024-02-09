import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {COLORS, ICONS, SHADOW, SIZES} from '../resources';
import {Heading, ScrollView, Box, FlatList} from 'native-base';
import ScreenHeader from '../components/ScreenHeader';
import {useNavigation} from '@react-navigation/native';
import {useAppSelector} from '../stateManagemer/Store';
import Header from '../components/Header';

const KnowYourHeart = () => {
  const [input, setInput] = useState('');
  const [listData, setListData] = useState<{title: string; icon: any}[]>();
  const strings = useAppSelector(state => state.userReducer.string);
  const list = [
    {
      title: strings.what_is_an_heart_attack,
      icon: ICONS.HEART_ATTACK_ICON,
      data: strings.what_is_an_heart_attack_data,
    },
    {
      title: strings.warning_signs,
      icon: ICONS.HEART_WARNING_ICON,
      data: strings.warning_signs_data,
    },
    {
      title: strings.presentation_in_women,
      icon: ICONS.HEART_WOMEN_ICON,
      data: strings.presentation_in_women_data,
    },
    {
      title: strings.what_is_an_emergency,
      icon: ICONS.HEART_EMERGENCY_ICON,
      data: strings.what_is_an_emergency_data,
    },
    {
      title: strings.test_procedures,
      icon: ICONS.TEST_ICON,
      data: strings.test_procedures_data,
    },
    {
      title: strings.treatement_of_acute_heart_attack,
      icon: ICONS.HEART_TREATEMENT_ICON,
      data: strings.treatement_of_acute_heart_attack_data,
    },
    {
      title: strings.preventation_strategy,
      icon: ICONS.HEART_PREVENTATION_ICON,
      data: strings.preventation_strategy_data,
    },
  ];
  useEffect(() => {
    let ar = list.filter(item =>
      item.title.toLocaleLowerCase().includes(input.toLocaleLowerCase()),
    );
    setListData(ar);
  }, [input]);
  const navigation = useNavigation();
  return (
    <View
      style={{
        flex: 1,
        height: '100%',
        width: '100%',
        backgroundColor: COLORS.lightGray1,
      }}>
      <Header title={strings.know_your_heart} />
      <View
        style={{
          padding: '1%',
          justifyContent: 'center',
          backgroundColor: 'white',
          ...SHADOW,
          alignSelf: 'center',
          marginTop: 20,
          width: '90%',
          borderRadius: 10,
          flexDirection: 'row',
          marginBottom: 10,
        }}>
        <Image
          style={{
            height: 40,
            width: 40,
            marginTop: 3,
            tintColor: COLORS.primary,
          }}
          source={ICONS.SEARCH_ICON}></Image>
        <TextInput
          style={{
            width: '70%',
            flex: 1,
            fontStyle: 'italic',
            marginLeft: 10,
            color: COLORS.black,
          }}
          placeholder={strings.search}
          value={input}
          onChangeText={text => setInput(text)}></TextInput>
      </View>
      <FlatList
        ListFooterComponent={() => (
          <View style={{height: SIZES.height * 0.2}}></View>
        )}
        data={listData}
        renderItem={({item, index}) => {
          return (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Details', {data: item});
              }}
              style={{
                width: '90%',
                alignSelf: 'center',
                backgroundColor: COLORS.white,
                padding: '5%',
                borderWidth: 0.3,
                borderRadius: 10,
                ...SHADOW,
                marginBottom: 10,
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Image
                resizeMode="contain"
                style={{
                  width: 40,
                  height: 40,
                  tintColor: COLORS.primary,
                }}
                source={item?.icon}
              />
              <Text
                style={{
                  flex: 1,
                  marginLeft: 10,
                  fontSize: 16,
                  // fontStyle: 'italic',
                  fontFamily: 'Poppins-Medium',
                  // fontWeight: '700',
                  color: COLORS.black,
                }}>
                {item.title}
              </Text>
              <Image
                style={{
                  tintColor: COLORS.black,
                  width: 20,
                  height: 20,
                }}
                source={ICONS.FORWARD_ICON}
              />
            </TouchableOpacity>
          );
        }}></FlatList>
    </View>
  );
};

export default KnowYourHeart;

const styles = StyleSheet.create({});
