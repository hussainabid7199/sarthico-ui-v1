import React from 'react';
import { StyleSheet, View, ActivityIndicator, Modal } from 'react-native';

const Loader = () => {
  return (
    <Modal transparent visible={true}>
      <View style={styles.loaderContainer}>
        <ActivityIndicator size="large" color="#4c84ff" />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  loaderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
  },
});

export default Loader;
