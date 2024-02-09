import {
  Alert,
  Dimensions,
  FlatList,
  Image,
  Pressable,
  ScrollView,
  Text,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';

import {COLORS, FONTS, ICONS, SHADOW, SIZES, Utils} from '../resources';
import {useAppDispatch, useAppSelector} from '../stateManagemer/Store';

import {
  Button,
  HStack,
  Heading,
  Icon,
  Input,
  Modal,
  Radio,
  Stack,
  VStack,
} from 'native-base';

import Header from '../components/Header';
import LinearGradient from 'react-native-linear-gradient';
import {logout, updatePassword} from '../stateManagemer/slice/UserSlice';
import OverlayLoader from '../components/Loader';
import {useNavigation} from '@react-navigation/native';
import DatePicker from 'react-native-date-picker';

const UpdateProfile = () => {
  const dispatch = useAppDispatch();
  const navigation = useNavigation();
  const [value, setValue] = useState('');
  const [rePassword, setrePassword] = useState('');
  const [firstName, setfirstName] = useState('');
  const [lastName, setlastName] = useState('');
  const [email, setemail] = useState('');
  const [number, setnumber] = useState('');
  const [date, setDate] = useState(new Date());
  const [dob, setDOB] = useState('');
  const [open, setOpen] = useState(false);
  const [loading, setloading] = useState(false);
  const [genderModal, setGenderModal] = useState(false);
  const [gender, setGender] = useState('');
  const code = useAppSelector(state => state.userReducer.code);
  const user = useAppSelector(state => state.userReducer);
  const strings = useAppSelector(state => state.userReducer.string);

  function calculateAge(dateOfBirth: string) {
    const dob = new Date(dateOfBirth);
    const currentDate = new Date();
    let age = currentDate.getFullYear() - dob.getFullYear();
    if (currentDate.getMonth() < dob.getMonth()) {
      age--;
    } else if (currentDate.getMonth() === dob.getMonth()) {
      if (currentDate.getDate() < dob.getDate()) {
        age--;
      }
    }

    return age;
  }

  const handlePasswordChange = async () => {
    let age = await calculateAge(dob);
    setloading(true);
    await fetch('https://heartapp.technochords.com/api/user/update-profile', {
      method: 'POST',
      headers: {
        accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        apiCode: code,
        firstName: firstName,
        lastname: lastName,
        mobile: number,
        email: email,
        gender: gender == 'Male' ? 1 : 2,
        dob: dob,
        age: age,
      }),
    })
      .then(res => {
        return res.json();
      })
      .then(res => {
        console.log(res);
        setloading(false);
        if (res.code == 1 && res.response == 'success') {
          Alert.alert(
            strings.profile_updated,
            strings.profile_updated_message,
            [
              {
                text: strings.ok,
                onPress: () => {
                  navigation.goBack();
                },
              },
            ],
            {cancelable: false},
          );
        } else if (
          res.code == 3 &&
          res.message == 'Invalid api code. Please re-login.'
        ) {
          Alert.alert(
            strings.error,
            `${res.message ?? strings.something_went_wrong}`,
            [
              {
                text: 'OK',
                onPress: () => {
                  dispatch(logout());
                },
              },
            ],
            {cancelable: false},
          );
        } else {
          Alert.alert(
            strings.error,
            `${res.message ?? strings.something_went_wrong}`,
            [
              {
                text: 'OK',
                onPress: () => {
                  setrePassword('');
                },
              },
            ],
            {cancelable: false},
          );
        }
      })
      .catch(er => console.log(er));
  };

  function validate() {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneNumberRegex = /^(\+91[\-\s]?)?[0]?(91)?[6789]\d{9}$/;
    if (firstName == '' || firstName.length < 3) {
      Alert.alert('Error ', 'Please enter the valid First Name');
      return false;
    }
    if (lastName == '' || lastName.length < 3) {
      Alert.alert('Error ', 'Please enter valid the First Name');
      return false;
    }
    if (email == '' || !emailRegex.test(email)) {
      Alert.alert('Error ', 'Please enter valid the Email');
      return false;
    }
    if (number == '' || !phoneNumberRegex.test(number)) {
      Alert.alert('Error ', 'Please enter the valid phone number');
      return false;
    }
    if (gender == '') {
      Alert.alert('Error ', 'Please select the valid gender');
      return false;
    }

    return true;
  }
  return (
    <View style={styles.container}>
      <Header title={strings.menu} />
      <ScrollView style={styles.modalContainer}>
        <Text style={styles.modalTitle}>Edit Profile</Text>
        <Stack space={5} w="100%" alignItems="flex-start">
          <Input
            p={4}
            rounded={10}
            value={firstName}
            onChangeText={txt => setfirstName(txt)}
            mr={5}
            w={{
              // base: '100%',
              base: '100%',
              md: '25%',
            }}
            InputLeftElement={
              <Icon
                as={<Image source={ICONS.ACCOUNT_ICON} />}
                size={5}
                ml="2"
                tintColor={COLORS.secondary}
              />
            }
            placeholder={strings.first_name}
          />
          <Input
            p={4}
            rounded={10}
            value={lastName}
            onChangeText={txt => setlastName(txt)}
            mr={5}
            w={{
              // base: '100%',
              base: '100%',
              md: '25%',
            }}
            InputLeftElement={
              <Icon
                as={<Image source={ICONS.ACCOUNT_ICON} />}
                size={5}
                ml="2"
                tintColor={COLORS.secondary}
              />
            }
            placeholder={strings.last_name}
          />
          {/* </HStack> */}
          <Input
            p={4}
            rounded={10}
            value={email}
            onChangeText={txt => setemail(txt)}
            keyboardType="email-address"
            mr={5}
            w={{
              base: '100%',
              md: '25%',
            }}
            InputLeftElement={
              <Icon
                as={<Image source={ICONS.EMAIL_ICON} />}
                size={5}
                ml="2"
                tintColor={COLORS.secondary}
              />
            }
            placeholder={strings.email}
          />
          <Input
            p={4}
            rounded={10}
            value={number}
            fontFamily={'Poppins-Regular'}
            keyboardType="phone-pad"
            onChangeText={txt => setnumber(txt)}
            mr={5}
            w={{
              base: '100%',
              md: '25%',
            }}
            InputLeftElement={
              <Icon
                as={<Image source={ICONS.PHONE_ICON} />}
                size={5}
                ml="2"
                tintColor={COLORS.secondary}
              />
            }
            placeholder={strings.number}
          />
          <TouchableOpacity
            onPress={() => {
              setValue(gender);
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
            }}>
            <Image
              style={{marginRight: 8, tintColor: COLORS.primary}}
              source={ICONS.ACCOUNT_ICON}
            />
            <Text
              style={{
                color: gender == '' ? COLORS.gray : COLORS.black,
                fontSize: 12,
                fontFamily: 'Poppins-Regular',
              }}>
              {gender == '' ? strings.gender : gender}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setOpen(true);
              // setGenderModal(true);
            }}
            style={{
              width: '100%',
              borderRadius: 10,
              borderWidth: 1,
              padding: '4%',
              borderColor: COLORS.lightGray,
              alignItems: 'center',
              flexDirection: 'row',
            }}>
            <Image
              style={{marginRight: 8, tintColor: COLORS.primary}}
              source={ICONS.ACCOUNT_ICON}
            />
            <Text
              style={{
                color: gender == '' ? COLORS.gray : COLORS.black,
                fontSize: 12,
                fontFamily: 'Poppins-Regular',
              }}>
              {dob == '' ? strings.dob : dob}
            </Text>
          </TouchableOpacity>
          <DatePicker
            maximumDate={new Date()}
            modal
            open={open}
            date={date}
            mode="date"
            onConfirm={date => {
              setOpen(false);
              setDate(date);
              setDOB(date.toLocaleDateString());
            }}
            onCancel={() => {
              setOpen(false);
            }}
          />
        </Stack>
        <HStack mb={10}>
          <TouchableOpacity
            style={{marginVertical: 20}}
            onPress={() => {
              navigation.goBack();
            }}>
            <LinearGradient
              style={{
                borderRadius: 10,
                padding: '8%',
                width: '95%',
                alignSelf: 'center',
                justifyContent: 'center',
                alignItems: 'center',
              }}
              colors={[COLORS.gray, COLORS.gray]}
              start={{x: 0, y: 0}}
              end={{x: 1, y: 1}}>
              <Heading size={'md'} color={'white'}>
                {/* {strings.sign_up} */}
                Cancel
              </Heading>
            </LinearGradient>
          </TouchableOpacity>
          <TouchableOpacity
            style={{marginVertical: 20, marginLeft: '35%'}}
            onPress={() => {
              if (validate()) {
                handlePasswordChange();
              }
            }}>
            <LinearGradient
              style={{
                borderRadius: 10,
                padding: '8%',
                width: '95%',
                alignSelf: 'center',
                justifyContent: 'center',
                alignItems: 'center',
              }}
              colors={[COLORS.header2, COLORS.header3]}
              start={{x: 0, y: 0}}
              end={{x: 1, y: 1}}>
              <Heading size={'md'} color={'white'}>
                Submit
              </Heading>
            </LinearGradient>
          </TouchableOpacity>
        </HStack>
        <Modal
          isOpen={genderModal}
          size="lg"
          onClose={() => console.log(false)}>
          <Modal.Content maxWidth="350">
            <Modal.CloseButton onPress={() => setGenderModal(false)} />
            <Modal.Header>Select Language</Modal.Header>
            <Modal.Body>
              <Radio.Group
                name="payment"
                size="sm"
                value={value}
                onChange={nextValue => {
                  setValue(nextValue);
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
                  setGender(value);
                  setValue('');
                  setGenderModal(false);
                }}>
                Select
              </Button>
            </Modal.Footer>
          </Modal.Content>
        </Modal>
      </ScrollView>
    </View>
  );
};

export default UpdateProfile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  modalContainer: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 24,
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333333',
    marginBottom: 24,
  },
});
