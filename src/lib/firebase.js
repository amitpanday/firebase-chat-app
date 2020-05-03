import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';
import firestore from '@react-native-firebase/firestore';
import { COLLECTIONS } from '~/config'


const fireBaseService = {

  signInUser: function (email, password, dispatch) {
    auth().signInWithEmailAndPassword(email, password)
      .then((user) => {
        console.log(user.user);
        const uid = user.user.uid;
        fireBaseService.getUserById(uid, dispatch);
      });
  },

  signUpUser: function (data, dispatch) {
    auth().createUserWithEmailAndPassword(data.email, data.password)
      .then((result) => {
        const uid = result.user.uid;
        dispatch({
          type: 'signUp',
          data: result.user,
          error: false,
          loading: false
        });
        fireBaseService.insertUserIntoUserTable(uid, data);
      })
  },

  checkUserLoggedIn: function () {
    const subscriber = auth().onAuthStateChanged(this.onAuthStateChanged);
    console.log("subscriber =>", subscriber);
  },

  logOutUser: function () {
    auth().signOut()
      .then(() => console.log('User signed out!'));
  },

  insertUserIntoUserTable: function (uid, data) {
    firestore()
      .collection(COLLECTIONS.USERS)
      .add({
        user_id: uid,
        email: data.email,
        imageUrl: '',
        name: data.name,
        profilePicUrl: '',
      })
      .then(() => {
        console.log('User added!');
      });
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

  sendMessage: function (name, senderId, receiverId, message, dispatch) {
    const date = new Date().getTime();
    console.log(name, senderId, receiverId, message, dispatch);
    // firestore()
    //   .collection(COLLECTIONS.MESSAGES)
    //   .add({
    //     isRead: 0,
    //     name: name,
    //     profilePicUrl: '',
    //     receiver_id: receiverId,
    //     senderId: senderId,
    //     text: message,
    //     timestamp: date,
    //     unique_id: senderId + receiverId
    //   });
  },
  getUserById: function (uid, dispatch) {
    firestore()
      .collection(COLLECTIONS.USERS)
      .doc(uid)
      .get()
      .then(documentSnapshot => {
        console.log('User exists: ', documentSnapshot.exists);

        if (documentSnapshot.exists) {
          console.log('User data: ', documentSnapshot.data());
        }
      });
    // dispatch({
    //   type: 'signIn',
    //   data: user.user,
    //   error: false,
    //   loading: false
    // })
  }
};

export default fireBaseService;