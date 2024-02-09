import { Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

export const COLORS = {
  // header1: '#EB3349', //header 1st color
  // header2: '#ec4563', //header 2nd color
  // header3: '#ee96af', //header 3rd color

  // primary: '#ee96af', //primary
  // secondary: '#ec4563', //header 2nd color

  // header1: '#880E4F', //header 1st color
  // header2: '#C2185B', //header 2nd color
  // header3: '#EC407A', //header 3rd color

  // header1: '#F38C78', //header 1st color
  header2: '#86A8E7', //header 2nd color
  header3: '#5FFBF1', //header 3rd color

  primary: '#86A8E7', //primary
  secondary: '#5FFBF1', //header 2nd color


  white: '#fff',
  black: '#000000',
  green: '#37E39F',
  red: '#f43f5e',
  gray: '#6A6A6A',
  lightGray: '#dbdbdb',
  lightGray1: '#f5f6fa',
  shadow: '#30C1DD',
};
export const SIZES = {
  // global sizes
  base: 8,
  font: 14,
  radius: 12,
  padding: 24,

  // font sizes
  h1: 30,
  h2: 22,
  h3: 16,
  h4: 14,
  body1: 30,
  body2: 22,
  body3: 16,
  body4: 18,
  body5: 12,

  // app dimensions
  width,
  height,
};
export const FONTS = {
  // h1: {fontFamily: 'Roboto-Black', fontSize: SIZES.h1, lineHeight: 36},
  // h2: {fontFamily: 'Roboto-Bold', fontSize: SIZES.h2, lineHeight: 30},
  // h3: {fontFamily: 'Roboto-Bold', fontSize: SIZES.h3, lineHeight: 22},
  // h4: {fontFamily: 'Roboto-Bold', fontSize: SIZES.h4, lineHeight: 22},
  // body1: {fontFamily: 'Roboto-Regular', fontSize: SIZES.body1, lineHeight: 36},
  // body2: {fontFamily: 'Roboto-Regular', fontSize: SIZES.body2, lineHeight: 30},
  // body3: {fontFamily: 'Roboto-Regular', fontSize: SIZES.body3, lineHeight: 22},
  // body4: {fontFamily: 'Roboto-Regular', fontSize: SIZES.body4, lineHeight: 22},
  // body5: {fontFamily: 'Roboto-Regular', fontSize: SIZES.body5, lineHeight: 22},
};

export const SHADOW = {
  shadowColor: COLORS.primary,
  shadowOffset: { width: 0, height: 3 },
  shadowOpacity: 0.4,
  borderColor: COLORS.lightGray,
  elevation: 4,
};

const appTheme = { COLORS, SIZES, FONTS, SHADOW };

export default appTheme;
