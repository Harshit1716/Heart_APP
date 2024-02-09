import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  Dimensions,
  ActivityIndicator,
} from 'react-native';
import {COLORS, SIZES} from '../resources';

const {width, height} = Dimensions.get('window');

const Slide = ({item}) => {
  const [flag, setFlag] = useState(true);
  return (
    <View style={styles.cardView}>
      <Image
        resizeMode="contain"
        onLoadEnd={() => {
          setFlag(false);
        }}
        style={styles.image}
        source={{uri: item?.full_url + ''}}
      />
      {flag && (
        <View style={styles.textView}>
          <ActivityIndicator size={'large'} color={COLORS.primary} />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  cardView: {
    flex: 1,
    width: width - 20,
    height: height / 4.5,
    backgroundColor: 'white',
    width: SIZES.width * 0.9,
    height: 200,
    marginVertical: 10,
    alignSelf: 'center',
    margin: 10,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: {width: 0.5, height: 0.5},
    shadowOpacity: 0.5,
    shadowRadius: 3,
    elevation: 5,
  },

  textView: {
    // width: width - 20,
    width: '100%',
    borderRadius: 20,
    height: height / 4.2,
    position: 'absolute',
    justifyContent: 'center',
    alignContent: 'center',
    // backgroundColor: 'rgba(0, 0, 0, 0.2)',
    flex: 1,
  },
  image: {
    width: SIZES.width * 0.9,
    height: 200,
    borderRadius: 20,
  },
  itemTitle: {
    color: 'white',
    fontSize: 22,
    shadowColor: '#000',
    shadowOffset: {width: 0.8, height: 0.8},
    shadowOpacity: 1,
    shadowRadius: 3,
    marginBottom: 5,
    fontWeight: 'bold',
    elevation: 5,
  },
  itemDescription: {
    color: 'white',
    fontSize: 12,
    shadowColor: '#000',
    shadowOffset: {width: 0.9, height: 0.9},
    shadowOpacity: 1,
    shadowRadius: 3,
    elevation: 5,
  },
});

export default Slide;