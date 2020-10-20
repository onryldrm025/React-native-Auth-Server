import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

function Error({error}) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{error}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 5,
  },

  text: {
    fontWeight: 'bold',
    color: 'red',
  },
});
export default Error;
