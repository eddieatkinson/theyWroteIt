import React from 'react';
import { StyleSheet, View } from 'react-native';
import Result from './components/Result';
import UserInput from './components/UserInput';
import NewCelebrityInput from './components/NewCelebrityInput';
import moment from 'moment';

export default class App extends React.Component {
  state = {
    celebrity: {
      value: 'Who??',
      isVerified: false,
      handle: '@someone',
      image: require('./assets/images/fred.jpg'),
    },
    // name: '',
    // handle: '',
    // isVerified: false,
    content: '',
    time: moment().format('LT'),
    date: moment().format('MM/DD/YY'),
    shares: 0,
    likes: 0,
    comments: 0,
    addNew: false,
  }

  changeField(field, input) {
    this.setState({
      [field]: input,
    });
  }

  displayBottomHalf() {
    if(this.state.addNew) {
      return(
        <NewCelebrityInput changeField={this.changeField.bind(this)} />
      )
    }
    return <UserInput time={this.state.time} date={this.state.date} changeField={this.changeField.bind(this)} />
  }

  render() {
    return (
      <View style={styles.container}>
        <Result state={this.state} />
        {this.displayBottomHalf()}
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
