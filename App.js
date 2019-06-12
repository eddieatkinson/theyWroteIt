import React from 'react';
import { StyleSheet, View, SafeAreaView } from 'react-native';
import Result from './components/Result';
import UserInput from './components/UserInput';
import moment from 'moment';
import ManageCelebrity from './components/ManageCelebrity';

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
    addNew: false,
    selectedIndex: 0,
  }

  componentWillUpdate(nextProps, nextState) {
    if (!nextState.celebrity) {
      this.changeField('celebrity', {
        value: 'Who??',
        isVerified: false,
        handle: '@someone',
        image: require('./assets/images/fred.jpg'),
      });
    }
  }

  changeField(field, input) {
    this.setState({
      [field]: input,
    });
  }

  display() {
    if(this.state.addNew) {
      return(
        <ManageCelebrity changeField={this.changeField.bind(this)} selectedIndex={this.state.selectedIndex} />
      )
    }
    return(
      <View style={styles.container}>
        <Result state={this.state} changeField={this.changeField.bind(this)} />
        <UserInput time={this.state.time} date={this.state.date} changeField={this.changeField.bind(this)} />
      </View>
    )
  }

  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        {this.display()}
      </SafeAreaView>
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
