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
        photo: require('./pictures/grandpa.png')
      },
      {
        name: "Grammy",
        title: "Great Grandma",
        photo: require('./pictures/grammy.png')
      },
      {
        name: "Baba",
        title: "Great Grandpa",
        photo: require('./pictures/baba.png')
      },
      {
        name: "Granny",
        title: "Great Grandma",
        photo: require('./pictures/granny.png')
      },
      {
        name: "Pop Pop",
        title: "Great Grandpa",
        photo: require('./pictures/poppop.jpg')
      },
      {
        name: "Char",
        title: "Great Grandma",
        photo: require('./pictures/char.png')
      },
      {
        name: "Oma",
        title: "Grandma",
        photo: require('./pictures/momjovi.png')
      },
      {
        name: "Pal",
        title: "Grandpa",
        photo: require('./pictures/pal.png')
      },
      {
        name: "Gran",
        title: "Grandma",
        photo: require('./pictures/gran.png')
      },
      {
        name: "Laura",
        title: "Aunt",
        photo: require('./pictures/waffz.png')
      },
      {
        name: "Chris",
        title: "Uncle",
        photo: require('./pictures/chris.png')
      },
      {
        name: "Amber",
        title: "Aunt",
        photo: require('./pictures/amber.png')
      },
      {
        name: "Jeffrey",
        title: "Uncle",
        photo: require('./pictures/jeffrey.png')
      },
      {
        name: "Carly",
        title: "Aunt",
        photo: require('./pictures/carly.png')
      },
      {
        name: "Brad",
        title: "Uncle",
        photo: require('./pictures/brad.png')
      },
      {
        name: "Melissa",
        title: "Aunt",
        photo: require('./pictures/melissa.png')
      },
      {
        name: "Chelsea",
        title: "Aunt",
        photo: require('./pictures/chelsea.png')
      },
      {
        name: "Ryan",
        title: "Uncle",
        photo: require('./pictures/ryan.png')
      },
      {
        name: "Meagan",
        title: "Aunt",
        photo: require('./pictures/meagan.png')
      },
      {
        name: "Kurt",
        title: "Uncle",
        photo: require('./pictures/kurt.png')
      },
      {
        name: "Stuart",
        title: "Uncle",
        photo: require('./pictures/stuart.png')
      },
      {
        name: "Alicia",
        title: "Aunt",
        photo: require('./pictures/alicia.png')
      },
      {
        name: "Ian",
        title: "Uncle",
        photo: require('./pictures/ian.png')
      },
      {
        name: "Lynette",
        title: "Aunt",
        photo: require('./pictures/lynette.png')
      },
      {
        name: "Sophia",
        title: "Cousin",
        photo: require('./pictures/sophia.png')
      },
      {
        name: "Kinley",
        title: "Cousin",
        photo: require('./pictures/kinley.png')
      },
      {
        name: "Deisen",
        title: "Cousin",
        photo: require('./pictures/deisen.png')
      },
      {
        name: "Ivy",
        title: "Cousin",
        photo: require('./pictures/ivys.png')
      },
      {
        name: "Axel",
        title: "Cousin",
        photo: require('./pictures/axel.png')
      },
      {
        name: "Mason",
        title: "Cousin",
        photo: require('./pictures/mason.png')
      },
      {
        name: "Adalie",
        title: "Cousin",
        photo: require('./pictures/adalie.png')
      },
      {
        name: "Zoe",
        title: "Cousin",
        photo: require('./pictures/zoe.png')
      },
      {
        name: "Mac",
        title: "Cousin",
        photo: require('./pictures/mac.png')
      },
      {
        name: "Ivy",
        title: "Cousin",
        photo: require('./pictures/ivy.png')
      },
      {
        name: "Gemma",
        title: "Cousin",
        photo: require('./pictures/gemma.png')
      },
      {
        name: "Nolan",
        title: "Cousin",
        photo: require('./pictures/nolan.png')
      },
      {
        name: "Lucy",
        title: "Cousin",
        photo: require('./pictures/lucy.png')
      },
      {
        name: "Rosie",
        title: "Cousin",
        photo: require('./pictures/rosie.png')
      },
      {
        name: "Shylie",
        title: "Cousin",
        photo: require('./pictures/shylie.png')
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
            <Image source={family.photo} style={{ resizeMode: 'contain', height: deviceHeight * .4, width: null, flex: 1}}/>
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
