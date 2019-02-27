import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';

import NewCelebrityInput from './NewCelebrityInput';
import CelebrityList from './CelebrityList';

class ManageCelebrity extends Component{
  state = {
    addNew: false,
  }
  
  addNewCelebrity() {
    this.setState({
      addNew: true,
    });
  }

  cancel() {
    this.setState({
      addNew: false,
    });
  }

  displayAddNew() {
    if (this.state.addNew) {
      return <NewCelebrityInput cancel={this.cancel.bind(this)} changeField={this.props.changeField.bind(this)} />
    }
    return (
      <View style={{flex: 1}}></View>
    );
  }

  render() {
    return(
      <View style={styles.container}>
        <CelebrityList displayAddButton={this.state.addNew} addNewCelebrity={this.addNewCelebrity.bind(this)} />
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
