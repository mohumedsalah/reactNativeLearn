import React, { Component } from 'react';
import { TextInput, StyleSheet, View, Button, Text, ScrollView } from 'react-native';

class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textInput: '',
      users: []
    };
  }

  changeText = text => {
    this.setState({ textInput: text });
  };

  addNewUser = () => {
    this.setState(prevState => {
      return {
        textInput: '',
        users: [...prevState.users, prevState.textInput]
      };
    });
  };

  render() {
    return (
      <ScrollView>
        <View style={styles.holderText}>
          <TextInput
            value={this.state.textInput}
            onChangeText={this.changeText}
            style={styles.textInput}
          />
          <Button onPress={this.addNewUser} title="addOne" />
          {this.state.users.map((user, index) => {
            return (
              <View style={styles.userContainer} key={index}>
                <Text style={styles.userText}>{user}</Text>
              </View>
            );
          })}
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  holderText: {
    width: '100%',
    padding: 10
  },
  textInput: {
    backgroundColor: '#ccc',
    width: '100%',
    padding: 5,
    fontSize: 20,
    marginBottom: 5
  },
  userContainer: {
    width: '100%',
    borderRadius: 5,
    borderWidth: 1,
    alignItems: 'center',
    marginTop: 15
  },
  userText: {
    fontSize: 20,
    padding: 10,
    fontWeight: 'bold'
  }
});

export default Input;
