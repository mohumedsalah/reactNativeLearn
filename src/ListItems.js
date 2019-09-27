import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';

const ListItem = props => {
  return props.items.map((el, id) => (
    <TouchableOpacity
      onPressIn={() => {
        props.delete(id);
      }}
      style={styles.listItemView}
      key={id}>
      <Text style={styles.itemText}>{el}</Text>
    </TouchableOpacity>
  ));
};
const styles = StyleSheet.create({
  listItemView: {
    backgroundColor: '#eee',
    marginBottom: 5,
    alignItems: 'center',
    width: '100%'
  },
  itemText: {
    textAlign: 'center',
    fontSize: 18,
    padding: 5
  }
});

export default ListItem;
