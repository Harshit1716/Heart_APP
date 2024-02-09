import {
  ActivityIndicator,
  Image,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {COLORS, FONTS, ICONS, SHADOW, SIZES} from '../resources';
import {useAppSelector} from '../stateManagemer/Store';
import {useNavigation} from '@react-navigation/native';
import OverlayLoader from './Loader';

interface MainViewTypes {
  style?: any;
  //   children: any;
  isVisible: boolean;
}

const MainView = (props: any) => {
  // console.log(props);
  const navigation = useNavigation();
  const isLoading = useAppSelector(state => state.userReducer.isLoading);

  return (
    <View style={styles.container}>
      <View style={{flex: 1}}>{props.children}</View>
      {isLoading && <OverlayLoader />}
    </View>
  );
};

export default MainView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: SIZES.height,
    width: SIZES.width,

    backgroundColor: 'white',
  },
  loginBtn: {
    padding: 10,
    width: '80%',
    // justifyContent: 'center',
    // alignItems: 'center',
    alignSelf: 'flex-end',
    borderRadius: 10,
    backgroundColor: COLORS.primary,
  },
});
