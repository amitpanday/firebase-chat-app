import React, { useCallback, useState } from 'react'
import { View, TextInput } from 'react-native'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import actions from '~/store/actions';

import Button from '~/components/common/button'
import Loader from '~/components/common/loader'

import styles from './styles'

const input = (props) => {
  const { authData, receiverUserId, sendMessage } = props;
  const { profilePicUrl, name, user_id } = authData.authData;
  const [message, setMessage] = useState('');
  const sendMessageToUser = () => {
    if (receiverUserId) {
      sendMessage.sendMessage(name, user_id, profilePicUrl, receiverUserId, message);
    } else {
      sendMessage.sendGroupMessages(name, user_id, profilePicUrl, message);
    }
    setMessage('');
  }
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={message}
          onChangeText={setMessage}
          placeholder="Write you message" />
      </View>

      <Button
        text="Send"
        onPress={sendMessageToUser}
      />
    </View>
  )
}

const mapStateToProps = state => {

  return {
    authData: state.Auth,
  }
};

const mapDispatchToProps = (dispatch) => {

  return {
    sendMessage: bindActionCreators(actions.MessageAction, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(input);