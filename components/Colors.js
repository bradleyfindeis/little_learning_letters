import React from "react";
import { Text, TouchableOpacity, TouchableHighlight, View, Dimensions, ScrollView, Image } from "react-native";
import Modal from "react-native-simple-modal";
import { Drawer, Container, Header, Content, Card, CardItem, Thumbnail, Button, Icon, Left, Body, Right } from 'native-base';
import SideBar from './SideBar';

const deviceHeight = Dimensions.get('window').height
const deviceWidth = Dimensions.get('window').width


export default class Colors extends React.Component {
  state = { 
    colors: [
      { color: '#ffe100',
        name: 'Yellow',
      },
      { color: '#ff3232',
        name: 'Red'
      },
      { color: '#0369c1',
        name: 'Blue',
      },
      { color: '#13a555',
        name: 'Green'
      },
      { color: '#fc962f',
        name: 'Orange',
      },
      { color: '#cc68ff',
        name: 'Purple'
      },
      { color: '#1e1e1e',
        name: 'Black',
      },
      { color: 'f9f7f7',
        name: 'White'
      },
      { color: '#ff77bb',
        name: 'Pink',
      },
    ],
  }
  
 
  render() {
    const { colors } = this.state
    return  (
      <Drawer
        ref={(ref) => { this.drawer = ref; }}
        content={<SideBar navigator={this.navigator} />}
        onClose={() => this.closeDrawer()} >
          <ScrollView style={{ alignItems: "center" }}>
            { colors.map(colors => (
              <Card style={{height: deviceHeight * .6, width: deviceWidth * .8}}>
                <CardItem header style={{height: deviceHeight * .6, width: null, flex: 1, backgroundColor: colors.color}}>
                </CardItem>
              <CardItem>
                <Body>
                  <Text style={{ alignItems: 'center'}}> {colors.name}</Text>
                </Body>
              </CardItem>
            </Card>
          ))}
          </ScrollView> 
        </Drawer>
    )
  }
}
