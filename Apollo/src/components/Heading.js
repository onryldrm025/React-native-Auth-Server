import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

function Heading({children, style}) {
  return <Text style={[styles.text, style]}>{children}</Text>;
}

const styles = StyleSheet.create({
  text: {
    fontSize: 32,
    marginBottom: 20,
  },
});
export default Heading;
