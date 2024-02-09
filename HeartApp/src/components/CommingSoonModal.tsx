import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {ICONS} from '../resources';
import {Modal, Button} from 'native-base';

const CommingSoonModal = ({isModalVisible, onClose, onPress}: any) => {
  return (
    <View>
      <Modal
        isOpen={isModalVisible}
        size="lg"
        onClose={() => console.log(false)}>
        <Modal.Content maxWidth="350">
          <Modal.CloseButton onPress={onClose} />
          <Modal.Header>Comming Soon</Modal.Header>
          <Modal.Body>
            <Image
              resizeMode="contain"
              style={{height: 200, width: 'auto'}}
              source={ICONS.COMMING_SOON_ICON}
            />
          </Modal.Body>
          <Modal.Footer>
            <Button my={1} colorScheme={'rose'} flex="1" onPress={onPress}>
              Close
            </Button>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
    </View>
  );
};

export default CommingSoonModal;

const styles = StyleSheet.create({});
