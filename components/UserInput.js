import React, { Component } from 'react';
import { StyleSheet, View, Text, KeyboardAvoidingView } from 'react-native';
import { Input } from 'react-native-elements';
import { Dropdown } from 'react-native-material-dropdown';
import DatePicker from 'react-native-datepicker';
import { EvilIcons } from '@expo/vector-icons';

import { formatNumber, calculateCharactersLeft } from '../helpers/utility';
import { getItem } from '../helpers/storage';

class UserInput extends Component {
  state = {
    numberOfCharactersLeft: 280,
    data: [],
  }

  async componentDidMount() {
    const data = await getItem('celebrities');
    this.setState({
      data,
    });
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
    this.props.changeField('celebrity', data[index]);
    this.props.changeField('selectedIndex', index);
  }

  render() {
    let dropdownLabel = 'Choose your user';
    if (!this.state.data || this.state.data.length === 0) {
      dropdownLabel = 'Please add a user';
    }
    return(
      <KeyboardAvoidingView behavior='padding' style={styles.container}>
        <View style={{ flexDirection: 'row' }}>
          <Dropdown
            containerStyle={{width: '85%'}}
            label={dropdownLabel}
            data={this.state.data}
            onChangeText={(value, index, data) => this.onChangeText(index, data)}
          />
          <EvilIcons
            style={{position: 'absolute', right: 0, bottom: 10}} 
            name='gear'
            size={30}
            color='gray'
            onPress={() => this.changeField('addNew', true)}
          />
        </View>
        <View style={{flexDirection: 'row'}}>
          <Input
            containerStyle={{width: '90%'}}
            multiline={true}
            maxLength={280}
            placeholder='Your text...'
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
            style={{padding: 10, width: '45%'}}
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
            style={{padding: 10, width: '45%'}}
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
