import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Nav from './src/Nav';
import Generator from './src/Generator';
import ListItems from './src/ListItems';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      appName: 'My first app',
      items: [1, 2, 5]
    };
  }

  addingNewItem = () => {
    this.setState(preState => {
      return {
        items: [...preState.items, Math.floor(Math.random() * 100) + 1]
      };
    });
  };

  deleteItem = itemPosation => {
    this.setState(preState => {
      return {
        items: preState.items.filter((it, inx) => inx !== itemPosation)
      };
    });
  };

  render() {
    return (
      <View style={styles.mainView}>
        <Nav name={this.state.appName} />
        <View style={styles.baseView}>
          <Text style={styles.baseText}>Hello from the other side</Text>
        </View>
        <View style={styles.baseView}>
          <Text style={styles.baseText}>Hello from the other side</Text>
        </View>
        <Generator addItem={this.addingNewItem} />
        <ListItems items={this.state.items} delete={this.deleteItem} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainView: {
    width: '100%',
    backgroundColor: 'white',
    paddingTop: 50,
    flex: 1
  },
  baseView: {
    width: '100%',
    marginBottom: 20
  },
  baseText: {
    color: '#fff',
    backgroundColor: 'green',
    padding: 10,
    fontSize: 20,
    textAlign: 'center'
  }
});

export default App;
