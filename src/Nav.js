import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Nav = props => {
  return (
    <View style={styles.nav}>
      <Text style={styles.navText}>{props.name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  nav: {
    backgroundColor: 'red',
    width: '100%'
  },
  navText: {
    color: '#fff',
    textAlign: 'center',
    padding: 5
  }
});

export default Nav;
