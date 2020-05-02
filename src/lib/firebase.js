import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';
import firestore from '@react-native-firebase/firestore';
import { COLLECTIONS } from '~/config'


const fireBaseService = {

  signUpUser: function (data, dispatch) {
    auth().createUserWithEmailAndPassword(data.email, data.password)
      .then((result) => {
        const uid = result.uers.uid;
        fireBaseService.insertUserIntoUserTable(uid, data);
      })
  },
  insertUserIntoUserTable: function (uid, data) {
    database()
      .ref(COLLECTIONS.USERS)
      .push()
      .set({
        user_id: uid,
        email: data.email,
        imageUrl: '',
        name: data.name,
        profilePicUrl: '',
      });
  },
  signInUser: function (email, password, dispatch) {
    auth().signInWithEmailAndPassword(email, password)
      .then((user) => {
        dispatch({
          type: 'signIn',
          data: user,
          error: false,
          loading: false
        });
      });
  },
  logOutUser: function () {
    auth().signOut()
      .then(() => console.log('User signed out!'));
  },
  checkUserLoggedIn: function () {
    const subscriber = auth().onAuthStateChanged(this.onAuthStateChanged);
    console.log("subscriber =>", subscriber);
  },

  getAllUser: function (dispatch) {
    firestore()
      .collection(COLLECTIONS.USERS)
      .get()
      .then(querySnapshot => {
        const users = [];
        querySnapshot.forEach(documentSnapshot => {
          users.push({
            ...documentSnapshot.data()
          });
        });
        dispatch({
          type: 'users',
          data: users,
          error: false,
          loading: false
        })
      });
  },

  sendUserMessage: function (data) {
    const date = new Date().getTime();
    database()
      .ref(COLLECTIONS.MESSAGES)
      .push()
      .set({
        user_id: uid,
        message: message,
        created_at: date
      });
  },
  getUserByMessages: function (uid) {
    const messages = database().ref(COLLECTIONS.MESSAGES);
    return messages;
  }
};

export default fireBaseService;