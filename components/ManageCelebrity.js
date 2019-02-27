import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';

import NewCelebrityInput from './NewCelebrityInput';
import CelebrityList from './CelebrityList';
import { getItem } from '../helpers/storage';

class ManageCelebrity extends Component{
  state = {
    addNew: false,
    data: [],
  }

  async getCelebrities() {
    const data = await getItem('celebrities');
    this.setState({
      data,
    });
  }

  componentDidMount() {
    this.getCelebrities();
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
      return <NewCelebrityInput getCelebrities={this.getCelebrities.bind(this)} cancel={this.cancel.bind(this)} changeField={this.props.changeField.bind(this)} />
    }
    return null;
  }

  render() {
    return(
      <View style={styles.container}>
        <CelebrityList data={this.state.data} changeField={this.props.changeField} displayAddButton={this.state.addNew} addNewCelebrity={this.addNewCelebrity.bind(this)} />
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
