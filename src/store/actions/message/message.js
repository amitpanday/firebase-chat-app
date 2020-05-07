import { FirebaseService } from '~/lib';

const message = {

  sendMessage: function (name, senderId, profilePicUrl, receiverId, message) {
    return dispatch => {
      FirebaseService.sendMessage(name, senderId, profilePicUrl, receiverId, message, dispatch);
    }
  },

  getUserMessages: function (senderId, receiverId) {
    return dispatch => {
      FirebaseService.getUserMessages(senderId, receiverId, dispatch);
    }
  },

  sendGroupMessages: function (name, senderId, profilePicUrl, message) {
    return dispatch => {
      FirebaseService.sendGroupMessages(name, senderId, profilePicUrl, message, dispatch);
    }
  },

  getGroupMessages: function () {
    return dispatch => {
      FirebaseService.getGroupMessages(dispatch);
    }
  }

};

export default message;