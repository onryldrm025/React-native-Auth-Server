import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';

import IconButton from './IconButton';

function HeaderIconButton({name, style, onPress, color}) {
  return (
    <IconButton
      name={name}
      onPress={onPress}
      color={color}
      style={[styles.iconButton, style]}
    />
  );
}
const styles = StyleSheet.create({
  iconButton: {

  },
});
export default HeaderIconButton;
