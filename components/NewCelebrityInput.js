import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Input, CheckBox, Button } from 'react-native-elements';
import { addPerson } from '../helpers/storage';

class NewCelebrityInput extends Component {
  state={
    value: '',
    handle: '',
    isVerified: false,
  }
  cancel() {
    this.props.changeField('addNew', false);
  }
  changeField(field, input) {
    this.setState({
      [field]: input,
    });
  }
  onSubmit() {
    if (this.state.value === '' || this.state.handle === '') {
      alert('Please fill out both Name and Handle fields');
    } else {
      console.log('GREAT!');
      addPerson(this.state);
      this.cancel();
    }
  }
  render() {
    return(
      <View style={styles.container}>
        <Input
          containerStyle={styles.inputField}
          placeholder='Name'
          onChangeText={(text) => this.changeField('value', text)}
        />
        <Input
          containerStyle={styles.inputField}
          placeholder='Handle'
          onChangeText={(text) => this.changeField('handle', text)}
        />
        <CheckBox
          center
          title='Verified'
          checked={this.state.isVerified}
          onPress={() => this.changeField('isVerified', !this.state.isVerified)}
          containerStyle={styles.checkBox}
        />
        <Button
          title='Cancel'
          type='outline'
          onPress={() => this.cancel()}
        />
        <Button
          title='Submit'
          onPress={() => this.onSubmit()}
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
