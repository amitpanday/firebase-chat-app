import React, { Component } from 'react'
import { FlatList, SafeAreaView, View, Text } from 'react-native';
import Message from '~/components/ui/message'
import Input from '~/components/ui/input'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import actions from '~/store/actions';
import { chatRoomStyles as styles } from '~/styles'

class SingleChat extends Component {
  state = {
    messages: []
  }

  componentDidMount() {
    const { messageAction, authData } = this.props;
    const userId = authData.authData.user_id;
    const receiverData = this.props.navigation.getParam('receiverData');
    messageAction.getUserMessages(userId, receiverData.user_id);
  }

  render() {
    const { authData, messages } = this.props;
    const userMessages = messages.messages;
    const userId = authData.authData.user_id;
    const receiverData = this.props.navigation.getParam('receiverData');
    return (
      <SafeAreaView>
        <View style={styles.messagesContainer}>
          <View style={styles.header}>
            <Text style={styles.headerText}>{receiverData.name}</Text>
          </View>
          <FlatList
            inverted
            data={userMessages}
            keyExtractor={function (item) {
              return item.index;
            }}
            renderItem={function ({ item }) {
              const side = item.senderId === userId ? 'right' : 'left'
              return (
                <Message side={side} message={item.text} />
              )
            }}
          />
        </View>

        <View style={styles.inputContainer}>
          <Input receiverUserId={receiverData.user_id} />
        </View>
      </SafeAreaView>
    )
  }
}

const mapStateToProps = state => {

  return {
    authData: state.Auth,
    messages: state.Messages
  }
};

const mapDispatchToProps = (dispatch) => {

  return {
    messageAction: bindActionCreators(actions.MessageAction, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleChat);