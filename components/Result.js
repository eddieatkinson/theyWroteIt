import React, { Component } from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { EvilIcons } from '@expo/vector-icons';

class Result extends Component {
  render() {
    const source = this.props.state.celebrity.image;

    return (
      <View style={styles.container}>
        <View style={styles.topRow}>
          <View style={styles.imageContainer}>
            <Image
              source={source}
              style={styles.image}
            />
          </View>
          <View style={styles.nameRow}>
            <View style={styles.nameContent}>
              <View><Text style={styles.name}>{this.props.state.celebrity.value}</Text></View>
              <View><Text>{this.props.state.celebrity.handle}</Text></View>
            </View>
            <View style={styles.downArrow}>
              <EvilIcons name='chevron-down' size={32} color='gray' />
            </View>
          </View>
        </View>
        <View style={styles.contentRow}>
          <Text>{this.props.state.content}</Text>
        </View>
        <View style={styles.infoRow}>
          <Text>Shares: {this.props.state.shares}</Text>
          <Text>Likes: {this.props.state.likes}</Text>
          <Text>Comments: {this.props.state.comments}</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'gray',
    width: '100%',
    marginVertical: 35,
    marginHorizontal: 20,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  topRow: {
    flexDirection: 'row',
    backgroundColor: 'blue',
    width: '100%',
    // flex: 1,
  },
  imageContainer: {
    backgroundColor: 'powderblue',
    // flex: 1,
  },
  image: {
    height: 86,
    width: 86,
    borderRadius: 43,
    margin: 5,
  },
  nameRow: {
    flex: 1,
    flexDirection: 'row',
    padding: 10,
    backgroundColor: 'pink',
    width: '100%',
    alignItems: 'center',
  },
  nameContent: {
    flex: 1,
  },
  name: {
    fontWeight: 'bold',
  },
  downArrow: {
    // alignContent: 'flex-end',
  },
  contentRow: {
    backgroundColor: 'steelblue',
    width: '100%',
    padding: 10,
    // flex: 2,
  },
  infoRow: {
    backgroundColor: 'green',
    width: '100%',
    paddingHorizontal: 50,
    paddingVertical: 5,
  },
});

export default Result;
