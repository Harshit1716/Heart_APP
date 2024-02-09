import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  TextInput,
  Modal,
  Image,
  Dimensions,
} from 'react-native';
import {COLORS, ICONS, SHADOW} from '../resources';
import {useAppSelector} from '../stateManagemer/Store';
import Header from '../components/Header';
import {
  Center,
  CheckIcon,
  FormControl,
  HStack,
  Heading,
  Icon,
  Input,
  Select,
  Stack,
} from 'native-base';
import LinearGradient from 'react-native-linear-gradient';
// import GenderModal from '../components/GenderModal';
import {useNavigation} from '@react-navigation/native';

const ProfileScreen = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const user = useAppSelector(state => state.userReducer);
  const navigation = useNavigation();
  const strings = useAppSelector(state => state.userReducer.string);
  const [name, setName] = useState('John Doe');
  const [email, setEmail] = useState('johndoe@gmail.com');
  const [phone, setPhone] = useState('+1 123-456-7890');
  const [profilePicture, setProfilePicture] = useState(
    'https://via.placeholder.com/150',
  );

  const handleEditProfile = () => {
    navigation.navigate('UpdateProfile');
    // setIsModalVisible(true);
  };

  const handleSaveProfile = () => {
    setIsModalVisible(false);
  };
  const handleEditProfilePicture = () => {
    // Handle the logic to edit the profile picture here
  };

  return (
    <View style={styles.container}>
      <Header title={strings.profile} />
      <TouchableOpacity onPress={handleEditProfile}>
        <Text style={styles.editProfilePictureText}>Edit</Text>
      </TouchableOpacity>
      <View style={styles.imageContainer}>
        {/* <TouchableOpacity onPress={handleEditProfilePicture}> */}
        <Image
          source={{uri: 'https://via.placeholder.com/150'}}
          style={styles.profilePicture}
        />
        {/* </TouchableOpacity> */}
      </View>
      <View style={styles.infoContainer}>
        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>{strings.name_placeholder}</Text>
          <Text style={styles.infoText}>
            {user.firstName + ' ' + user.lastName}
          </Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>{strings.email}:</Text>
          <Text style={styles.infoText}>{user.email}</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>{strings.number}:</Text>
          <Text style={styles.infoText}>{user.number}</Text>
        </View>
      </View>
      <Modal animationType="slide" visible={isModalVisible}>
        <ScrollView style={styles.modalContainer}>
          <Text style={styles.modalTitle}>Edit Profile</Text>

          <Stack mt={7} space={5} w="100%" alignItems="flex-start">
            {/* <HStack w={'80%'}> */}
            <Input
              p={4}
              rounded={10}
              value={'firstName'}
              onChangeText={txt => console.log(txt)}
              mr={5}
              w={{
                // base: '100%',
                base: '100%',
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
              p={4}
              rounded={10}
              value={'lastName'}
              onChangeText={txt => console.log(txt)}
              mr={5}
              w={{
                // base: '100%',
                base: '100%',
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
            {/* </HStack> */}
            <Input
              p={4}
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
              p={4}
              rounded={10}
              value={'number'}
              keyboardType="phone-pad"
              onChangeText={txt => console.log(txt)}
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
            <TouchableOpacity
              style={{
                width: '100%',
                borderRadius: 10,
                borderWidth: 1,
                padding: '4%',
                borderColor: COLORS.lightGray,
                alignItems: 'center',
                flexDirection: 'row',
              }}>
              <Image
                style={{marginRight: 8, tintColor: COLORS.primary}}
                source={ICONS.ACCOUNT_ICON}
              />
              <Text style={{color: COLORS.black, fontSize: 12}}>Gender</Text>
            </TouchableOpacity>
          </Stack>
          <HStack>
            <TouchableOpacity
              style={{marginVertical: 20}}
              onPress={() => {
                setIsModalVisible(false);
              }}>
              <LinearGradient
                style={{
                  borderRadius: 10,
                  padding: '8%',
                  width: '95%',
                  alignSelf: 'center',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
                colors={[COLORS.gray, COLORS.gray]}
                start={{x: 0, y: 0}}
                end={{x: 1, y: 1}}>
                <Heading size={'md'} color={'white'}>
                  {/* {strings.sign_up} */}
                  Cancel
                </Heading>
              </LinearGradient>
            </TouchableOpacity>
            <TouchableOpacity
              style={{marginVertical: 20, marginLeft: '35%'}}
              onPress={() => {}}>
              <LinearGradient
                style={{
                  borderRadius: 10,
                  padding: '8%',
                  width: '95%',
                  alignSelf: 'center',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
                colors={[COLORS.header2, COLORS.header3]}
                start={{x: 0, y: 0}}
                end={{x: 1, y: 1}}>
                <Heading size={'md'} color={'white'}>
                  {/* {strings.sign_up} */}
                  Submit
                </Heading>
              </LinearGradient>
            </TouchableOpacity>
          </HStack>
        </ScrollView>
      </Modal>
      <View style={{flex: 1}}>{/* <GenderModal modalVisible={true} /> */}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  header: {
    paddingTop: '8%',
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 16,
    paddingVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#EAEAEA',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333333',
  },
  editButton: {
    backgroundColor: COLORS.primary,
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
  },
  editButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  infoContainer: {
    backgroundColor: '#FFFFFF',
    marginTop: 16,
    paddingHorizontal: 16,
    paddingVertical: 24,
  },

  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  infoLabel: {
    flex: 1,
    fontFamily: 'Poppins-SemiBold',
    fontSize: 16,
    // fontWeight: 'bold',
    color: '#333333',
  },
  infoText: {
    flex: 2,
    fontSize: 16,
    color: '#333333',
    fontFamily: 'Poppins-Regular',
  },
  modalContainer: {
    flex: 1,
    paddingTop: '20%',
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 16,
    paddingVertical: 24,
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333333',
    marginBottom: 24,
  },
  modalInput: {
    height: 48,
    fontSize: 16,
    color: '#333333',
    borderWidth: 1,
    borderColor: '#C4C4C4',
    borderRadius: 8,
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  saveButton: {
    backgroundColor: COLORS.primary,
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 8,
    alignSelf: 'flex-end',
  },
  saveButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  imageContainer: {
    alignItems: 'center',
    marginBottom: '1%',
    backgroundColor: COLORS.white,
    paddingBottom: 20,
    ...SHADOW,
    borderBottomWidth: 1,
    borderBottomEndRadius: 20,
    borderBottomStartRadius: 20,
  },
  profilePicture: {
    width: 150,
    marginTop: '10%',
    height: 150,
    backgroundColor: COLORS.lightGray,
    borderRadius: 75,
    marginBottom: 8,
  },
  editProfilePictureText: {
    fontSize: 16,
    margin: 10,
    color: COLORS.primary,
    fontFamily: 'Poppins-SemiBold',
    alignSelf: 'flex-end',
  },
});

export default ProfileScreen;
