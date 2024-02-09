import React, {useEffect, useState} from 'react';
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
import {useAppSelector} from '../stateManagemer/Store';
import Header from '../components/Header';
import LinearGradient from 'react-native-linear-gradient';
import OverlayLoader from '../components/Loader';
interface Request {
  question0: Answers[] | null;
  question1: Answers[] | null;
  question2: Answers[] | null;
  question3: Answers[] | null;
  question4: Answers[] | null;
  question5: Answers[] | null;
  question6: Answers[] | null;
}

const Quiz = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<AnswersResponse[]>([]);
  const navigation = useNavigation();
  const [showScoreModal, setShowScoreModal] = useState(false);
  const [progress, setProgress] = useState(new Animated.Value(0));
  const [loading, setLoading] = useState(false);
  const questions = useAppSelector(state => state.userReducer.question);
  const strings = useAppSelector(state => state.userReducer.string);
  const language = useAppSelector(state => state.userReducer.language);
  const [flags, setFlags] = useState<boolean[]>([]);
  const [options, setOptions] = useState<Answers>();
  const [finalAnswers, setFinalAnswers] = useState<Request>();

  let [greetingCompleted, setGreetingCompleted] = useState(false);

  let progressAnim = progress.interpolate({
    inputRange: [0, 7],
    outputRange: ['0%', '100%'],
  });

  const handleBack = async () => {
    if (currentQuestionIndex > 0) {
      await setCurrentQuestionIndex(currentQuestionIndex - 1);
      setSelectedOption(prevOptions => prevOptions.slice(0, -1));
      setGreetingCompleted(false);

      let ar = finalAnswers[`question${currentQuestionIndex - 1}`];

      if (ar != null || ar != undefined) {
        setSelectedOption(ar);
      } else {
        setSelectedOption([]);
      }

      Animated.timing(progress, {
        toValue: currentQuestionIndex - 1,
        duration: 1000,
        useNativeDriver: false,
      }).start();
    }
  };
  React.useEffect(() => {
    progressAnim = progress.interpolate({
      inputRange: [0, questions?.response?.length ?? 7],
      outputRange: ['0%', '100%'],
    });
    if (questions && questions?.response && questions.response[0]) {
      fetchOptions();
    }
  }, []);
  React.useEffect(() => {
    if (questions && questions?.response && questions.response[0]) {
      fetchOptions();
    }
  }, [currentQuestionIndex]);
  React.useEffect(() => {
    console.log(selectedOption, 'HERE IS THE REASON', currentQuestionIndex);
  }, [currentQuestionIndex]);

  const fetchOptions = () => {
    if (
      questions &&
      questions?.response &&
      questions.response[currentQuestionIndex]
    ) {
      setLoading(true);
      fetch('https://heartapp.technochords.com/api/get-question/options', {
        method: 'POST',
        headers: {
          Accept: 'application/json, text/plain, */*',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id: questions.response[currentQuestionIndex].id,
        }),
      })
        .then(res => res.json())
        .then(async jsonRes => {
          console.log(jsonRes, 'OPTION');
          await setOptions(jsonRes);
          setLoading(false);
        })
        .catch(er => {
          // console.log(er);
          setLoading(false);
        });
    }
  };
  const handleNext = () => {
    if (selectedOption != null && questions?.response.length) {
      if (currentQuestionIndex == questions?.response.length - 1) {
        setShowScoreModal(true);
      } else {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        setGreetingCompleted(false);
      }
      Animated.timing(progress, {
        toValue: currentQuestionIndex + 1,
        duration: 1000,
        useNativeDriver: false,
      }).start();
    } else {
      Alert.alert('Warning', 'Please select an Option');
    }
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
              fontSize: 20,
              fontWeight: '700',
              marginRight: 2,
            }}>
            Question : {currentQuestionIndex + 1}
          </Text>
        </View>
        {/* Question */}
        <Center mt={2}>
          {loading ? (
            <></>
          ) : (
            <AnimatedTyping
              text={[
                language == 'English'
                  ? `${questions?.response[currentQuestionIndex].name_en}`
                  : `${questions?.response[currentQuestionIndex].name_hi}`,
              ]}
              onComplete={() => setGreetingCompleted(true)}
            />
          )}
        </Center>
      </View>
    );
  };

  const renderOptions2 = () => {
    return (
      <FlatList
        data={options?.response ?? []}
        renderItem={({item, index}: {item: any; index: number}) => {
          return (
            <View>
              <TouchableOpacity
                onPress={() => handleOptionPressed(item)}
                style={{
                  marginTop: '5%',
                  padding: '3%',
                  borderWidth: 0.8,
                  borderRadius: 10,
                  borderColor: selectedOption.includes(item)
                    ? COLORS.primary
                    : COLORS.black,
                }}>
                <Text
                  style={{
                    color: selectedOption.includes(item)
                      ? '#D81B60'
                      : COLORS.black,
                    fontWeight: '700',
                    fontSize: 20,
                  }}>
                  {language == 'English'
                    ? `${index + 1}. ${item.name_en}`
                    : `${index + 1}. ${item.name_hi}`}
                </Text>
              </TouchableOpacity>
            </View>
          );
        }}
      />
    );
  };
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

  const handleOptionPressed = (item: AnswersResponse) => {
    if (selectedOption.includes(item)) {
      let ar = [...selectedOption];
      const index = ar.indexOf(item);
      if (index !== -1) {
        ar.splice(index, 1);
      }
      setSelectedOption(ar);
    } else {
      if ((questions?.response[currentQuestionIndex].type ?? 0) == 3) {
        let ar = [];
        ar.push(item);
        setSelectedOption(ar);
      }
      if ((questions?.response[currentQuestionIndex].type ?? 0) == 2) {
        let ar = [...selectedOption];
        ar.push(item);
        setSelectedOption(ar);
      }
    }
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
        <TouchableOpacity
          onPress={() => {
            handleBack();
          }}
          style={{
            marginLeft: -10,
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Image
            style={{height: 40, width: 40, marginBottom: 0}}
            source={ICONS.BACK_ICON}
          />
          <Text style={{fontWeight: 'bold', color: COLORS.black}}>Back</Text>
        </TouchableOpacity>

        {renderProgressBar()}

        {renderQuestion()}
        <ScrollView showsVerticalScrollIndicator={false} style={{flex: 1}}>
          {greetingCompleted ? <>{renderOptions2()}</> : <></>}
          <View style={{height: SIZES.height * 0.1}}></View>
        </ScrollView>
        {greetingCompleted ? <>{renderNextButton()}</> : <></>}
        {/* Score Modal */}
        <Modal
          animationType="slide"
          transparent={true}
          visible={showScoreModal}>
          <View
            style={{
              flex: 1,
              backgroundColor: COLORS.white,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <View
              style={{
                alignSelf: 'center',

                backgroundColor: COLORS.white,
                width: '90%',
                borderRadius: 20,
                padding: 20,
                alignItems: 'center',
              }}>
              <Text style={{fontSize: 30, fontWeight: '700'}}>
                Congratulations!
              </Text>

              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'flex-start',
                  alignItems: 'center',
                  marginVertical: 20,
                }}>
                <Text
                  style={{
                    fontSize: 20,
                    color: COLORS.primary,
                  }}>
                  Your Test is over
                </Text>
              </View>

              <Button
                onPress={restartQuiz}
                mt={10}
                size="lg"
                rounded={10}
                w={'80%'}
                colorScheme="success">
                okay
              </Button>
            </View>
          </View>
        </Modal>
      </View>
      {loading && <OverlayLoader />}
    </View>
  );
};

export default Quiz;
