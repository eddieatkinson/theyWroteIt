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
                  containerStyle={{backgroundColor: 'blue'}}
                  leftAvatar={{ source: {uri: item.image}}}
                  titleStyle={{color: 'red', fontSize: 12}}
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
  render() {
    return(
      <View style={styles.container}>
        {this.list()}
        <AntDesign
          name='pluscircleo'
          size={30}
          onPress={() => this.props.addNewCelebrity()}
        />
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
