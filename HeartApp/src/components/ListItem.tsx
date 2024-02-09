import React from 'react';
import {
  Image,
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  Alert,
} from 'react-native';

import {COLORS, SHADOW, SIZES} from '../resources';
import {useNavigation} from '@react-navigation/native';

const CARD_WIDTH = SIZES.width * 0.25;

const TripsList = ({onPress, list}: any) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      {list.map((item, index) => {
        return (
          <TouchableOpacity
            style={{}}
            onPress={() => {
              if (item.screen) navigation.navigate(item.screen);
              else onPress();
            }}>
            {/* // style={styles.cardContainer}> */}
            <View
              style={{
                ...SHADOW,
                justifyContent: 'center',
                alignItems: 'center',
                paddingVertical: '10%',
                backgroundColor: 'white',
                borderRadius: 20,
                // overflow: 'hidden',
              }}>
              <Image
                resizeMode="contain"
                style={styles.image}
                source={item.icon}
              />
              <View
                style={{
                  height: 1,
                  marginVertical: 3,
                  backgroundColor: COLORS.gray,
                  opacity: 0.6,
                  borderRadius: 10,
                  width: SIZES.width * 0.23,
                }}></View>
              <View
                style={{
                  width: SIZES.width * 0.25,
                  paddingHorizontal: 5,
                  height: 35,
                }}>
                <Text style={styles.title}>{item.name}</Text>
              </View>
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginTop: 10,
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    // overflow: 'hidden',
    // ...SHADOW,
  },
  cardContainer: {
    // borderWidth: 0.3,
    marginLeft: 10,
    height: SIZES.height * 0.15,
    borderRadius: 20,

    justifyContent: 'center',
    alignItems: 'center',
    // overflow: 'hidden',
  },
  card: {
    width: CARD_WIDTH - 2,
    height: 105,

    backgroundColor: 'white',
    borderRadius: 16,
  },
  imageBox: {
    width: CARD_WIDTH,
    height: '60%',
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: 'lightgray',
    // overflow: 'hidden',
  },
  image: {
    marginVertical: 5,
    height: 40,
    width: 40,
    resizeMode: 'cover',
    tintColor: COLORS.primary,
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 6,
    marginLeft: 10,
    marginRight: 10,
  },
  titleBox: {
    flex: 1,
  },
  title: {
    marginVertical: 4,
    fontSize: 10,
    textAlign: 'center',
    // fontWeight: 'bold',
    fontFamily: 'Poppins-SemiBold',
    color: COLORS.gray,
  },
  location: {
    fontSize: SIZES.body1,
    color: COLORS.lightGray,
  },
});

export default TripsList;
