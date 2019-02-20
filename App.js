import React from 'react';
import { StyleSheet, View } from 'react-native';
import Result from './components/Result';
import UserInput from './components/UserInput';
import moment from 'moment';

export default class App extends React.Component {
  state = {
    celebrity: {
      value: 'Who??',
      isVerified: false,
      handle: '@someone',
      image: require('./assets/images/fred.jpg'),
    },
    content: '',
    time: moment().format('LT'),
    date: moment().format('MM/DD/YY'),
    shares: 0,
    likes: 0,
    comments: 0,
  }

  changeField(field, input) {
    this.setState({
      [field]: input,
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Result state={this.state} />
        <UserInput time={this.state.time} date={this.state.date} changeField={this.changeField.bind(this)} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});
