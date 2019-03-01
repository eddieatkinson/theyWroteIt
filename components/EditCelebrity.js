import React, { Component } from 'react';
import { View, Image, KeyboardAvoidingView, StyleSheet } from 'react-native';
import { Input, CheckBox, Button } from 'react-native-elements';

class EditCelebrity extends Component {
  state = {
    value: this.props.data[this.props.selectedIndex].value,
    handle: this.props.data[this.props.selectedIndex].handle,
    isVerified: this.props.data[this.props.selectedIndex].isVerified,
    image: this.props.data[this.props.selectedIndex].image,
  }

  changeField(field, input) {
    this.setState({
      [field]: input,
    });
  }

  editCelebrity(action, data, index, celebrity) {
    let dataCopy = data.slice();
    if (action === 'replace') {
      dataCopy[index] = celebrity;
    } else if (action === 'delete') {
      dataCopy.splice(index, 1);
    }
    return dataCopy;
  }

  onSubmit(action) {
    const newData = this.editCelebrity(action, this.props.data, this.props.selectedIndex, this.state);
    this.props.changeCelebrity(action, newData);
    this.props.cancel('edit');
  }

  render() {
    const selectedCelebrity = this.props.data[this.props.selectedIndex];
    return(
      <KeyboardAvoidingView behavior='padding' style={{flex: 1}}>
        <Image
          source={{uri: selectedCelebrity.image}}
          style={{
            height: '20%',
          }}
          resizeMode='contain'
        />
        <View style={{alignItems: 'center'}}>
          <Input
            value={selectedCelebrity.value}
            containerStyle={styles.input}
            value={this.state.value}
            onChangeText={(text) => this.changeField('value', text)}
          />
          <Input
            value={selectedCelebrity.value}
            containerStyle={styles.input}
            value={this.state.handle}
            onChangeText={(text) => this.changeField('handle', text)}
          />
        </View>
        <CheckBox
          center
          title='Verified'
          checked={this.state.isVerified}
          onPress={() => this.changeField('isVerified', !this.state.isVerified)}
          containerStyle={styles.checkBox}
        />
        <Button
          title='Delete'
          type='outline'
          titleStyle={{color: 'white'}}
          buttonStyle={{backgroundColor: 'red'}}
          onPress={() => this.onSubmit('delete')}
        />
        <Button
          title='Cancel'
          type='outline'
          onPress={() => this.props.cancel('edit')}
        />
        <Button
          title='Submit'
          onPress={() => this.onSubmit('replace')}
        />
      </KeyboardAvoidingView>
    )
  }
}

const styles = StyleSheet.create({
  input: {
    width: '75%',
    marginTop: 25,
  },
  checkBox: {
    backgroundColor: 'white',
    borderWidth: 0,
  },
})

export default EditCelebrity;
