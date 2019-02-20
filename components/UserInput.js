import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Input } from 'react-native-elements';
import { Dropdown } from 'react-native-material-dropdown';
import DatePicker from 'react-native-datepicker';

import data from '../helpers/data';

class UserInput extends Component {
  changeField(field, input) {
    this.props.changeField(field, input)
  }

  onChangeText(index, data) {
    this.props.changeField('celebrity', data[index])
  }

  render() {
    return(
      <View style={styles.container}>
        <Dropdown
          containerStyle={{width: 300}}
          label='Choose your celebrity'
          data={data}
          onChangeText={(value, index, data) => this.onChangeText(index, data)}
        />
        <Input
          containerStyle={{width: 300}}
          multiline={true}
          maxLength={280}
          placeholder='Stupid stuff...'
          onChangeText={(text) => this.changeField('content', text)}
        />
        <View style={{flexDirection: 'row'}}>
          <Input
            containerStyle={{width: '45%'}}
            placeholder='Number of retweets'
            onChangeText={(text) => this.changeField('shares', text)}
          />
          <Input
            containerStyle={{width: '45%'}}
            placeholder='Number of likes'
            onChangeText={(text) => this.changeField('likes', text)}
          />
        </View>
        <DatePicker
          style={{padding: 10, width: 300}}
          mode='datetime'
          format='MMMM Do YYYY, h:mm:ss a'
          confirmBtnText='Confirm'
          cancelBtnText='Cancel'
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
