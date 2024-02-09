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

const ChangePassword = () => {
  const dispatch = useAppDispatch();
  const navigation = useNavigation();
  const [currentPassword, setCurrentPassword] = useState('');
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [newPassword, setNewPassword] = useState('');
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [rePassword, setrePassword] = useState('');
  const [showRePassword, setShowRePassword] = useState(false);
  const [loading, setloading] = useState(false);
  const code = useAppSelector(state => state.userReducer.code);
  const language = useAppSelector(state => state.userReducer.language);
  const strings = useAppSelector(state => state.userReducer.string);

  const InputComponent = ({
    title,
    value,
    onChange,
    visible,
    visbleChange,
  }: any) => {
    return (
      <Input
        rounded={10}
        mb={3}
        value={value}
        fontFamily={'Poppins-Regular'}
        onChangeText={onChange}
        width={Dimensions.get('window').width * 0.9}
        p={4}
        w={{
          base: '95%',
          md: '25%',
        }}
        type={visible ? 'text' : 'password'}
        InputRightElement={
          <Pressable onPress={visbleChange}>
            <Icon
              tintColor={'danger.800'}
              as={
                <Image source={visible ? ICONS.SHOW_ICON : ICONS.HIDE_ICON} />
              }
              size={5}
              mr="2"
            />
          </Pressable>
        }
        placeholder={title}
      />
    );
  };

  const handlePasswordChange = async () => {
    setloading(true);
    await fetch('https://heartapp.technochords.com/api/user/update-password', {
      method: 'POST',
      headers: {
        accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        apiCode: code,
        password: rePassword,
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
            strings.password_updated,
            strings.pass_updated_message,
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
                text: strings.ok,
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
  return (
    <View style={styles.container}>
      <Header title={strings.change_password} />
      <ScrollView>
        <View style={{paddingHorizontal: '3%'}}>
          <Text
            style={{
              paddingHorizontal: '2%',
              marginTop: 20,
              textAlign: 'center',
              fontSize: 24,
              // fontWeight: '600',
              fontFamily: 'Poppins-Medium',
              color: COLORS.black,
            }}>
            {strings.change_password}
          </Text>
          <Stack mt={7} mb={7} space={3} w="100%" alignItems="flex-start">
            <Text
              style={{
                textAlign: 'center',
                fontSize: 14,
                color: COLORS.black,
                fontFamily: 'Poppins-Regular',
                marginBottom: -5,
                marginLeft: 5,
              }}>
              {strings.current_password}
            </Text>

            {InputComponent({
              title: strings.password_placeholder,
              onChange: (txt: string) => setCurrentPassword(txt),
              value: currentPassword,
              visible: showCurrentPassword,
              visbleChange: () => {
                setShowCurrentPassword(!showCurrentPassword);
              },
            })}
            <Text
              style={{
                textAlign: 'center',
                fontSize: 14,
                color: COLORS.black,
                marginBottom: -5,
                marginLeft: 5,
                fontFamily: 'Poppins-Regular',
              }}>
              New Password
            </Text>
            {InputComponent({
              title: strings.password_placeholder,
              onChange: (txt: string) => setNewPassword(txt),
              value: newPassword,
              visible: showNewPassword,
              visbleChange: () => {
                setShowNewPassword(!showNewPassword);
              },
            })}

            <Text
              style={{
                textAlign: 'center',
                fontSize: 14,
                color: COLORS.black,
                marginBottom: -5,
                marginLeft: 10,
                marginTop: 20,
                fontFamily: 'Poppins-Regular',
              }}>
              {strings.re_new_password}
            </Text>
            {InputComponent({
              title: strings.password_placeholder,
              onChange: (txt: string) => setrePassword(txt),
              value: rePassword,
              visible: showRePassword,
              visbleChange: () => {
                setShowRePassword(!showRePassword);
              },
            })}
          </Stack>

          <TouchableOpacity
            style={{marginBottom: 20, alignSelf: 'center', width: '90%'}}
            onPress={() => {
              if (currentPassword.length < 6) {
                Alert.alert('Error', 'Please Enter a valid Password');
              }
              if (newPassword.length >= 6) {
                Alert.alert('Error', 'Please Enter a valid new Password');
              }
              if (rePassword.length >= 6) {
                Alert.alert('Error', 'Please Enter a valid new Password');
              }
              if (rePassword.length >= 6 && rePassword == newPassword) {
                handlePasswordChange();
              } else {
                Alert.alert('Error', 'Please Enter a valid Password');
              }
            }}>
            <LinearGradient
              style={{
                borderRadius: 10,
                padding: '4%',
                width: '90%',
                alignSelf: 'center',
                justifyContent: 'center',
                alignItems: 'center',
              }}
              colors={[COLORS.header2, COLORS.header3]}
              start={{x: 0, y: 0}}
              end={{x: 1, y: 1}}>
              <Heading size={'md'} color={'white'}>
                {strings.change_password}
              </Heading>
            </LinearGradient>
          </TouchableOpacity>
        </View>
        {loading && <OverlayLoader />}
      </ScrollView>
    </View>
  );
};

export default ChangePassword;

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
