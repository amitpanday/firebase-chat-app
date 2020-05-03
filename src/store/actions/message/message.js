import { FirebaseService } from '~/lib';

const message = {

  sendMessage: function (name, senderId, receiverId, message) {
    return dispatch => {
      FirebaseService.sendMessage(name, senderId, receiverId, message, dispatch);
    }
  },

  getMessageByUserId: function (data) {
    return dispatch => {
      FirebaseService.getMessageByUserId(data, dispatch);
    }
  },


};

export default message;