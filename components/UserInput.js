import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Input } from 'react-native-elements';
import { Dropdown } from 'react-native-material-dropdown';

import data from '../helpers/data';

class UserInput extends Component {
  changeField(field, input) {
    this.props.changeField(field, input)
  }

  onChangeText(index, data) {
    // console.log(data[index]);
    this.props.changeField('celebrity', data[index])
  }

  render() {
    return(
      <View style={styles.container}>
        <Dropdown
          containerStyle={{width: 200}}
          label='Choose your celebrity'
          data={data}
          onChangeText={(value, index, data) => this.onChangeText(index, data)}
        />
        <Input
          label='Content'
          placeholder='Stupid stuff...'
          onChangeText={(text) => this.changeField('content', text)}
        />
        <Input
          label='How many shares?'
          placeholder='Placeholder'
          onChangeText={(text) => this.changeField('shares', text)}
        />
        <Input
          label='How many likes?'
          placeholder='Placeholder'
          onChangeText={(text) => this.changeField('likes', text)}
        />
        <Input
          label='What time?'
          placeholder='Placeholder'
          onChangeText={(text) => this.changeField('likes', text)}
        />
        <Input
          label='What date?'
          placeholder='Placeholder'
          onChangeText={(text) => this.changeField('likes', text)}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 5,
  }
});

export default UserInput;
