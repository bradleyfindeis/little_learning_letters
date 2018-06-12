/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
} from 'react-native';
import {  Button } from 'native-base';
import Letters from './Letters';
import Numbers from './Numbers';
import PropTypes from 'prop-types'


export default class SideBar extends Component {
  static propTypes = {
    route: PropTypes.shape({
      title: PropTypes.string.isRequired,
    }),
    navigator: PropTypes.object.isRequired,
  };

  constructor(props, context) {
    super(props, context);
    this._onForward = this._onForward.bind(this);
  }

  _onForward() {
    let nextIndex = ++this.props.index;
    this.props.navigator.push({
      component: MyScene,
      title: 'Scene ' + nextIndex,
      passProps: {index: nextIndex},
    });
  }
  render() {
    return (
      <ScrollView style={styles.container}>
        <Text style={styles.text}>Side Menu</Text>
        <Image source={require('./profilepic.jpg')} style={styles.topImage} />
          <Button style={styles.button} block success onPress={() => this.props.navigation.navigate('Letters')}><Text style={styles.text}>Letters</Text></Button>
          <Button style={styles.button} block warning onPress={() => this.props.navigation.navigate('Numbers')}><Text style={styles.text}>Numbers</Text></Button>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginRight: 5
  },
  text: {
    color: '#fff',
    fontSize: 20,
    marginVertical: 5,
    marginHorizontal: 10,
  },
  topImage: {
    width: '100%',
    height: 100,
    margin: 10,
    opacity: 0.7,
  },
  button: {
    marginTop: 20,
    marginLeft: 10,
    marginRight: 10,
  },
});
