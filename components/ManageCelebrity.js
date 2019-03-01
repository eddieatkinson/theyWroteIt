import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';

import NewCelebrityInput from './NewCelebrityInput';
import CelebrityList from './CelebrityList';
import EditCelebrity from './EditCelebrity';
import { getItem, setItem } from '../helpers/storage';

class ManageCelebrity extends Component{
  state = {
    addNew: false,
    data: [],
    selectedIndex: 0,
    edit: false,
  }

  componentDidMount() {
    this.getCelebrities();
  }

  async getCelebrities() {
    const data = await getItem('celebrities');
    this.setState({
      data,
    });
  }

  changeCelebrity(data) {
    this.setState({
      data,
    });
    setItem(data);
    this.props.changeField('celebrity', data[this.props.selectedIndex]);
  }

  changeSelectedIndex(selectedIndex) {
    this.setState({
      edit: true,
      selectedIndex,
    });
  }
  
  addNewCelebrity() {
    this.setState({
      addNew: true,
    });
  }

  cancel(field) {
    this.setState({
      [field]: false,
    });
  }

  displayAddNew() {
    if (this.state.addNew) {
      return <NewCelebrityInput getCelebrities={this.getCelebrities.bind(this)} cancel={this.cancel.bind(this)} changeField={this.props.changeField.bind(this)} />
    }
    return null;
  }

  display() {
    if (this.state.edit) {
      return(
        <EditCelebrity data={this.state.data} selectedIndex={this.state.selectedIndex} cancel={this.cancel.bind(this)} changeCelebrity={this.changeCelebrity.bind(this)} />
      )
    }
    return (
      <View style={{flex: 1}}>
        <CelebrityList data={this.state.data} changeField={this.props.changeField} displayAddButton={this.state.addNew} addNewCelebrity={this.addNewCelebrity.bind(this)} changeSelectedIndex={this.changeSelectedIndex.bind(this)} />
        { this.displayAddNew() }
      </View>
    )
  }

  render() {
    return(
      <View style={styles.container}>
        { this.display() }
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
