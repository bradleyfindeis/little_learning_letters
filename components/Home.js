import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {  Button } from 'native-base';
import { StackNavigator } from 'react-navigation'; 
import Numbers from './Numbers';
import Colors from './Colors';
import MyFamily from './MyFamily';


export default class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{fontSize: 30}}>Little Learners</Text>
        <Button style={styles.button} block success onPress={() => this.props.navigation.navigate('Letters')}><Text style={styles.text}>Letters</Text></Button>
        <Button style={styles.button} block warning onPress={() => this.props.navigation.navigate('Numbers')}><Text style={styles.text}>Numbers</Text></Button>
        <Button style={styles.button} block info onPress={() => this.props.navigation.navigate('Colors')}><Text style={styles.text}>Colors</Text></Button>
        <Button style={styles.button} block danger onPress={() => this.props.navigation.navigate('Shapes')}><Text style={styles.text}>Shapes</Text></Button>
        <Button style={styles.button} block primary onPress={() => this.props.navigation.navigate('MyFamily')}><Text style={styles.text}>My Family</Text></Button>
      </View>
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
  header: {
    fontsize: 40,
  }
});