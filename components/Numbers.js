import React from "react";
import { TouchableOpacity, View, Dimensions, ScrollView, TouchableHighlight } from "react-native";
import Modal from "react-native-simple-modal";
import { Container, Header, Content, Card, CardItem, Thumbnail, Button, Icon, Left, Body, Right, Text} from 'native-base';

const deviceHeight = Dimensions.get('window').height
const deviceWidth = Dimensions.get('window').width


export default class Numbers extends React.Component {
  state = { 
    open: false, 
    numbers: ["1", "2", "3", "4", "5", "6", "7" ,"8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21" ,"22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35" ,"36", "37", "38", "39", "40"],
  }
  
 
  modalDidOpen = () => console.log("Modal did open.");
 
  modalDidClose = () => {
    this.setState({ open: false });
    console.log("Modal did close.");
  };
 
  moveUp = () => this.setState({ offset: -100 });
 
  resetPosition = () => this.setState({ offset: 0 });
 
  openModal = () => this.setState({ open: true });
 
  closeModal = () => this.setState({ open: false });
 
  render() {
    const { numbers } = this.state
    return  (
      <ScrollView horizontal={true} style={{ alignItems: "center" }}>
        { numbers.map(numbers => (
          <Card style={{height: deviceHeight * .6, width: deviceWidth * .8}}>
            <CardItem header style={{height: deviceHeight * .6, width: null, flex: 1,}}>
              <Body style={{ justifyContent: 'center', alignItems: 'center'}} onPress={this.openModal}>
                <TouchableOpacity onPress={this.openModal}>
                  <Text style={{ alignItems: 'center', justifyContent: 'center', fontSize: 120, color: '#262728'}}> {numbers} </Text>
                </TouchableOpacity>
              </Body>
            </CardItem>
        </Card>  
        ))}
        <Modal
          offset={this.state.offset}
          open={this.state.open}
          modalDidOpen={this.modalDidOpen}
          modalDidClose={this.modalDidClose}
          style={{ alignItems: "center" }}
        >
          <View style={{ alignItems: "center" }}>
            <Text style={{ fontSize: 20, marginBottom: 10 }}>Hello world!</Text>
            <TouchableOpacity style={{ margin: 5 }} onPress={this.moveUp}>
              <Text>Move modal up</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{ margin: 5 }}
              onPress={this.resetPosition}
            >
              <Text>Reset modal position</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ margin: 5 }} onPress={this.closeModal}>
              <Text>Close modal</Text>
            </TouchableOpacity>
          </View>
        </Modal> 
        </ScrollView>
      )
  }
}
