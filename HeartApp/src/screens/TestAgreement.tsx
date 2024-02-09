import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  Image,
  TouchableOpacity,
  Animated,
  Alert,
  ActivityIndicator,
  FlatList,
  Platform,
} from 'react-native';
import {COLORS, ICONS, SHADOW, SIZES, Utils} from '../resources';
import {
  Box,
  Button,
  Icon,
  Input,
  Radio,
  ScrollView,
  VStack,
  Modal,
} from 'native-base';
import {useNavigation} from '@react-navigation/native';
import ScreenHeader from '../components/ScreenHeader';
import {
  Answers,
  AnswersResponse,
  Questions,
} from '../stateManagemer/models/HomeScreenModel';
import AnimatedTyping from '../components/AnimatedTyping';
import {useAppDispatch, useAppSelector} from '../stateManagemer/Store';
import Header from '../components/Header';

import {setAge} from '../stateManagemer/slice/UserSlice';
import CustomAppBtn from '../components/CustomAppBtn';
import PushNotification from 'react-native-push-notification';

const TestAgreement = () => {
  const dispatch = useAppDispatch();

  const ShowNotification = async () => {
    try {
      let data = await Utils.getNotificationData();
      if (Platform.OS == 'android')
        PushNotification.createChannel(
          {
            channelId: 'daily-reminder',
            channelName: 'Daily Reminder',
          },
          res => {
            PushNotification.localNotificationSchedule({
              channelId: 'daily-reminder',
              title: data.title,
              message: data.message,
              date: new Date(Date.now() + 1 * 1000), // in 60 se
              repeatTime: 1,
              // smallIcon: ICONS.LOGO_ICON,
              bigLargeIcon: ICONS.LOGO_ICON,
            });
          },
        );
    } catch (er) {
      console.log(er);
    }
  };
  useEffect(() => {
    ShowNotification();
  }, []);
  const currentQuestionNumber = useAppSelector(
    state => state.userReducer.currentQuestionNumber,
  );
  const navigation = useNavigation();
  const [showScoreModal, setShowScoreModal] = useState(false);
  const [scndScreen, setscndScreen] = useState(false);
  const strings = useAppSelector(state => state.userReducer.string);
  const [gender, setgender] = useState('');
  const [age, setage] = useState('');
  const [selectedGender, setSelectedGender] = useState('');
  let [genderModal, setGenderModal] = useState(false);
  async function validate() {
    if (gender == '') {
      Alert.alert('Error ', 'Please select the valid gender');
      return false;
    }
    const ageCheck = await /^\d+$/.test(age);
    if (gender == '') {
      Alert.alert('Error ', 'Please enter the age');
      return false;
    } else if (!ageCheck) {
      Alert.alert('Error ', 'Please enter a valid age');
      return false;
    }
    if (gender == 'Male' && (Number(age) < 25 || Number(age) > 90)) {
      Alert.alert('Error ', 'For test age must be b/w 25 and 90');
      return false;
    }
    if (gender == 'Female' && (Number(age) < 40 || Number(age) > 90)) {
      Alert.alert('Error ', 'For test age must be  b/w 40 and 90');
      return false;
    }

    dispatch(setAge({age: Number(age), gender: gender == 'Male' ? 1 : 2}));
    navigation.replace('Quiz');
  }
  return (
    <View
      style={{
        flex: 1,
        width: '100%',
        backgroundColor: COLORS.white,
        alignItems: 'center',
      }}>
      <Header title={strings.take_the_test} />
      {showScoreModal ? (
        <View
          style={{flex: 1, width: SIZES.width, marginTop: 30, padding: '5%'}}>
          {!scndScreen && (
            <>
              <Text
                style={{
                  fontSize: 24,
                  marginLeft: 5,
                  // fontWeight: '700',
                  color: COLORS.black,
                  fontFamily: 'Poppins-Medium',
                  marginBottom: 10,
                }}>
                Steps
              </Text>
              <Text
                style={{
                  fontFamily: 'Poppins-Regular',
                  marginHorizontal: 5,
                  fontSize: 18,
                  color: COLORS.gray,
                  marginBottom: 20,
                }}>
                To calculate the risk of your chest pain/ discomfort/
                breathlessness being a heart attack, answer 7 questions about
                your complaints.
              </Text>
            </>
          )}

          {scndScreen && (
            <View>
              <Text
                style={{
                  fontSize: 20,
                  marginLeft: 5,
                  // fontWeight: '700',
                  fontFamily: 'Poppins-Medium',
                  color: COLORS.black,
                  marginBottom: 10,
                }}>
                Please Select
              </Text>
              <TouchableOpacity
                onPress={() => {
                  setSelectedGender(gender);
                  setGenderModal(true);
                }}
                style={{
                  width: '100%',
                  borderRadius: 10,
                  borderWidth: 1,
                  padding: '4%',
                  borderColor: COLORS.lightGray,
                  alignItems: 'center',
                  flexDirection: 'row',
                  marginBottom: '5%',
                }}>
                <Image
                  style={{marginRight: 8, tintColor: COLORS.primary}}
                  source={ICONS.ACCOUNT_ICON}
                />
                <Text
                  style={{
                    color: COLORS.black,
                    fontSize: 12,
                    fontFamily: 'Poppins-Regular',
                  }}>
                  {gender == '' ? strings.gender : gender}
                </Text>
              </TouchableOpacity>
              <Input
                p={4}
                rounded={10}
                value={age}
                keyboardType="number-pad"
                onChangeText={txt => setage(txt)}
                mr={5}
                w={{
                  base: '100%',
                  md: '25%',
                }}
                InputLeftElement={
                  <Icon
                    as={<Image source={ICONS.ACCOUNT_ICON} />}
                    size={5}
                    ml="2"
                    tintColor={COLORS.primary}
                  />
                }
                placeholder={'please enter age'}
              />
            </View>
          )}

          <Modal
            isOpen={genderModal}
            size="lg"
            onClose={() => setGenderModal(false)}>
            <Modal.Content maxWidth="350">
              <Modal.CloseButton onPress={() => setGenderModal(false)} />
              <Modal.Header>Select Gender</Modal.Header>
              <Modal.Body>
                <Radio.Group
                  name="payment"
                  size="sm"
                  value={selectedGender}
                  onChange={nextValue => {
                    setSelectedGender(nextValue);
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
                      value="Male">
                      {strings.male}
                    </Radio>
                    <Radio
                      colorScheme={'rose'}
                      alignItems="flex-start"
                      _text={{
                        mt: '-1',
                        ml: '2',
                        fontSize: 'sm',
                      }}
                      value="Female">
                      {strings.female}
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
                    setgender(selectedGender);
                    setSelectedGender('');
                    setGenderModal(false);
                  }}>
                  Select
                </Button>
              </Modal.Footer>
            </Modal.Content>
          </Modal>
        </View>
      ) : (
        <View>
          <View
            style={{
              backgroundColor: COLORS.white,
              padding: 20,
              alignItems: 'center',
            }}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Text
                style={{
                  fontSize: 24,
                  // fontWeight: '700',
                  color: COLORS.black,
                  fontFamily: 'Poppins-SemiBold',
                }}>
                Disclaimer
              </Text>
            </View>
            <ScrollView
              style={{
                flex: 1,
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginVertical: 20,
                }}>
                <ScrollView style={{height: SIZES.height * 0.7}}>
                  <Text
                    style={{
                      fontSize: 16,
                      color: COLORS.gray,
                      fontFamily: 'Poppins-Regular',
                    }}>
                    The contents of the Heart Assessment Test (HAT/Software)
                    such as, text, graphics, images, information and other
                    material contained in the Software are for educational
                    and/or informational purposes only. The content is not
                    intended to be a substitute for a professional medical
                    advice, diagnosis or treatment. The Software assumes no
                    liability for the results obtained based on the inputs
                    provided by the User. The User must seek the advice of the
                    Physician or qualified Surgeon/Doctor with any questions
                    that the User may have regarding his/her medical condition.
                    The Software is not a substitute of a professional medical
                    advice. Reliance by the User on any information/result
                    provided by the Software is solely at his/her own risk. The
                    User is advised to never disregard professional medical
                    advice or delay in seeking it because of the
                    information/result the User may have read/obtained on the
                    Software.
                  </Text>
                </ScrollView>
              </View>
            </ScrollView>
          </View>
        </View>
      )}

      {showScoreModal ? (
        <View
          style={{
            position: 'absolute',
            marginTop: SIZES.height * 0.87,
            width: '100%',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-evenly',
          }}>
          <CustomAppBtn
            title={' Next'}
            onPress={() => {
              if (scndScreen) validate();
              else setscndScreen(true);
            }}
          />
        </View>
      ) : (
        <View
          style={{
            position: 'absolute',
            marginTop: SIZES.height * 0.87,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-evenly',
          }}>
          <Button
            onPress={() => {
              navigation.goBack();
            }}
            size="lg"
            rounded={10}
            mr={2}
            w={'45%'}
            colorScheme="primary">
            Cancel
          </Button>
          <Button
            onPress={() => {
              setShowScoreModal(true);
            }}
            size="lg"
            rounded={10}
            w={'45%'}
            colorScheme="rose">
            Agree
          </Button>
        </View>
      )}
    </View>
  );
};

export default TestAgreement;
