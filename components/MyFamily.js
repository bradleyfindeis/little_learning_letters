import React from "react";
import { Text, TouchableOpacity, View, Dimensions, ScrollView} from "react-native";
import Modal from "react-native-simple-modal";
import { Card } from 'react-native-elements';
import Sketch from 'react-native-sketch';

const deviceHeight = Dimensions.get('window').height
const deviceWidth = Dimensions.get('window').width


export default class MyFamily extends React.Component {
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
        <TouchableOpacity onPress={this.openModal}>
          <Card
            style={{height: deviceHeight * .60}}
            title={numbers}
            titleStyle={{fontSize: 100, marginTop: deviceHeight * .2}}
            containerStyle={{ padding: 30, width: deviceWidth * .8, height: deviceHeight * .70}}
            >
          </Card>
        </TouchableOpacity>
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
