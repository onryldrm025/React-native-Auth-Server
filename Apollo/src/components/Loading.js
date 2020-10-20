import React from 'react';
import {
  Text,
  TextInput,
  StyleSheet,
  ActivityIndicator,
  View,
} from 'react-native';

function Loading({loading}) {
  if (!loading) {
    return <View />;
  }

  return (
    <View style={styles.overlay}>
      <View>
        <ActivityIndicator size="large" color="purple" />
        <Text>Loading</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  overlay: {
    position: 'absolute',
    backgroundColor: '#ccc',
    top: 0,
    right: 0,
    left: 0,
    bottom: 0,
    opacity: 0.8,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default Loading;
