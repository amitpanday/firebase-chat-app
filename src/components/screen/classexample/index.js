import React from 'react'
import { FlatList, SafeAreaView, View } from 'react-native';
import { firebaseService, UserContext } from '~/lib';
import Message from '~/components/ui/message'
import Input from '~/components/ui/input'
import { chatRoomStyles as styles } from '~/styles'



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
        if (messages) {
          this.responseMessage(messages);
        }
      });
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

  render() {
    const user_id = this.context.uid.toString();
    return (
      <SafeAreaView>
        <View style={styles.messagesContainer}>
          <FlatList
            inverted
            data={this.state.messages}
            keyExtractor={function (item) {
              return item.created_at.toString();
            }}
            renderItem={function ({ item }) {
              const side = item.user_id.toString() === user_id ? 'right' : 'left'
              return (
                <Message side={side} message={item.message} />
              )
            }}
          />
        </View>

        <View style={styles.inputContainer}>
          <Input />
        </View>
      </SafeAreaView>
    )
  }
}