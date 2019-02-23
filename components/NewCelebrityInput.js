import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Input, CheckBox, Button } from 'react-native-elements';

class NewCelebrityInput extends Component {
  changeField(field, input) {
    this.props.changeField(field, input);
  }
  render() {
    return(
      <View style={styles.container}>
        <Input
          containerStyle={styles.inputField}
          placeholder='Name'
          onChangeText={(text) => this.changeField('name', text)}
        />
        <Input
          containerStyle={styles.inputField}
          placeholder='Handle'
          onChangeText={(text) => this.changeField('handle', text)}
        />
        <CheckBox
          center
          title='Verified'
          checked={this.props.checked}
          onPress={() => this.changeField('isVerified', !this.props.checked)}
          containerStyle={styles.checkBox}
        />
        <Button
          title='Cancel'
          type='outline'
          onPress={() => this.changeField('addNew', false)}
        />
        <Button
          title='Submit'
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 5,
  },
  inputField: {
    width: 300,
    marginTop: 25,
  },
  checkBox: {
    backgroundColor: 'white',
    borderWidth: 0,
  },
});

export default NewCelebrityInput;
