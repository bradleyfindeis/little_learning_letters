import React from "react";
import { TouchableOpacity, View, Dimensions, ScrollView, Image } from "react-native";
import Modal from "react-native-simple-modal";
import { Container, Header, Content, Card, CardItem, Thumbnail, Button, Icon, Left, Body, Right, Text,} from 'native-base';

const deviceHeight = Dimensions.get('window').height
const deviceWidth = Dimensions.get('window').width


export default class MyFamily extends React.Component {
  state = { 
    open: false, 
    family: [
      {
        name: "Grandpa",
        title: "Great Grandpa",
        photo: require('./profilepic.jpg')
      },
      {
        name: "Grammyu",
        title: "Great Grandma",
        photo: require('./profilepic.jpg')
      },
      {
        name: "Baba",
        title: "Great Grandpa",
        photo: require('./profilepic.jpg')
      },
      {
        name: "Granny",
        title: "Great Grandma",
        photo: require('./profilepic.jpg')
      },
      {
        name: "Oma",
        title: "Grandma",
        photo: require('./profilepic.jpg')
      },
      {
        name: "Pal",
        title: "Grandpa",
        photo: require('./profilepic.jpg')
      },
      {
        name: "Gran",
        title: "Grandma",
        photo: require('./profilepic.jpg')
      },
      {
        name: "Laura",
        title: "Aunt",
        photo: require('./profilepic.jpg')
      },
      {
        name: "Chris",
        title: "Uncle",
        photo: require('./profilepic.jpg')
      },
      {
        name: "Amber",
        title: "Aunt",
        photo: require('./profilepic.jpg')
      },
      {
        name: "Jeffrey",
        title: "Uncle",
        photo: require('./profilepic.jpg')
      },
      {
        name: "Carly",
        title: "Aunt",
        photo: require('./profilepic.jpg')
      },
      {
        name: "Brad",
        title: "Uncle",
        photo: require('./profilepic.jpg')
      },
      {
        name: "Melissa",
        title: "Aunt",
        photo: require('./profilepic.jpg')
      },
      {
        name: "Chelsea",
        title: "Aunt",
        photo: require('./profilepic.jpg')
      },
      {
        name: "Ryan",
        title: "Uncle",
        photo: require('./profilepic.jpg')
      },
      {
        name: "Meagan",
        title: "Aunt",
        photo: require('./profilepic.jpg')
      },
      {
        name: "Kurt",
        title: "Uncle",
        photo: require('./profilepic.jpg')
      },
      {
        name: "Stuart",
        title: "Uncle",
        photo: require('./profilepic.jpg')
      },
      {
        name: "Alicia",
        title: "Aunt",
        photo: require('./profilepic.jpg')
      },
      {
        name: "Ian",
        title: "Uncle",
        photo: require('./profilepic.jpg')
      },
      {
        name: "Lynette",
        title: "Aunt",
        photo: require('./profilepic.jpg')
      },
      {
        name: "Sophia",
        title: "Cousin",
        photo: require('./profilepic.jpg')
      },
      {
        name: "Other Kid",
        title: "Cousin",
        photo: require('./profilepic.jpg')
      },
      {
        name: "Deisen",
        title: "Cousin",
        photo: require('./profilepic.jpg')
      },
      {
        name: "Ivy",
        title: "Cousin",
        photo: require('./profilepic.jpg')
      },
      {
        name: "Axel",
        title: "Cousin",
        photo: require('./profilepic.jpg')
      },
      {
        name: "Sophia",
        title: "Cousin",
        photo: require('./profilepic.jpg')
      },
      {
        name: "Kinley",
        title: "Cousin",
        photo: require('./profilepic.jpg')
      },
      {
        name: "Deisen",
        title: "Cousin",
        photo: require('./profilepic.jpg')
      },
      {
        name: "Ivy",
        title: "Cousin",
        photo: require('./profilepic.jpg')
      },
      {
        name: "Axel",
        title: "Cousin",
        photo: require('./profilepic.jpg')
      },
      {
        name: "Mason",
        title: "Cousin",
        photo: require('./profilepic.jpg')
      },
      {
        name: "Adalie",
        title: "Cousin",
        photo: require('./profilepic.jpg')
      },
      {
        name: "Zoe",
        title: "Cousin",
        photo: require('./profilepic.jpg')
      },
      {
        name: "Mac",
        title: "Cousin",
        photo: require('./profilepic.jpg')
      },
      {
        name: "Ivy",
        title: "Cousin",
        photo: require('./profilepic.jpg')
      },
      {
        name: "Gemma",
        title: "Cousin",
        photo: require('./profilepic.jpg')
      },
      {
        name: "Nolan",
        title: "Cousin",
        photo: require('./profilepic.jpg')
      },
      {
        name: "Lucy",
        title: "Cousin",
        photo: require('./profilepic.jpg')
      },
      {
        name: "Rosie",
        title: "Cousin",
        photo: require('./profilepic.jpg')
      },
      {
        name: "Shylie",
        title: "Cousin",
        photo: require('./profilepic.jpg')
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
    const { family } = this.state
    return  (
      <ScrollView horizontal={true} style={{ alignItems: "center" }}>
        { family.map(family => (
        <Card style={{height: deviceHeight * .6, width: deviceWidth * .8}}>
          <CardItem cardBody>
            <Image source={family.photo} style={{height: deviceHeight * .4, width: null, flex: 1}}/>
          </CardItem>
          <CardItem header style={{height: deviceHeight * .2, width: null, flex: 1,}}>
            <Body style={{ justifyContent: 'center', alignItems: 'center'}} onPress={this.openModal}>
              <Text style={{ alignItems: 'center', justifyContent: 'center', fontSize: 20, color: '#262728'}}> {family.name} - {family.title}</Text>
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
