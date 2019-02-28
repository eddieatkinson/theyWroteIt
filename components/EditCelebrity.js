import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';

class EditCelebrity extends Component {
  render() {
    const selectedCelebrity = this.props.data[this.props.selectedIndex];
    return(
      <View style={{flex: 1}}>
        <Image
          source={{uri: selectedCelebrity.image}}
          style={{
            height: '20%',
          }}
          resizeMode='contain'
        />
        <Text>{selectedCelebrity.value}</Text>
        <Text>{selectedCelebrity.handle}</Text>
      </View>
    )
  }
}

export default EditCelebrity;
