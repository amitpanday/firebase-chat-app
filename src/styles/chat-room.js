import { StyleSheet } from 'react-native'

import COLORS from './color'

export default StyleSheet.create({
  messagesContainer: {
    height: '100%',
    paddingBottom: 100
  },
  inputContainer: {
    width: '100%',
    height: 100,
    position: 'absolute',
    bottom: 0,
    paddingVertical: 10,
    paddingLeft: 20,

    borderTopWidth: 1,
    borderTopColor: COLORS.GREY
  },
  header: {
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    height: 60,
    backgroundColor: '#ddd'
  },
  headerText: {
    textAlign: 'center',
    fontSize: 22,
    color: '#000'
  }
})