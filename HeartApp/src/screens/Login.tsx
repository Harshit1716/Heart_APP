import React, {useEffect, useState} from 'react';
import {
  View,
  TextInput,
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
  Button,
  Divider,
  Heading,
  Icon,
  Input,
  Overlay,
  Stack,
  Text,
} from 'native-base';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useAppDispatch, useAppSelector} from '../stateManagemer/Store';
import {login, loginApi, setLangugae} from '../stateManagemer/slice/UserSlice';
import LinearGradient from 'react-native-linear-gradient';

const LoginScreen = () => {
  const [number, setNumber] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useAppDispatch();
  const navigation = useNavigation();
  const [show, setShow] = React.useState(false);
  const strings = useAppSelector(state => state.userReducer.string);
  const isLoading = useAppSelector(state => state.userReducer.isLoading);

  const checkUserExists = async () => {
    const user = await Utils.getData('userData');
    const language = await Utils.getData('language');
    console.log(user, 'user');
    console.log(language);
    if (user != null) {
      dispatch(login(user));
      if (language != null) {
        dispatch(setLangugae(language as 'English' | 'Hindi'));
      }
    }
  };
  useEffect(() => {
    checkUserExists();
  }, []);
  const handleForgotPassword = async () => {};

  const validate = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneNumberRegex = /^(\+91[\-\s]?)?[0]?(91)?[6789]\d{9}$/;
    if (number == '' || !emailRegex.test(number)) {
      Alert.alert('Error ', 'Please enter the Email');
      return false;
    }
    if (password == '' || password.length < 6) {
      Alert.alert('Error ', 'Please enter the Password');
      return false;
    }
    return true;
  };
  return (
    <ScrollView
      // bounces={false}
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
            {strings.login_text}
          </Text>
          <Stack mt={7} space={5} w="100%" alignItems="flex-start">
            <Input
              rounded={10}
              value={number}
              onChangeText={txt => setNumber(txt)}
              w={{
                base: '100%',
                md: '35%',
              }}
              InputLeftElement={
                <Icon
                  as={<Image source={ICONS.ACCOUNT_ICON} />}
                  size={5}
                  ml="2"
                  tintColor={'blue.800'}
                />
              }
              placeholder={strings.name_placeholder}
            />
            <Input
              rounded={10}
              value={password}
              onChangeText={txt => setPassword(txt)}
              width={Dimensions.get('window').width * 0.9}
              w={{
                base: '100%',
                md: '25%',
              }}
              type={show ? 'text' : 'password'}
              InputRightElement={
                <Pressable onPress={() => setShow(!show)}>
                  <Icon
                    tintColor={'blue.800'}
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
            style={{marginTop: 20}}
            onPress={handleForgotPassword}>
            <Text bold color={'danger.700'} style={styles.forgotPassword}>
              {strings.forgot_password}
            </Text>
          </TouchableOpacity>
          <View>
            <TouchableOpacity
              disabled={isLoading}
              style={{marginBottom: 20}}
              onPress={async () => {
                // dispatch(login({number, password}));
                if (validate()) {
                  dispatch(loginApi({email: number, password}));
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
                  !isLoading
                    ? [COLORS.header2, COLORS.header3]
                    : ['gray', 'gray']
                }
                start={{x: 0, y: 0}}
                end={{x: 1, y: 1}}>
                <Heading size={'md'} color={'white'}>
                  {strings.login}
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
          </View>
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
            <Text style={styles.signupText}> {strings.no_account}</Text>
            <TouchableOpacity
              disabled={isLoading}
              onPress={() => navigation.navigate('SignUp')}>
              <Text bold color={'blue.400'}>
                {strings.sign_up}
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
    marginTop:
      Platform.OS == 'ios'
        ? SIZES.height > 667
          ? SIZES.height * 0.05
          : SIZES.height * 0.03
        : SIZES.height * 0.05,
    marginBottom: -40,
    height: SIZES.height * 0.3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoText: {
    // ...FONTS.h1,
    fontSize: 28,
    fontWeight: 'bold',
    color: COLORS.primary,
  },
  formContainer: {
    width: '80%',
    flex: 1,
    height: SIZES.height * 0.8,
  },
  input: {
    backgroundColor: COLORS.primary,
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 16,
    marginBottom: 16,
    fontSize: 16,
  },
  loginButton: {
    // backgroundColor: '#FFD600',
    backgroundColor: COLORS.primary,
    borderRadius: 20,
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
    color: COLORS.gray,

    marginBottom: '10%',
    textAlign: 'right',
  },
  signupContainer: {
    backgroundColor: COLORS.white,
    flexDirection: 'row',

    alignSelf: 'center',

    marginVertical: Platform.OS == 'android' ? '10%' : '20%',
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

export default LoginScreen;
