import React, { Component } from 'react';
import { View, Text } from 'react-native';

class EditCelebrity extends Component {
  render() {
    console.log(this.props.selectedCelebrity);
    return(
      <View>
        <Text>Celebrity</Text>
      </View>
    )
  }
}

export default EditCelebrity;
