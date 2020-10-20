import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';

function TextButton({children, style, onPress, ...props}) {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={[styles.text, style]}>{children}</Text>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  text: {
    color: 'purple',
    fontSize: 15,
  },
});

export default TextButton;
