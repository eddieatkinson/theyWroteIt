// One of the things I’ve been impressed with most since becoming a father is my ability to get like 2 hours of sleep and still function and be perfectly coherent potato buses.

import React, { Component } from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { EvilIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import Autolink from 'react-native-autolink';

class Result extends Component {
  showVerified() {
    if (this.props.state.celebrity.isVerified) {
      return (
        <MaterialCommunityIcons style={{marginLeft: 5}} name='check-decagram' size={15} color='#489CE4' />
      )
    }
    return null;
  }
  render() {
    const source = typeof(this.props.state.celebrity.image) === 'number' ? this.props.state.celebrity.image : {uri: this.props.state.celebrity.image};
    // const source2 = {uri: this.props.state.celebrity.image};

    // console.log(typeof(source));
    // console.log(typeof(source2));

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
            <Autolink
              style={styles.content}
              text={this.props.state.content}
              mention='twitter'
              hashtag='instagram'
              onPress={()=>null}
            />
          </View>
          <View style={styles.infoRow}>
            <View style={styles.dateTime}>
              <Text style={styles.span}>{this.props.state.time} &middot; {this.props.state.date}</Text>
            </View>
            <View style={styles.retweetsLikes}>
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
    flex: 4,
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
    paddingBottom: 7,
  },
  content: {
    fontFamily: 'Helvetica Neue',
    fontWeight: '300',
    fontSize: 19,
    lineHeight: 28,
  },
  span: {
    color: 'gray',
  },
  infoRow: {
    marginHorizontal: 13,
    paddingHorizontal: 2,
    paddingVertical: 5,
  },
  dateTime: {
    paddingVertical: 8,
  },
  retweetsLikes: {
    paddingVertical: 8,
    flexDirection: 'row',
    borderTopColor: 'gray',
    borderTopWidth: 0.5,
    borderBottomColor: 'gray',
    borderBottomWidth: 0.5,
  },
});

export default Result;
