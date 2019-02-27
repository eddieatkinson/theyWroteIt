import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';

import NewCelebrityInput from './NewCelebrityInput';
import CelebrityList from './CelebrityList';

class ManageCelebrity extends Component{
  state = {
    addNew: false,
  }
  
  addNewCelebrity() {
    console.log('PRESSED');
    this.setState({
      addNew: true,
    });
  }

  displayAddNew() {
    if (this.state.addNew) {
      return <NewCelebrityInput changeField={this.props.changeField.bind(this)} />
    }
    return null;
  }

  render() {
    return(
      <View style={styles.container}>
        <CelebrityList addNewCelebrity={this.addNewCelebrity.bind(this)} />
        { this.displayAddNew() }
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});

export default ManageCelebrity;
