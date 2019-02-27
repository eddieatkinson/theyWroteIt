import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { ListItem } from 'react-native-elements';
import { AntDesign } from '@expo/vector-icons';

import { getItem } from '../helpers/storage';

class CelebrityList extends Component{
  state = {
    data: [],
  }
  async componentDidMount() {
    const data = await getItem('celebrities');
    this.setState({
      data,
    });
  }
  list() {
    if (this.state.data) {
      return (
        <FlatList
          data={this.state.data}
          renderItem={({item, index}) => {
            return (
                <ListItem
                  title={item.value}
                  leftAvatar={{ source: {uri: item.image}}}
                  key={index}
                  onPress={() => console.log(item.value)}
                />
              )
            }
          }
          keyExtractor={item => `${item.image}`}
        />
      )
    }
    return null;
  }
  displayAddButton() {
    if (!this.props.displayAddButton) {
      return (
        <AntDesign
          name='pluscircleo'
          size={30}
          onPress={() => this.props.addNewCelebrity()}
        />
      )
    }
    return null;
  }
  render() {
    return(
      <View style={styles.container}>
        {this.list()}
        {this.displayAddButton()}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});

export default CelebrityList;
