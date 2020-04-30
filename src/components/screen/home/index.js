import React from 'react'
import { FlatList, SafeAreaView, View } from 'react-native';
import { Container, Header, Drawer, Title, Content, Button, Icon, Left, Body, Text } from 'native-base';
import { firebaseService, UserContext } from '~/lib';
import Message from '~/components/ui/message'
import Input from '~/components/ui/input'
import { chatRoomStyles as styles } from '~/styles'
import SideBar from '../../common/sidebar'

export default class ClassExample extends React.Component {
  static contextType = UserContext;
  state = {
    messages: []
  }

  unsubscribe = null

  componentDidMount() {
    this.unsubscribe = firebaseService.fetchMessages()
      .orderByChild('created_at', 'desc')
      .on('value', snapshot => {
        const messages = snapshot.val();
        console.log('messages =>', messages);
        if (messages) {
          this.responseMessage(messages);
        }
      });
  }

  componentWillUnmount() {
    firebaseService.logOutUser();
  }

  responseMessage = (messages) => {
    let newMessage = new Array();
    for (let [key, value] of Object.entries(messages)) {
      newMessage.push(value);
    }
    newMessage.sort((a, b) => {
      return new Date(b.created_at) - new Date(a.created_at);
    });
    console.log(newMessage);
    this.setState({ messages: newMessage });
  }

  componentWillUnmount() {
    this.unsubscribe && this.unsubscribe()
  }

  closeDrawer = () => {
    this._drawer._root.close();
  }
  openDrawer = () => {
    this._drawer._root.open();
  }

  render() {
    const user_id = this.context.uid.toString();
    return (
      <Drawer
        ref={(ref) => { this._drawer = ref; }}
        content={<SideBar />} >
        <Container>
          <Header style={{ backgroundColor: '#C0C0C0' }}>
            <Left>
              <Button transparent onPress={this.openDrawer.bind(this)}>
                <Icon style={styles.icon} name='menu' />
              </Button>
            </Left>
            <Body style={styles.body}>
              <Title style={{ color: '#FFF' }}> title </Title>
            </Body>
          </Header>
          <Content>
            <View style={styles.inputContainer}>
              <Input />
            </View>
          </Content>
        </Container>
      </Drawer>
      // <SafeAreaView>
      //   <View style={styles.messagesContainer}>
      //     <FlatList
      //       inverted
      //       data={this.state.messages}
      //       keyExtractor={function (item) {
      //         return item.created_at.toString();
      //       }}
      //       renderItem={function ({ item }) {
      //         const side = item.user_id.toString() === user_id ? 'right' : 'left'
      //         return (
      //           <Message side={side} message={item.message} />
      //         )
      //       }}
      //     />
      //   </View>

      // <View style={styles.inputContainer}>
      //   <Input />
      // </View>
      // </SafeAreaView>
    )
  }
}