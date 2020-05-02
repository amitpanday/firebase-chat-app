import { FirebaseService } from '~/lib';

const auth = {

  getMessageByUserId: function (data) {
    return dispatch => {
      FirebaseService.getMessageByUserId(data, dispatch);
    }
  },


};

export default auth;