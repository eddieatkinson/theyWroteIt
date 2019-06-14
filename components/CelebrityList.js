import React, { Component } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { ListItem, Button } from 'react-native-elements';
import { isEmpty } from 'lodash';

class CelebrityList extends Component{
  cancel() {
    this.props.changeField('addNew', false);
  }
  list() {
    if (this.props.data) {
      return (
        <FlatList
          data={this.props.data}
          renderItem={({item, index}) => {
            return (
                <ListItem
                  title={item.value}
                  leftAvatar={{ source: {uri: item.image}}}
                  key={index}
                  onPress={() => this.props.changeSelectedIndex(index)}
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
    if (!this.props.displayAddButton && !isEmpty(this.props.data)) {
      return (
        <View>
          <Button
            title='Done'
            type='outline'
            onPress={() => this.cancel()}
          />
          <Button
            title='Add'
            onPress={() => this.props.addNewCelebrity()}
          />
        </View>
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
