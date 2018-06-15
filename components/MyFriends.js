import React from "react";
import { TouchableOpacity, View, Dimensions, ScrollView, Image } from "react-native";
import Modal from "react-native-simple-modal";
import { Container, Header, Content, Card, CardItem, Thumbnail, Button, Icon, Left, Body, Right, Text,} from 'native-base';

const deviceHeight = Dimensions.get('window').height
const deviceWidth = Dimensions.get('window').width


export default class MyFriends extends React.Component {
  state = { 
    open: false, 
    friends: [
      {
        name: "Reese",
        photo: require('./pictures/profilepic.jpg')
      },
      {
        name: "Malone",
        photo: require('./pictures/profilepic.jpg')
      },
      {
        name: "Emma",
        photo: require('./pictures/profilepic.jpg')
      },
      {
        name: "Ruby",
        photo: require('./pictures/profilepic.jpg')
      },
      {
        name: "Miles",
        photo: require('./pictures/profilepic.jpg')
      },
      {
        name: "Maggy",
        photo: require('./pictures/profilepic.jpg')
      },
      {
        name: "Saline",
        photo: require('./pictures/profilepic.jpg')
      },
      {
        name: "Carmen",
        photo: require('./pictures/profilepic.jpg')
      },
      {
        name: "Carina",
        photo: require('./pictures/profilepic.jpg')
      },
      {
        name: "Lucy",
        photo: require('./pictures/profilepic.jpg')
      },
      {
        name: "Livy",
        photo: require('./pictures/profilepic.jpg')
      },
      {
        name: "Joslyn",
        photo: require('./pictures/profilepic.jpg')
      },
      {
        name: "Hudson",
        photo: require('./pictures/profilepic.jpg')
      },
    ],
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
    const { friends } = this.state
    return  (
      <ScrollView horizontal={true} style={{ alignItems: "center" }}>
        { friends.map(friends => (
        <Card style={{height: deviceHeight * .6, width: deviceWidth * .8}}>
          <CardItem cardBody>
            <Image source={friends.photo} style={{ resizeMode: 'contain', height: deviceHeight * .4, width: null, flex: 1}}/>
          </CardItem>
          <CardItem header style={{height: deviceHeight * .2, width: null, flex: 1,}}>
            <Body style={{ justifyContent: 'center', alignItems: 'center'}} onPress={this.openModal}>
              <Text style={{ alignItems: 'center', justifyContent: 'center', fontSize: 20, color: '#262728'}}> {friends.name} </Text>
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
