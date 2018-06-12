import React from 'react';
import { Button, View, Text } from 'react-native';
import { StackNavigator } from 'react-navigation';
import Home from './components/Home';
import Letters from './components/Letters';
import Numbers from './components/Numbers';
import Colors from './components/Colors';
import Shapes from './components/Shapes';
import MyFamily from './components/MyFamily';


const RootStack = StackNavigator(
  {
    Home: {
      screen: Home,
    },
    Letters: {
      screen: Letters,
    },
    Numbers: {
      screen: Numbers,
    },
    Colors: {
      screen: Colors,
    },
    Shapes: {
      screen: Shapes,
    },
    MyFamily: {
      screen: MyFamily,
    },
  },
  {
    initialRouteName: 'Home',
  }
);

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}