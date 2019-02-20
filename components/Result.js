import React, { Component } from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { EvilIcons, Foundation } from '@expo/vector-icons';

class Result extends Component {
  showVerified() {
    if (this.props.state.celebrity.isVerified) {
      return (
        <Foundation style={{marginLeft: 5}} name='burst' size={15} color='#489CE4' />
      )
    }
    return null;
  }
  render() {
    const source = this.props.state.celebrity.image;

    return (
      <View style={styles.container}>
        <View style={styles.subContainer}>
          <View style={styles.topRow}>
            <View style={styles.imageContainer}>
              <Image
                source={source}
                style={styles.image}
              />
            </View>
            <View style={styles.nameRow}>
              <View style={styles.nameContent}>
                <View style={{flexDirection: 'row'}}>
                  <Text style={styles.name}>{this.props.state.celebrity.value}</Text>
                  {this.showVerified()}
                </View>
                <View>
                  <Text style={styles.span}>{this.props.state.celebrity.handle}</Text>
                </View>
              </View>
              <View style={styles.downArrow}>
                <EvilIcons name='chevron-down' size={32} color='gray' />
              </View>
            </View>
          </View>
          <View style={styles.contentRow}>
            <Text style={styles.content}>{this.props.state.content}</Text>
          </View>
          <View style={styles.infoRow}>
            <Text>Time &middot; Date</Text>
            <View style={{flexDirection: 'row'}}>
              <Text>{this.props.state.shares}&nbsp;</Text>
              <Text style={styles.span}>Retweets&nbsp;&nbsp;</Text>
              <Text>{this.props.state.likes}&nbsp;</Text>
              <Text style={styles.span}>Likes</Text>
            </View>
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginVertical: 35,
    marginHorizontal: 20,
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  subContainer: {
    borderTopColor: 'gray',
    borderTopWidth: 0.5,
  },
  topRow: {
    flexDirection: 'row',
    width: '100%',
  },
  imageContainer: {
  },
  image: {
    height: 50,
    width: 50,
    borderRadius: 25,
    margin: 15,
  },
  nameRow: {
    flex: 1,
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
  },
  nameContent: {
    flex: 1,
  },
  name: {
    fontFamily: 'Helvetica Neue',
    fontWeight: 'bold',
  },
  downArrow: {
  },
  contentRow: {
    width: '100%',
    paddingHorizontal: 15,
    paddingBottom: 15,
  },
  content: {
    fontSize: 20,
  },
  span: {
    color: 'gray',
  },
  infoRow: {
    marginHorizontal: 13,
    borderTopColor: 'gray',
    borderTopWidth: 0.5,
    borderBottomColor: 'gray',
    borderBottomWidth: 0.5,
    paddingHorizontal: 2,
    paddingVertical: 5,
  },
});

export default Result;
