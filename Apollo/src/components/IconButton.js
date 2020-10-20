import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-ionicons';

function IconButton({name, style, onPress, color}) {
  return (
    <TouchableOpacity style={[styles.container, style]} onPress={onPress}>
      <Icon name={name} color={'purple'} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({});
export default IconButton;
