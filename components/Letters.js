import React from "react";
import { Text, TouchableOpacity, View, Dimensions, ScrollView} from "react-native";
import Modal from "react-native-simple-modal";
import { Container, Header, Content, Card, CardItem, Thumbnail, Button, Icon, Left, Body, Right, } from 'native-base';

const deviceHeight = Dimensions.get('window').height
const deviceWidth = Dimensions.get('window').width


export default class Letters extends React.Component {
  state = { 
    open: false, 
    letters: ["A a", "B b", "C c", "D d", "E e", "F f", "G g", "H h", "I i", "J j", "K k", "L l", "M m", "N n", "O o", "P p", "Q q", "R r", "S s", "T t", "U u", "V v", "W w", "X x", "Y y", "Z z"],
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
    const { letters } = this.state
    return  (
      
      <ScrollView horizontal={true} style={{ alignItems: "center" }}>
        { letters.map(letters => (
          <Card style={{height: deviceHeight * .6, width: deviceWidth * .8}}>
            <CardItem header style={{height: deviceHeight * .6, width: null, flex: 1,}}>
              <Body style={{ justifyContent: 'center', alignItems: 'center'}} onPress={this.openModal}>
                <TouchableOpacity onPress={this.openModal}>
                  <Text style={{ alignItems: 'center', justifyContent: 'center', fontSize: 120, color: '#262728'}}> {letters} </Text>
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
        </Modal> 
        </ScrollView>
      )
  }
}
