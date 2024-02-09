import React from 'react';
import {View, Modal, ActivityIndicator, StyleSheet} from 'react-native';
import {COLORS} from '../resources';

const OverlayLoader = () => {
  return (
    <Modal transparent>
      <View style={styles.container}>
        <ActivityIndicator size="large" color={COLORS.primary} />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default OverlayLoader;
