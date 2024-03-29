import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Input, CheckBox, Button } from 'react-native-elements';
import { ImagePicker } from 'expo';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { isEmpty } from 'lodash';

import { addPerson } from '../helpers/storage';
import { permissionsForCamera, permissionsForCameraRoll } from '../helpers/permissions';

class NewCelebrityInput extends Component {
  state={
    value: '',
    handle: '',
    isVerified: false,
    image: '',
  }
  
  async openImagePicker() {
    await permissionsForCamera();
    await permissionsForCameraRoll();
    const { uri } = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: 'Images',
      quality: 0,
    });
    this.setState({
      image: uri,
    });
  }
  changeField(field, input) {
    this.setState({
      [field]: input,
    });
  }
  async onSubmit() {
    if (this.state.value === '' || this.state.handle === '') {
      alert('Please fill out both Name and Handle fields');
    } else if (this.state.image === '') {
      alert('Please select a photo');
    } else {
      await addPerson(this.state);
      this.props.getCelebrities();
      this.props.cancel('addNew');
    }
  }
  getImageButtonTitle() {
    const title = this.state.image ? 'Change Image' : 'Add Image';
    return title;
  }
  getImageIcon() {
    const iconName = this.state.image ? 'image-outline' : 'image-plus';
    return iconName;
  }
  handleCancel() {
    if(isEmpty(this.props.data)) {
      this.props.changeField('addNew', false);
    } else {
      this.props.cancel('addNew');
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
        <Button
          icon={
            <MaterialCommunityIcons
              name={this.getImageIcon()}
              size={25}
              color='#5388D0'
            />
          }
          title={this.getImageButtonTitle()}
          type='clear'
          onPress={() => this.openImagePicker()}
        />
        <CheckBox
          center
          title='Verified'
          checkedIcon='dot-circle-o'
          uncheckedIcon='circle-o'
          checked={this.state.isVerified}
          onPress={() => this.changeField('isVerified', !this.state.isVerified)}
          containerStyle={styles.checkBox}
        />
        <Button
          title='Cancel'
          type='outline'
          onPress={() => this.handleCancel()}
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
    flex: 1,
  },
  inputField: {
    width: '90%',
    marginTop: 25,
  },
  checkBox: {
    backgroundColor: 'white',
    borderWidth: 0,
  },
});

export default NewCelebrityInput;
