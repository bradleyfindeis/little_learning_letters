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
            link: require("./circle.png"),
            scale: 'contain'
            
          },
          { shape: "Triangle",
            link: require("./triangle.png"),
            scale: 'contain'
          },
          { shape: "Square",
            link: require("./square.png"),
            scale: 'contain'
          },
          { shape: "Rectangle",
            link: require("./rectangle.png"),
            scale: 'center'
          },
          { shape: "Octagon",
            link: require("./octagon.png"),
            scale: 'contain'
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
            <Image source={shapes.link} style={{ resizeMode: shapes.scale, height: deviceHeight * .4, width: null, flex: 1}}/>
            </CardItem>
            <CardItem header style={{height: deviceHeight * .2, width: null, flex: 1,}}>
              <Body style={{ justifyContent: 'center', alignItems: 'center'}} onPress={this.openModal}>
                <Text style={{ alignItems: 'center', justifyContent: 'center', fontSize: 40, color: '#262728'}}> {shapes.shape} </Text>
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