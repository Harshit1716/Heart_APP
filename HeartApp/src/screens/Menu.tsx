import {
  Alert,
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {COLORS, FONTS, ICONS, SHADOW, SIZES, Utils} from '../resources';
import {useAppDispatch, useAppSelector} from '../stateManagemer/Store';
import {logout, setLangugae} from '../stateManagemer/slice/UserSlice';
import {Button, Heading, Modal, Radio, VStack} from 'native-base';

import {STRINGS} from '../resources';
import Header from '../components/Header';
import CommingSoonModal from '../components/CommingSoonModal';

const Account = () => {
  const navigation = useNavigation();
  const dispatch = useAppDispatch();
  const language = useAppSelector(state => state.userReducer.language);
  const strings = useAppSelector(state => state.userReducer.string);
  const [selectedLang, setSelectedLang] = useState(language);
  const [modalVisible, setModalvisible] = useState(false);
  const [commingSoon, setCommingSoon] = useState(false);

  const options = [
    {
      title: strings.about,
      screen: 'About',
    },
    {
      title: strings.change_password,
      screen: 'Change Password',
    },
    {
      title: strings.select_language,
      screen: '',
    },
    {
      title: strings.logout,
      screen: 'Logout',
    },
  ];

  const listRow = ({item, index}: {item: any; index: number}) => {
    return (
      <TouchableOpacity
        onPress={() => {
          if (item.title == strings.logout) {
            dispatch(logout());
            return;
          }
          if (item.title == strings.select_language) {
            setModalvisible(true);
            return;
          }
          if (item.title == strings.change_password) {
            navigation.navigate('ChangePassword');
            return;
          } else {
            setCommingSoon(true);
          }
        }}
        style={styles.rowContainer}>
        <Text
          style={{
            flex: 1,
            marginLeft: '5%',
            color: COLORS.black,
            // fontWeight: 'bold',
            fontFamily: 'Poppins-Medium',
            fontSize: 16,
          }}>
          {item.title}
        </Text>
        <Image
          style={{tintColor: COLORS.gray, height: 30, width: 30}}
          source={ICONS.FORWARD_ICON}
        />
      </TouchableOpacity>
    );
  };

  const versionComponent = () => {
    return (
      <View
        style={{justifyContent: 'center', alignItems: 'center', padding: '5%'}}>
        <Text style={{color: COLORS.gray}}>Version 1.0.0</Text>
        <Text style={{color: COLORS.gray}}>The Heart </Text>
        <Text style={{color: COLORS.gray}}>Technochords.com</Text>
      </View>
    );
  };

  const handleLanguageSelection = (lang: string) => {
    if (selectedLang == 'English') {
      dispatch(setLangugae('English'));
    } else if (selectedLang == 'Hindi') {
      dispatch(setLangugae('Hindi'));
    }
    setModalvisible(false);
  };

  return (
    <View style={styles.container}>
      <Header title={strings.menu} />
      <ScrollView>
        <TouchableOpacity
          onPress={() => {
            setCommingSoon(true);
          }}
          style={{marginVertical: '5%', ...styles.rowContainer}}>
          <Text
            style={{
              flex: 1,
              // marginTop: '5%',
              color: COLORS.black,
              // fontWeight: 'bold',
              fontFamily: 'Poppins-Medium',
              fontSize: 16,
              marginLeft: '5%',
            }}>
            {strings.help_center}
          </Text>
          <Image
            style={{tintColor: COLORS.gray, height: 30, width: 30}}
            source={ICONS.FORWARD_ICON}
          />
        </TouchableOpacity>
        <FlatList data={options} renderItem={listRow} />
        {versionComponent()}

        <Modal
          isOpen={modalVisible}
          size="lg"
          onClose={() => console.log(false)}>
          <Modal.Content maxWidth="350">
            <Modal.CloseButton
              onPress={() => {
                setModalvisible(false);
              }}
            />
            <Modal.Header>Select Language</Modal.Header>
            <Modal.Body>
              <Radio.Group
                name="payment"
                size="sm"
                value={selectedLang}
                onChange={nextValue => {
                  setSelectedLang(nextValue);
                }}>
                <VStack space={3}>
                  <Radio
                    colorScheme={'rose'}
                    alignItems="flex-start"
                    _text={{
                      mt: '-1',
                      ml: '2',
                      fontSize: 'sm',
                    }}
                    value="English">
                    English
                  </Radio>
                  <Radio
                    colorScheme={'rose'}
                    alignItems="flex-start"
                    _text={{
                      mt: '-1',
                      ml: '2',
                      fontSize: 'sm',
                    }}
                    value="Hindi">
                    हिन्दी
                  </Radio>
                </VStack>
              </Radio.Group>
            </Modal.Body>
            <Modal.Footer>
              <Button
                my={1}
                colorScheme={'rose'}
                flex="1"
                onPress={() => {
                  handleLanguageSelection(selectedLang);
                }}>
                Select
              </Button>
            </Modal.Footer>
          </Modal.Content>
        </Modal>
        <CommingSoonModal
          isModalVisible={commingSoon}
          onPress={() => {
            setCommingSoon(false);
          }}
          onClose={() => setCommingSoon(false)}
        />
      </ScrollView>
    </View>
  );
};

export default Account;

const styles = StyleSheet.create({
  container: {
    flex: 1,

    // padding: 0,
    backgroundColor: COLORS.lightGray1,
  },
  rowContainer: {
    backgroundColor: COLORS.white,
    padding: '4%',
    borderBottomWidth: 1,
    // marginBottom: '2%',
    borderBottomColor: COLORS.lightGray1,
    flexDirection: 'row',
    alignItems: 'center',
  },
});
