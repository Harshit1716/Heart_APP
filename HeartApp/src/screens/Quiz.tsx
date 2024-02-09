import React, {useEffect, useRef, useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  Image,
  TouchableOpacity,
  Modal,
  Animated,
  Alert,
  ActivityIndicator,
  FlatList,
} from 'react-native';
import {COLORS, ICONS, SHADOW, SIZES} from '../resources';
import {
  Box,
  Button,
  Center,
  CheckIcon,
  Checkbox,
  HStack,
  Heading,
  Progress,
  ScrollView,
  VStack,
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
import LinearGradient from 'react-native-linear-gradient';
import OverlayLoader from '../components/Loader';

import {
  logout,
  resetOption,
  setQuestionNumber,
  setResult,
  setSelectedOption,
  setSelectedOptionNone,
} from '../stateManagemer/slice/UserSlice';
import CustomAppBtn from '../components/CustomAppBtn';

export interface Result {
  code: number;
  response: string;
  message: string;
  info: Info;
}

export interface Info {
  name_en: string;
  name_hi: string;
  desc_en: string;
  desc_hi: string;
}

const Quiz = () => {
  const currentQuestionNumber = useAppSelector(
    state => state.userReducer.currentQuestionNumber,
  );
  const navigation = useNavigation();
  const [showScoreModal, setShowScoreModal] = useState(false);
  const [progress, setProgress] = useState(new Animated.Value(0));
  const [hide, sethide] = useState(true);
  const [loading, setLoading] = useState(false);
  const questions = useAppSelector(state => state.userReducer.question);
  const code = useAppSelector(state => state.userReducer.code);
  const strings = useAppSelector(state => state.userReducer.string);

  const user = useAppSelector(state => state.userReducer);
  const dispatch = useAppDispatch();
  const [options, setOptions] = useState<Answers>();
  const [priority, setPriority] = useState('');
  const [resultMessage, setResultMessage] = useState('');
  const selectedIndex = useAppSelector(state => state.userReducer.selectedIds);
  const [greetingCompleted, setGreetingCompleted] = useState(true);
  const flatListRef = useRef(null);

  let progressAnim = progress.interpolate({
    inputRange: [0, 7],
    outputRange: ['0%', '100%'],
  });

  React.useEffect(() => {
    if (
      questions &&
      questions?.response &&
      questions.response[currentQuestionNumber]
    ) {
      fetchOptions();
    }
    // Animated.timing(progress, {
    //   toValue: currentQuestionNumber,
    //   duration: 1000,
    //   useNativeDriver: false,
    // }).start();
  }, [currentQuestionNumber]);

  const renderProgressBar = () => {
    return (
      <View
        style={{
          marginTop: 10,
          width: '90%',
          height: 10,
          borderRadius: 20,
          borderWidth: 1,
          ...SHADOW,
          backgroundColor: '#f3f4f6',
          alignSelf: 'center',
          marginBottom: -10,
        }}>
        <Animated.View
          style={[
            {
              height: 10,
              borderRadius: 20,
              backgroundColor: '#84cc16',
            },
            {
              width: progressAnim,
            },
          ]}></Animated.View>
      </View>
    );
  };
  const fetchOptions = () => {
    if (
      questions &&
      questions?.response &&
      questions.response[currentQuestionNumber]
    ) {
      setLoading(true);
      fetch('https://heartapp.technochords.com/api/get-question/options', {
        method: 'POST',
        headers: {
          Accept: 'application/json, text/plain, */*',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id: questions.response[currentQuestionNumber].id,
          // id: currentQuestionNumber + '',
        }),
      })
        .then(res => res.json())
        .then(async jsonRes => {
          setOptions(jsonRes);
          setLoading(false);
        })
        .catch(er => {
          // console.log(er);
          Alert.alert('Error', er?.message + '', [
            {
              text: 'Cancel',
              onPress: () => {
                navigation.goBack();
              },
            },
            {
              text: 'Retry',
              onPress: () => {
                fetchOptions();
              },
            },
          ]);
          setLoading(false);
        });
    }
  };
  const handleSubmit = () => {
    console.log(selectedIndex);

    // const body = {
    //   apiCode: '2-x4mZ4HTcrx',
    //   question_1: [1, 2],
    //   question_2: '1',
    //   question_3: [1, 2],
    //   question_4: '1',
    //   question_5: [1, 2],
    //   question_6: '1',
    //   question_7: '1',
    // };
    const body = {
      age: user.age,
      gender: user.gender,
      apiCode: code,
      question_1: [...selectedIndex[0].map(item => Number(item))],
      // selectedIndex[0].length == 1
      //   ? selectedIndex[0][0]
      //   :
      question_2:
        selectedIndex[1].length == 1
          ? selectedIndex[1][0]
          : [...selectedIndex[1].map(item => Number(item))],
      question_3: [...selectedIndex[2].map(item => Number(item))],
      // selectedIndex[2].length == 1
      //   ? selectedIndex[2][0]
      //   :
      question_4:
        selectedIndex[3].length == 1
          ? selectedIndex[3][0]
          : [...selectedIndex[3].map(item => Number(item))],
      question_5: [...selectedIndex[4].map(item => Number(item))],
      // selectedIndex[4].length == 1
      //   ? selectedIndex[4][0]
      //   : [...selectedIndex[4].map(item => Number(item))],
      question_6:
        selectedIndex[5].length == 1
          ? selectedIndex[5][0]
          : [...selectedIndex[5].map(item => Number(item))],
      question_7:
        selectedIndex[6].length == 1
          ? selectedIndex[6][0]
          : [...selectedIndex[6].map(item => Number(item))],
    };

    console.log(body);
    console.log(body);

    setLoading(true);
    fetch(
      'https://heartapp.technochords.com/api/user/submit-question-answers',
      {
        method: 'POST',
        headers: {
          Accept: 'application/json, text/plain, */*',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      },
    )
      .then(res => res.json() as Promise<Result>)
      .then(async jsonRes => {
        if (jsonRes.code == 1) {
          setShowScoreModal(true);
          dispatch(
            setResult({
              message:
                user.language == 'English'
                  ? jsonRes.info.desc_en
                  : jsonRes.info.desc_hi,
              priority:
                user.language == 'English'
                  ? jsonRes.info.name_en
                  : jsonRes.info.name_hi,
            }),
          );
        } else if (
          jsonRes.code == 3 &&
          jsonRes.message == 'Invalid api code. Please re-login.'
        ) {
          Alert.alert(
            strings.error,
            `${jsonRes.message ?? strings.something_went_wrong}`,
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
            `${jsonRes.message ?? strings.something_went_wrong}`,
            [
              {
                text: 'OK',
                onPress: () => {
                  navigation.goBack();
                },
              },
            ],
            {cancelable: false},
          );
        }

        console.log(jsonRes.code, 'BHS');

        setLoading(false);
      })
      .catch(er => {
        console.log(er);
        setLoading(false);
      });
  };
  const handleNext = () => {
    // handleSubmit();
    if (selectedIndex[currentQuestionNumber].length != 0) {
      let id = null;
      let flag = false;
      options?.response?.map(item => {
        if (
          selectedIndex[currentQuestionNumber].includes(item.id + '') &&
          item.name_en == 'None of the above'
        ) {
          id = item.id + '';
          flag = true;
        }
      });
      if (id != null && flag) {
        dispatch(
          setSelectedOptionNone({
            option: id,
            index: currentQuestionNumber,
          }),
        );
      }
      if (currentQuestionNumber == 6) {
        handleSubmit();
      } else {
        dispatch(setQuestionNumber('NEXT'));
        // fetchOptions();
        // setGreetingCompleted(false);
      }
    } else {
      Alert.alert('Warning', 'Please select an Option');
    }
  };
  const handleBack = async () => {
    // if (currentQuestionNumber > 0) {
    dispatch(setQuestionNumber('BACK'));
    setGreetingCompleted(true);
    // fetchOptions();
    // }
  };
  const restartQuiz = () => {
    navigation.goBack();
  };

  const renderQuestion = () => {
    return (
      <View
        style={{
          marginVertical: 25,
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'flex-end',
          }}>
          <Text
            style={{
              color: COLORS.black,
              fontSize: 18,
              // fontWeight: '700',
              fontFamily: 'Poppins-SemiBold',
              marginRight: 2,
            }}>
            Question : {currentQuestionNumber + 1}
          </Text>
        </View>
        {/* Question */}
        <Center mt={2}>
          {loading ? (
            <></>
          ) : (
            // <AnimatedTyping
            //   text={[
            //     user.language == 'English'
            //       ? `${questions?.response[currentQuestionNumber]?.name_en}`
            //       : `${questions?.response[currentQuestionNumber]?.name_hi}`,
            //   ]}
            //   onComplete={() => setGreetingCompleted(true)}
            // />
            <Text
              style={{
                color: COLORS.black,
                fontFamily: 'Poppins-Medium',
                fontSize: 18,
              }}>
              {user.language == 'English'
                ? `${questions?.response[currentQuestionNumber]?.name_en}`
                : `${questions?.response[currentQuestionNumber]?.name_hi}`}
            </Text>
          )}
        </Center>
      </View>
    );
  };
  const scrollToBottom = () => {
    flatListRef.current.scrollToEnd({animated: true});
    sethide(false);
  };

  const handleScroll = (event: any) => {
    const offsetY = event?.nativeEvent?.contentOffset?.y;
    if (offsetY) sethide(offsetY < SIZES.height * 0.8);
  };

  const renderOptions2 = () => {
    return (
      <FlatList
        scrollEnabled={false}
        showsVerticalScrollIndicator={true}
        data={options?.response ?? []}
        renderItem={({item, index}: {item: AnswersResponse; index: number}) => {
          return (
            <View style={{}} key={index + ''}>
              <TouchableOpacity
                onPress={() => handleOptionPressed(item, index)}
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginTop: '5%',
                  padding: '3%',
                  borderWidth: 0.8,
                  borderRadius: 10,
                  paddingHorizontal: 10,
                  borderColor: COLORS.black,
                }}>
                <Text
                  style={{
                    width: selectedIndex[currentQuestionNumber].includes(
                      item.id + '',
                    )
                      ? '80%'
                      : '100%',
                    color: COLORS.black,
                    // fontWeight: '700',
                    fontFamily: 'Poppins-Medium',
                    fontSize: 16,
                  }}>
                  {user.language == 'English'
                    ? `${index + 1}. ${item.name_en}`
                    : `${index + 1}. ${item.name_hi}`}
                </Text>
                {selectedIndex[currentQuestionNumber].includes(
                  item.id + '',
                ) && <Checkbox mr={5} isChecked colorScheme="rose" />}
              </TouchableOpacity>
            </View>
          );
        }}
      />
    );
  };

  const renderNextButton = () => (
    <TouchableOpacity
      disabled={!greetingCompleted}
      style={{marginVertical: 20}}
      onPress={() => handleNext()}>
      <LinearGradient
        style={{
          borderRadius: 10,
          padding: '3%',
          width: '95%',
          alignSelf: 'center',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        colors={[COLORS.header2, COLORS.header3]}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}>
        <Heading size={'md'} color={'white'}>
          {strings.next}
        </Heading>
      </LinearGradient>
    </TouchableOpacity>
  );

  const renderOptionItem = ({
    item,
    index,
  }: {
    item: AnswersResponse;
    index: number;
  }) => {
    return (
      <View key={index + item.id}>
        <TouchableOpacity
          onPress={() => handleOptionPressed(item, index)}
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginTop: '5%',
            padding: '3%',
            borderWidth: 0.8,
            borderRadius: 10,
            paddingHorizontal: 10,
            borderColor: COLORS.black,
          }}>
          <Text
            style={{
              width: selectedIndex[currentQuestionNumber].includes(item.id + '')
                ? '80%'
                : '100%',
              color: COLORS.black,
              fontWeight: '700',
              fontFamily: 'Poppins-Medium',
              fontSize: 18,
            }}>
            {user.language == 'English'
              ? `${index + 1}. ${item.name_en}`
              : `${index + 1}. ${item.name_hi}`}
          </Text>
          {selectedIndex[currentQuestionNumber].includes(item.id + '') && (
            <Checkbox mr={5} isChecked colorScheme="rose" />
          )}
        </TouchableOpacity>
      </View>
    );
  };

  const handleOptionPressed = (item: AnswersResponse, index: number) => {
    dispatch(
      setSelectedOption({
        option: item,
        index: currentQuestionNumber,
      }),
    );
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'white',
      }}>
      <Header title={strings.take_the_test} />
      <View
        style={{
          flex: 1,
          paddingHorizontal: 16,
          backgroundColor: COLORS.white,
          position: 'relative',
        }}>
        {currentQuestionNumber != 0 && (
          <TouchableOpacity
            onPress={() => {
              handleBack();
            }}
            style={{
              marginLeft: -10,
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: 10,
            }}>
            <Image style={{height: 40, width: 40}} source={ICONS.BACK_ICON} />
            <Text
              style={{
                fontWeight: 'bold',
                color: COLORS.black,
                fontFamily: 'Poppins-Bold',
              }}>
              Back
            </Text>
          </TouchableOpacity>
        )}
        {renderProgressBar()}
        {renderQuestion()}
        <ScrollView
          ref={flatListRef}
          onScroll={handleScroll}
          showsVerticalScrollIndicator={false}
          style={{flex: 1, height: SIZES.height}}>
          {greetingCompleted ? <>{renderOptions2()}</> : <></>}
          <View style={{height: SIZES.height * 0.1}}></View>
        </ScrollView>
        {greetingCompleted ? <>{renderNextButton()}</> : <></>}

        <Modal
          animationType="slide"
          transparent={true}
          visible={showScoreModal}>
          <View
            style={{
              flex: 1,
              width: '100%',
              borderWidth: 1,
              borderRadius: 10,
              ...SHADOW,
              backgroundColor: COLORS.white,
              alignItems: 'center',
            }}>
            <Header title={strings.take_the_test} />
            <View
              style={{
                backgroundColor: COLORS.white,
                width: '90%',
                paddingHorizontal: '10%',
                borderRadius: 20,
                padding: 20,
                alignItems: 'center',
              }}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Text
                  style={{
                    fontSize: 22,
                    // fontWeight: '700',
                    color: COLORS.black,
                    fontFamily: 'Poppins-SemiBold',
                    // backgroundColor: COLORS.white,
                  }}>
                  Your Result :{' '}
                </Text>
                <Text
                  style={{
                    fontSize: 22,
                    fontFamily: 'Poppins-SemiBold',
                    color: COLORS.secondary,
                  }}>
                  {user.priority}
                </Text>
              </View>

              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginVertical: 20,
                }}>
                <Text
                  style={{
                    fontSize: 18,
                    fontFamily: 'Poppins-Medium',
                    color: COLORS.secondary,
                  }}>
                  {user.message}
                </Text>
              </View>
            </View>
            <CustomAppBtn
              title={'okay'}
              onPress={() => {
                restartQuiz();
              }}
            />
          </View>
        </Modal>
      </View>
      {options?.response.length > 5 && hide && (
        <TouchableOpacity
          onPress={() => {
            scrollToBottom();
          }}
          style={{
            height: 40,
            width: 40,
            // backgroundColor: COLORS.primary,
            position: 'absolute',
            borderRadius: 100,
            justifyContent: 'center',
            alignItems: 'center',
            bottom: '10%',
            right: '5%',
            // tintColor: COLORS.primary,
          }}>
          <Image
            resizeMode="contain"
            style={[
              {
                height: 40,
                // tintColor: COLORS.header3,
                width: 40,
                borderRadius: 40,
                Color: COLORS.header3,
              },
            ]}
            source={ICONS.ROCKET1_ICON}
          />
        </TouchableOpacity>
      )}
      {loading && <OverlayLoader />}
    </View>
  );
};

export default Quiz;
