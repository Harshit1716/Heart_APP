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

const Details = (props: any) => {
  const [input, setInput] = useState('');
  const [listData, setListData] = useState([]);
  const strings = useAppSelector(state => state.userReducer.string);

  useEffect(() => {
    setListData(props.route.params.data.data);
  }, [props.route?.params?.data]);

  return (
    <View
      style={{
        flex: 1,
        height: '100%',
        width: '100%',
        backgroundColor: COLORS.white,
      }}>
      <Header title={props.route?.params?.data?.title} />

      <ScrollView>
        <View
          style={{
            justifyContent: 'space-between',
            marginTop: '5%',
          }}>
          <Heading ml={10} mb={5}>
            {props.route?.params?.data?.title}
          </Heading>
          <Text
            style={{
              marginLeft: '10%',
              fontFamily: 'Poppins-Medium',
              color: COLORS.black,
              fontSize: 12,
            }}>
            By : Dr.Rajeev Rathi
          </Text>
        </View>

        <View
          style={{
            paddingBottom: '10%',
            width: '90%',
            marginTop: 20,
            alignSelf: 'center',
            paddingHorizontal: '5%',
          }}>
          <FlatList
            data={listData}
            renderItem={({item}) => (
              <Text
                style={{
                  marginBottom: 20,
                  width: '100%',
                  color: COLORS.black,
                  fontFamily: 'Poppins-Regular',
                }}>
                {item + ''}
              </Text>
            )}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default Details;

const styles = StyleSheet.create({});
