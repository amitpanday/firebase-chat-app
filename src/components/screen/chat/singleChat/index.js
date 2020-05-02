import React, { Component } from 'react'
import { FlatList, SafeAreaView, View } from 'react-native';
import Message from '~/components/ui/message'
import Input from '~/components/ui/input'
import { chatRoomStyles as styles } from '~/styles'

class SingleChat extends Component {
  state = {
    messages: []
  }

  render() {
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

export default SingleChat;