import {
  Platform,
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';
import React from 'react';
import {COLORS, ICONS, SHADOW, SIZES} from '../resources';
import {Avatar, Heading, Row, Text} from 'native-base';
import {useAppSelector} from '../stateManagemer/Store';
import LinearGradient from 'react-native-linear-gradient';
// import GradientHeader from 'react-native-gradient-header';
const Header = ({title}: {title: string}) => {
  const strings = useAppSelector(state => state.userReducer.string);
  const height = SIZES.height;
  const width = SIZES.width;
  return (
    <View style={{overflow: 'hidden'}}>
      <View style={{}}>
        <View
          style={[
            {
              height:
                Platform.OS == 'ios'
                  ? height > 667
                    ? width * 0.43
                    : width * 0.33
                  : width * 0.33,
              top: 0,
              shadowRadius: 4.65,
              shadowOpacity: 0.29,
              shadowOffset: {
                width: 0,
                height: 3,
              },
              elevation: 7,
            },
          ]}>
          {
            <LinearGradient
              // colors={[COLORS.white, COLORS.primary]}
              colors={[COLORS.header2, COLORS.header3]}
              start={{x: 0, y: 0}}
              end={{x: 0.1, y: 1}}
              style={[
                {
                  width,
                  height:
                    Platform.OS == 'ios'
                      ? height > 667
                        ? width * 1.23
                        : width
                      : width * 1.1,
                  borderRadius: width / 2,
                  transform: [{scaleX: 2}, {scaleY: 0.4}],
                },
                {
                  shadowRadius: 3,
                  shadowOpacity: 0.3,
                  shadowColor: '#595959',
                  shadowOffset: {width: 0, height: 2},
                },
                {top: height * -0.22, left: width * -0.01},
              ]}
            />
          }
        </View>
      </View>
      <View
        style={{
          paddingVertical:
            Platform.OS == 'ios'
              ? height > 667
                ? height * 0.07
                : height * 0.045
              : height * 0.04,
          position: 'absolute',
        }}>
        <View
          style={{
            width,
            justifyContent: 'space-between',
            paddingHorizontal: 10,
            flexDirection: 'row',
          }}>
          <View style={{}}>
            <Text
              style={{
                paddingTop: 10,
                fontSize: 25,
                color: 'white',
                // fontWeight: '700',
                // fontFamily: 'Caveat-SemiBold',
                fontFamily: 'Poppins-Regular',
                marginLeft: 5,
              }}>
              {strings.app_name}
            </Text>
            <Text
              style={{
                fontSize: 12,
                // paddingTop: 10,
                color: 'white',
                fontFamily: 'Poppins-Regular',

                // fontFamily: 'AlexBrush-Regular',
                marginLeft: 5,
              }}>
              {title}
            </Text>
          </View>

          <Image
            resizeMode="contain"
            source={ICONS.LOGO_ICON}
            style={{width: 50, height: 50, borderRadius: 10}}
          />
        </View>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({});
