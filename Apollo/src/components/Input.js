import React from 'react';
import {Text, TextInput, StyleSheet} from 'react-native';

function Input({children, style, ...props}) {
  return <TextInput {...props} style={[styles.input, style]} />;
}

const styles = StyleSheet.create({
  input: {
    backgroundColor: '#cdcdcd',
    width: '100%',
    borderRadius: 10,
  },
});
export default Input;
