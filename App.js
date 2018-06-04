
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { FlatList } from 'react-native';
import { Card } from 'react-native-elements';

const data = [
  {
    letter: "A a",
  },
  {
    letter: "B b",
  },
  {
    letter: "C c",
  },
  {
    letter: "D d",
  },
  {
    letter: "E e",
  },
  {
    letter: "F f",
  },
  {
    letter: "G g",
  },
  {
    letter: "H h",
  },
  {
    letter: "I i",
  },
  {
    letter: "J j",
  },
  {
    letter: "K k",
  },
  {
    letter: "L l",
  },
  {
    letter: "M m",
  },
  {
    letter: "N n",
  },
  {
    letter: "O o",
  },
  {
    letter: "P p",
  },
  {
    letter: "Q q",
  },
  {
    letter: "R r",
  },
  {
    letter: "S s",
  },
  {
    letter: "T t",
  },
  {
    letter: "U u",
  },
  {
    letter: "V v",
  },
  {
    letter: "W w",
  },
  {
    letter: "X x",
  },
  {
    letter: "Y y",
  },
  {
    letter: "Z z",
  }
];



export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      data: data
    };
  }

  render() {
    return (
      <FlatList
        horizontal
        data={this.state.data}
        renderItem={({item: rowData}) => {
          return(
            <Card
              style={{height: 600}}
              title={rowData.letter}
              titleStyle={{fontSize: 100, marginTop: 155}}
              containerStyle={{ padding: 30, width: 300, height: 600, marginTop: 100}}
              >
            </Card>
          );
        }
        }
      keyExtractor={(item, index) => index}
      />
    );
  }
}

const styles = StyleSheet.create({
});
