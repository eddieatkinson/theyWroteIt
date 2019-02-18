import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Input } from 'react-native-elements';

class UserInput extends Component {
  changeField(field, input) {
    this.props.changeField(field, input)
  }

  render() {
    return(
      <View style={styles.container}>
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
          label='How many comments?'
          placeholder='Placeholder'
          onChangeText={(text) => this.changeField('comments', text)}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export default UserInput;
