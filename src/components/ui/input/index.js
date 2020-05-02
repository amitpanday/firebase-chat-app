import React, { useCallback, useState, useContext } from 'react'
import { View, TextInput } from 'react-native'
import { firebaseService, UserContext } from '~/lib';
import Button from '~/components/common/button'
import Loader from '~/components/common/loader'

import styles from './styles'


export default function Input() {
  const uid = 123456789;
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState('');
  const handlePress = useCallback(
    function () {
      setIsLoading(true)
      firebaseService.createMessage(message, uid)
        .then(() => {
          setIsLoading(false)
          setMessage('')
        });
    },
    [message]
  )

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
        onPress={handlePress}
        disabled={isLoading} />

      {isLoading && <Loader />}
    </View>
  )
}