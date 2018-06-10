import React from "react";
import { Text, TouchableOpacity, View, Dimensions, ScrollView, } from "react-native";
import { Drawer, Container, Header, Left, Body, Right, Button, Icon, Title } from 'native-base';
import Modal from "react-native-simple-modal";
import SideBar from './components/SideBar';
import Letters from './components/Letters';
import Numbers from './components/Numbers';
import FooterBadge from './components/FooterBadge';


const deviceHeight = Dimensions.get('window').height
const deviceWidth = Dimensions.get('window').width


export default class App extends React.Component {
  state = { 
    open: false, 
    letters: ["A a", "B b", "C c", "D d", "E e", "F f", "G g", "H h", "I i", "J j", "K k", "L l", "M m", "N n", "O o", "P p", "Q q", "R r", "S s", "T t", "U u", "V v", "W w", "X x", "Y y", "Z z"],
  }

  closeDrawer = () => {
    this.drawer._root.close()
  };
  openDrawer = () => {
    this.drawer._root.open()
  };
  
 
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
      <Drawer
        ref={(ref) => { this.drawer = ref; }}
        content={<SideBar navigator={this.navigator} />}
        onClose={() => this.closeDrawer()} >
        <Container>
          <Header>
            <Left>
              <Button transparent onPress={()=> this.openDrawer()}>
                <Icon name='menu' />
              </Button>
            </Left>
            <Body>
              <Title>Little Learners</Title>
            </Body>
            <Right>
              <Button transparent>
                <Icon name='camera' />
              </Button>
            </Right>
          </Header>
          <ScrollView>
          <Letters />
          <Numbers />
          </ScrollView>
        </Container>
      </Drawer>
    )
    }
  }
  