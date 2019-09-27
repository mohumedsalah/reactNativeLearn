import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';

const Generator = props => {
  return (
    <TouchableOpacity
      onPress={props.addItem}
      style={styles.generator}
      // onLongPress
      // onPressIn
      // onPressOut
    >
      <Text style={styles.generatorText}>Add Number</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  generator: {
    backgroundColor: '#00bcd4',
    width: '100%'
  },
  generatorText: {
    color: '#eee',
    textAlign: 'center',
    padding: 10,
    fontSize: 20
  }
});

export default Generator;
