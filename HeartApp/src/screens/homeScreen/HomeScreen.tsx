import {
  Alert,
  Button,
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useAppDispatch, useAppSelector} from '../../stateManagemer/Store';

import {COLORS, ICONS, SHADOW, SIZES, Utils} from '../../resources';
import Banners from '../../components/Banners';
import Header from '../../components/Header';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import {getQuestions, resetOption} from '../../stateManagemer/slice/UserSlice';
import MainView from '../../components/MainView';
import Item from '../../components/ListItem';
import CommingSoonModal from '../../components/CommingSoonModal';

const OfferData = [
  {
    title: 'Item 1',
    img: ICONS.BANNER_ICON,
    text: 'Text 1',
  },
  {
    title: 'Item 2',
    img: ICONS.BANNER_ICON3,
    text: 'Text 2',
  },
  {
    title: 'Item 3',
    img: ICONS.BANNER_ICON,
    text: 'Text 3',
  },
  {
    title: 'Item 4',
    img: ICONS.BANNER_ICON3,
    text: 'Text 4',
  },
  {
    title: 'Item 5',
    img: ICONS.BANNER_ICON,
    text: 'Text 5',
  },
];

const HomeScreen = () => {
  const strings = useAppSelector(state => state.userReducer.string);
  const user = useAppSelector(state => state.userReducer);
  const dispatch = useAppDispatch();
  const [commingSoon, setCommingSoon] = useState(false);
  const serviceList = [
    {
      name: strings.know_your_heart,
      screen: 'Know Your Heart',
      icon: ICONS.HEART_ICON,
    },
    {
      name: strings.take_the_test,
      screen: 'Agreement',
      icon: ICONS.TEST_ICON,
    },
    {
      name: strings.connect_with_cardiologist,
      screen: '',
      icon: ICONS.CARDIOLOGIST_ICON,
    },
  ];
  const MyHealthList = [
    {
      name: strings.medical_records,
      screen: '',
      icon: ICONS.RECORDS_ICON,
    },
    {
      name: strings.inr_clinic,
      screen: '',
      icon: ICONS.CLINIC_ICON,
    },
    {
      name: strings.health_blogs,
      screen: '',
      icon: ICONS.BLOGS_ICON,
    },
  ];
  const BeHealthyList = [
    {
      name: strings.diet_exercise,
      screen: '',
      icon: ICONS.EXERCISE_ICON,
    },
    {
      name: strings.health_updates,
      screen: '',
      icon: ICONS.NEWS_ICON,
    },
    {
      name: strings.join_health_hearts,
      screen: '',
      icon: ICONS.HEART_ICON,
    },
  ];

  React.useEffect(() => {
    dispatch(getQuestions());

    Utils.storeData('userData', user);
  }, []);
  useFocusEffect(
    React.useCallback(() => {
      dispatch(resetOption());
    }, []),
  );

  const navigation = useNavigation();

  const listItem = (item: any) => {
    return (
      <TouchableOpacity
        onPress={() => {
          if (item.screen) navigation.navigate(item.screen);
          else setCommingSoon(true);
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
            color: COLORS.gray,
            flex: 1,
            marginLeft: 10,
            fontSize: 16,
            // fontStyle: 'italic',
            // fontWeight: '700',
            fontFamily: 'Poppins-SemiBold',
          }}>
          {item.name}
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
  };
  const list = (list: any) => {
    return <Item onPress={() => setCommingSoon(true)} list={list} />;
  };

  const horizontalList = (list: any) => {
    return (
      <View style={{marginTop: 10}}>
        {(list ?? []).map((item: any) => listItem(item))}
      </View>
    );
  };

  const section = (title: string, data: any) => {
    return (
      <View
        style={{
          paddingVertical: '3%',
        }}>
        <Text style={{marginBottom: 5, ...styles.heading}}>{title}</Text>
        {list(data)}
      </View>
    );
  };
  return (
    <MainView>
      <View
        style={{
          flex: 1,
        }}>
        <View>
          <Header title={strings.keep_heart_healthy} />
        </View>

        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{
            width: '100%',
            height: SIZES.height,
          }}>
          <Banners data={OfferData} />
          {section(strings.connect, serviceList)}
          {section(strings.my_health, MyHealthList)}
          <View
            style={{
              paddingVertical: '3%',
            }}>
            <Text style={{marginBottom: 5, ...styles.heading}}>
              {strings.be_healthy}
            </Text>
            {horizontalList(BeHealthyList)}
          </View>
          <View style={{height: SIZES.height * 0.1, width: '100%'}}></View>
        </ScrollView>
        <CommingSoonModal
          isModalVisible={commingSoon}
          onPress={() => {
            setCommingSoon(false);
          }}
          onClose={() => setCommingSoon(false)}
        />
      </View>
    </MainView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  heading: {
    marginLeft: '5%',
    // marginTop: '5%',
    // fontFamily: 'Poppins-Regular',
    color: COLORS.black,
    fontFamily: 'Poppins-Medium',
    // fontWeight: 'bold',
    fontSize: 20,
  },
});
