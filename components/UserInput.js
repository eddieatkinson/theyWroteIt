import React, { Component } from 'react';
import { StyleSheet, View, Text, KeyboardAvoidingView } from 'react-native';
import { Input } from 'react-native-elements';
import { Dropdown } from 'react-native-material-dropdown';
import DatePicker from 'react-native-datepicker';

import data from '../helpers/data';
import { formatNumber, calculateCharactersLeft } from '../helpers/utility';

class UserInput extends Component {
  state = {
    numberOfCharactersLeft: 280,
  }
  changeField(field, input) {
    if (field === 'shares' || field === 'likes') {
      input = formatNumber(input);
    } else if (field === 'content') {
      const numberOfCharactersLeft = calculateCharactersLeft(input);
      this.setState({
        numberOfCharactersLeft,
      });
    }
    this.props.changeField(field, input)
  }

  onChangeText(index, data) {
    this.props.changeField('celebrity', data[index])
  }

  render() {
    return(
      <KeyboardAvoidingView behavior='padding' style={styles.container}>
        <View style={styles.container}>
          <Dropdown
            containerStyle={{width: 300}}
            label='Choose your celebrity'
            data={data}
            onChangeText={(value, index, data) => this.onChangeText(index, data)}
          />
          <View style={{flexDirection: 'row'}}>
            <Input
              containerStyle={{width: 300}}
              multiline={true}
              maxLength={280}
              placeholder='Stupid stuff...'
              onChangeText={(text) => this.changeField('content', text)}
            />
            <Text style={ this.state.numberOfCharactersLeft <= 10 ? { color: 'red' } : null }>{this.state.numberOfCharactersLeft}{'\n'}left</Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Input
              containerStyle={{width: '45%'}}
              maxLength={8}
              keyboardType='numeric'
              placeholder='Retweets'
              onChangeText={(text) => this.changeField('shares', text)}
            />
            <Input
              containerStyle={{width: '45%'}}
              maxLength={8}
              keyboardType='numeric'
              placeholder='Likes'
              onChangeText={(text) => this.changeField('likes', text)}
            />
          </View>
          <View style={{flexDirection: 'row'}}>
            <DatePicker
              style={{padding: 10, width: 150}}
              placeholder={this.props.time}
              customStyles={{
                placeholderText: {
                  color: 'black',
                }
              }}
              showIcon={false}
              mode='time'
              format='LT'
              confirmBtnText='Confirm'
              cancelBtnText='Cancel'
              onDateChange={(time) => this.changeField('time', time)}
            />
            <DatePicker
              style={{padding: 10, width: 150}}
              placeholder={this.props.date}
              customStyles={{
                placeholderText: {
                  color: 'black',
                }
              }}
              showIcon={false}
              mode='date'
              format='MM/DD/YY'
              confirmBtnText='Confirm'
              cancelBtnText='Cancel'
              onDateChange={(date) => this.changeField('date', date)}
            />
          </View>
        </View>
      </KeyboardAvoidingView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 5,
  },
});

export default UserInput;
