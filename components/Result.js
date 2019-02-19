import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

class Result extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View>
          <View></View>
          <View></View>
        </View>
        <View>
          <Text>Content: {this.props.state.content}</Text>
        </View>
        <Text>Shares: {this.props.state.shares}</Text>
        <Text>Likes: {this.props.state.likes}</Text>
        <Text>Comments: {this.props.state.comments}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export default Result;
