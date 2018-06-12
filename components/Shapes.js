import React from "react";
import { TouchableOpacity, View, Dimensions, ScrollView, Image } from "react-native";
import Modal from "react-native-simple-modal";
import { Container, Header, Content, Card, CardItem, Thumbnail, Button, Icon, Left, Body, Right, Text,} from 'native-base';

const deviceHeight = Dimensions.get('window').height
const deviceWidth = Dimensions.get('window').width


export default class Shapes extends React.Component {
  state = { 
    open: false, 
        shapes: [
          { shape: "Circle",
            link: "https://commons.wikimedia.org/wiki/File:Circle_-_black_simple.svg",
          },
          { shape: "Triangle",
            link: "https://en.wiktionary.org/wiki/triangle",
          },
          { shape: "Square",
            link: "https://en.wiktionary.org/wiki/square",
          },
          { shape: "Rectangle",
            link: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.math.nmsu.edu%2F~breakingaway%2FLessons%2FCAR%2FCAR_files%2Fimage005.gif&imgrefurl=https%3A%2F%2Fwww.math.nmsu.edu%2F~breakingaway%2FLessons%2FCAR%2FCAR.html&docid=blANQGKNtwO3nM&tbnid=2n8LeNMUOTU6JM%3A&vet=10ahUKEwjbsoyLh8_bAhVM8IMKHexHAi0QMwjvASgCMAI..i&w=410&h=247&bih=976&biw=1680&q=rectangle&ved=0ahUKEwjbsoyLh8_bAhVM8IMKHexHAi0QMwjvASgCMAI&iact=mrc&uact=8",
          },
          { shape: "Octogon",
          link: "https://www.pelennapatchworks.co.uk/freezer-paper-templates-for-patchwork/octagon-freezer-paper-templates.html",
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
    const { shapes } = this.state
    return  (
      
      <ScrollView horizontal={true} style={{ alignItems: "center" }}>
        { shapes.map(shapes => (
          <Card style={{height: deviceHeight * .6, width: deviceWidth * .8}}>
            <CardItem cardBody>
            <Image source={require('./profilepic.jpg')} style={{height: 200, width: null, flex: 1}}/>
            </CardItem>
            <CardItem header style={{height: deviceHeight * .6, width: null, flex: 1,}}>
              <Body style={{ justifyContent: 'center', alignItems: 'center'}} onPress={this.openModal}>
                <Text style={{ alignItems: 'center', justifyContent: 'center', fontSize: 40,}}> {shapes.shape} </Text>
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


{/* <Card
          style={{height: deviceHeight * .60}}
          title={shapes}
          titleStyle={{fontSize: 100, marginTop: deviceHeight * .2}}
          containerStyle={{ padding: 30, width: deviceWidth * .8, height: deviceHeight * .70}}
          >
        </Card> */}