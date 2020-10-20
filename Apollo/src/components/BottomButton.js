import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';

function BottomButton({title, style, onPress}) {
  return (
    <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    fontSize: 32,
    backgroundColor: 'purple',
    padding: 20,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
  },
  text: {
    fontSize: 21,
    color: 'white',
    fontWeight: '500',
  },
});
export default BottomButton;
