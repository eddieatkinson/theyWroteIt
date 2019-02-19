import React, { Component } from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

class Result extends Component {
  render() {
    console.log(this.props.state.celebrity);
    console.log(this.props.state.celebrity.image);
    const source = this.props.state.celebrity.image;
    const source2 = '../assets/images/fred.jpg';
    console.log(typeof(source));
    console.log(typeof(source2));
    console.log(source === source2);

    return (
      <View style={styles.container}>
        <View style={styles.topRow}>
          <View style={styles.imageContainer}>
            <Image
              source={source}
            />
          </View>
          <View style={styles.contentRow}>
            <View><Text>{this.props.state.celebrity.value}</Text></View>
            <View><Text>{this.props.state.celebrity.handle}</Text></View>
          </View>
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
  },
  topRow: {
    flex: 1,
  },
  imageContainer: {
    flex: 1
  },
  contentRow: {
    flex: 5,
  },
});

export default Result;
