import React, {useEffect, useState} from 'react';
import {
  View,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
  Platform,
  Alert,
  Pressable,
  Dimensions,
  ActivityIndicator,
} from 'react-native';
import {COLORS, FONTS, ICONS, SIZES, Utils} from '../resources';

import {useNavigation} from '@react-navigation/native';

import {
  Divider,
  Icon,
  Input,
  Stack,
  Text,
  Button,
  HStack,
  Heading,
} from 'native-base';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useAppDispatch, useAppSelector} from '../stateManagemer/Store';
import {login, registerApi} from '../stateManagemer/slice/UserSlice';
import LinearGradient from 'react-native-linear-gradient';

const SignUp = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');
  const [password, setPassword] = useState('');
  const strings = useAppSelector(state => state.userReducer.string);
  const navigation = useNavigation();
  const dispatch = useAppDispatch();
  const [show, setShow] = React.useState(false);
  const isLoading = useAppSelector(state => state.userReducer.isLoading);
  const validate = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneNumberRegex = /^(\+91[\-\s]?)?[0]?(91)?[6789]\d{9}$/;
    if (firstName == '' || firstName.length < 3) {
      Alert.alert('Error ', 'Please enter the valid First Name');
      return false;
    }
    if (email == '' || !emailRegex.test(email)) {
      Alert.alert('Error ', 'Please enter the valid Email');
      return false;
    }
    if (password == '' || password.length < 6) {
      Alert.alert('Error ', 'Please enter the valid Password');
      return false;
    }
    return true;
  };
  const handleSignUp = async () => {
    if (!validate()) {
      console.log('HERE');
      dispatch(
        registerApi({firstName, lastName, email, mobile: number, password}),
      );
      console.log('OUTSIDE');
    }
  };
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      bounces={true}
      style={{flex: 1, backgroundColor: COLORS.white}}>
      <View
        style={{
          flex: 1,
          backgroundColor: COLORS.white,
          height: SIZES.height,
          width: '100%',
        }}>
        <View
          style={{
            height: '16%',
            width: '100%',
            backgroundColor: '#be123c',
            borderBottomLeftRadius: 150,
          }}>
          <LinearGradient
            style={{
              flex: 1,
              width: '100%',
              backgroundColor: '#be123c',
              borderBottomLeftRadius: 150,
            }}
            colors={[COLORS.header2, COLORS.header3]}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 1}}></LinearGradient>
        </View>
      </View>
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Image
            resizeMode="contain"
            style={{
              height: 120,
              width: 120,
              alignSelf: 'center',
            }}
            source={ICONS.LOGO_ICON}
          />
          <Text
            bold
            color={'black'}
            italic
            style={{marginBottom: '10%', fontSize: 20}}>
            {strings.app_name}
          </Text>
        </View>

        <View style={styles.formContainer}>
          <Text
            mt={4}
            ml={1}
            bold
            color={'gray.500'}
            italic
            style={{fontSize: 20}}>
            {strings.create_account}
          </Text>
          <Stack mt={7} space={5} w="100%" alignItems="flex-start">
            <HStack w={'80%'}>
              <Input
                rounded={10}
                value={firstName}
                onChangeText={txt => setFirstName(txt)}
                mr={5}
                w={{
                  // base: '100%',
                  base: '60%',
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
                rounded={10}
                value={lastName}
                onChangeText={txt => setLastName(txt)}
                mr={5}
                w={{
                  // base: '100%',
                  base: '60%',
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
            </HStack>
            <Input
              rounded={10}
              value={email}
              onChangeText={txt => setEmail(txt)}
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
              rounded={10}
              value={number}
              keyboardType="phone-pad"
              onChangeText={txt => setNumber(txt)}
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
            <Input
              rounded={10}
              value={password}
              onChangeText={txt => setPassword(txt)}
              w={{
                base: '100%',
                // base: '60%',
                // md: '25%',
              }}
              type={show ? 'text' : 'password'}
              InputRightElement={
                <Pressable onPress={() => setShow(!show)}>
                  <Icon
                    tintColor={COLORS.secondary}
                    as={
                      <Image
                        source={show ? ICONS.SHOW_ICON : ICONS.HIDE_ICON}
                      />
                    }
                    size={5}
                    mr="2"
                  />
                </Pressable>
              }
              placeholder={strings.password_placeholder}
            />
          </Stack>

          <TouchableOpacity
            disabled={isLoading}
            style={{marginVertical: 20}}
            onPress={() => {
              if (validate()) {
                console.log('HERE');
                dispatch(
                  registerApi({
                    firstName,
                    lastName,
                    email,
                    mobile: number,
                    password,
                  }),
                );
                console.log('OUTSIDE');
              }
            }}>
            <LinearGradient
              style={{
                borderRadius: 10,
                padding: '4%',
                width: '95%',
                alignSelf: 'center',
                justifyContent: 'center',
                alignItems: 'center',
              }}
              colors={
                !isLoading ? [COLORS.header2, COLORS.header3] : ['gray', 'gray']
              }
              start={{x: 0, y: 0}}
              end={{x: 1, y: 1}}>
              <Heading size={'md'} color={'white'}>
                {strings.sign_up}
              </Heading>
              {isLoading && (
                <View style={{position: 'absolute'}}>
                  <ActivityIndicator
                    size={'large'}
                    color={'white'}></ActivityIndicator>
                </View>
              )}
            </LinearGradient>
          </TouchableOpacity>

          <Divider
            my="1"
            _light={{
              bg: 'coolGray.200',
            }}
            _dark={{
              bg: 'dangers.50',
            }}
          />
          <View style={styles.signupContainer}>
            <Text style={styles.signupText}> {strings.already_account}</Text>
            <TouchableOpacity
              disabled={isLoading}
              onPress={() => navigation.navigate('Login')}>
              <Text bold color={'danger.700'}>
                {strings.login}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    height: SIZES.height,
    width: '100%',
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  logoContainer: {
    marginBottom: -40,
    height: SIZES.height * 0.3,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '10%',
  },
  logoText: {
    // ...FONTS.h1,
    fontSize: 28,
    fontWeight: 'bold',
    color: '#2E2E2E',
  },
  formContainer: {
    width: '80%',
    flex: 1,
    height: SIZES.height,
  },
  input: {
    backgroundColor: '#F6F6F6',
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 16,
    marginBottom: 16,
    fontSize: 16,
  },
  loginButton: {
    // backgroundColor: '#FFD600',
    backgroundColor: COLORS.primary,
    borderRadius: 10,
    paddingVertical: 12,
    alignItems: 'center',
    marginVertical: '10%',
  },
  buttonText: {
    // color: '#2E2E2E',
    color: COLORS.white,
    fontWeight: 'bold',
    fontSize: 16,
    // ...FONTS.h4,
  },
  forgotPassword: {
    color: COLORS.primary,
    marginBottom: '10%',
    textAlign: 'right',
  },
  signupContainer: {
    backgroundColor: COLORS.white,
    flexDirection: 'row',

    alignSelf: 'center',

    marginTop: Platform.OS == 'android' ? '5%' : '20%',
    // marginBottom: '40%',
  },
  signupText: {
    // ...FONTS.body4,
    marginRight: 8,
  },
  signupLink: {
    color: COLORS.primary,
    // ...FONTS.h4,
    // fontWeight: 'bold',
  },
  googleButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    width: '70%',
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 16,
    // marginBottom: '20%',
    marginTop: Platform.OS == 'android' ? '10%' : 50,
  },
  googleIcon: {
    width: 20,
    height: 20,
    marginRight: 16,
  },
  googleText: {
    // ...FONTS.body3,
    color: COLORS.primary,
    flex: 1,
    textAlign: 'center',
  },
  dashedLineSeparator: {
    borderWidth: 0.7,
    width: '90%',
    borderColor: COLORS.lightGray,
    // marginVertical: 16,
    marginTop: Platform.OS == 'android' ? '3%' : '5%',
  },
});

export default SignUp;
