import React, { Component } from 'react';
import { Text, View, Picker } from 'react-native';
import Slider from '@react-native-community/slider';

class PickerComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedValue: 'ar',
      sliderValue: 10
    };
  }

  changeSelect = value => {
    this.setState({ selectedValue: value });
  };

  changeSliderValue = value => {
    this.setState({ sliderValue: value });
  };

  render() {
    return (
      <View>
        <Picker
          onValueChange={this.changeSelect}
          selectedValue={this.state.selectedValue}
          style={{ width: '100%' }}>
          <Picker.Item value="en" label="English" />
          <Picker.Item value="ar" label="Arabic" />
        </Picker>

        <Slider
          onValueChange={this.changeSliderValue}
          value={this.state.sliderValue}
          maximumValue={101}
          minimumValue={-1}
        />
        <Text>{this.state.sliderValue}</Text>
      </View>
    );
  }
}

export default PickerComponent;
