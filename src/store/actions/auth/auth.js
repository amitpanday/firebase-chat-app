import { FirebaseService } from '~/lib';

const auth = {

  signIn: function (email, password) {
    return dispatch => {
      FirebaseService.signInUser(email, password, dispatch);
    }
  },

  signUp: function (data) {
    return dispatch => {
      FirebaseService.signUpUser(data, dispatch);
    }
  },

  getAllUser: function () {
    return dispatch => {
      FirebaseService.getAllUser(dispatch);
    }
  }

};

export default auth;