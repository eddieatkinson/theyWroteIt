import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Input } from 'react-native-elements';
import { Dropdown } from 'react-native-material-dropdown';
import DatePicker from 'react-native-datepicker';

import data from '../helpers/data';

class UserInput extends Component {
  changeField(field, input) {
    if (field === 'shares' || field === 'likes') {
      numberOfShares = Number(input);
      if (numberOfShares >= 10000) {
        let numberOfSharesAsString = (Math.round(numberOfShares / 1000)).toString();
        input = `${numberOfSharesAsString}K`
      } else if (numberOfShares >= 1000) {
        let numberOfSharesAsString = numberOfShares.toString();
        input = `${numberOfSharesAsString.substr(0, 1)},${numberOfSharesAsString.substr(1)}`;
      }
    }
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
            maxLength={6}
            keyboardType='numeric'
            placeholder='Retweets'
            onChangeText={(text) => this.changeField('shares', text)}
          />
          <Input
            containerStyle={{width: '45%'}}
            maxLength={6}
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
          />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 5,
  },
});

export default UserInput;
