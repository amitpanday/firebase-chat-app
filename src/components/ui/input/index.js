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
  const { user_id, name } = authData;
  const [message, setMessage] = useState('');
  // const sendToUserMessage = () => {
  //   sendMessage.sendMessage(name, user_id, receiverUserId, message);
  // }
  console.log(authData);

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
      // onPress={sendToUserMessage}
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