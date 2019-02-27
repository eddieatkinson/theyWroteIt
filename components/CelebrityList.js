import React, { Component } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { getItem } from '../helpers/storage';
import { AntDesign } from '@expo/vector-icons';

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
  render() {
    return(
      <View style={styles.container}>
        <FlatList
          data={this.state.data}
          renderItem={({item}) => <Text>{item.value}</Text>}
          keyExtractor={(item, index) => `${index}`}
        />
        <AntDesign
            style={{alignItems: 'center'}}
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
    margin: 25,
  }
});

export default CelebrityList;
