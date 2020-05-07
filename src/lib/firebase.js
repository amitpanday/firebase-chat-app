import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import { COLLECTIONS } from '~/config'

const fireBaseService = {

  signInUser: function (email, password, dispatch) {
    auth().signInWithEmailAndPassword(email, password)
      .then((user) => {
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

  getAllUser: function (currentUserId, dispatch) {
    firestore()
      .collection(COLLECTIONS.USERS)
      .get()
      .then(querySnapshot => {
        const users = [];
        querySnapshot.forEach(documentSnapshot => {
          const userData = documentSnapshot.data();
          if (userData.user_id !== currentUserId) {
            users.push(userData);
          }
        });
        dispatch({
          type: 'users',
          data: users,
          error: false,
          loading: false
        })
      });
  },

  sendMessage: function (name, sender_id, profileUrl, receiverId, message, dispatch) {
    const date = new Date().toString();
    firestore()
      .collection('messages')
      .add({
        isRead: '0',
        name: name,
        profilePicUrl: profileUrl,
        receiver_id: receiverId,
        senderId: sender_id,
        text: message,
        timestamp: date,
        unique_id: (sender_id + '-' + receiverId)
      })
      .then((docRef) => {
        fireBaseService.getUserMessages(sender_id, receiverId, dispatch);
      })
      .catch((error) => {
        console.log("Error adding document: ", error);
      });
  },
  getUserMessages: function (senderId, receiverId, dispatch) {
    let messages = [];
    let array_val = [senderId + "-" + receiverId, receiverId + "-" + senderId];
    firestore()
      .collection(COLLECTIONS.MESSAGES)
      .where("unique_id", "in", array_val)
      .orderBy("timestamp", 'desc')
      .limit(12)
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(documentSnapshot => {
          const userData = documentSnapshot.data();
          messages.push(userData);
        });
        dispatch({
          type: 'getUserMessages',
          data: messages,
          error: false,
          loading: false
        })
      })
  },
  getUserById: function (uid, dispatch) {
    firestore()
      .collection(COLLECTIONS.USERS)
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(documentSnapshot => {
          const userData = documentSnapshot.data();
          if (userData.user_id === uid) {
            dispatch({
              type: 'signIn',
              data: userData,
              error: false,
              loading: false
            })
          }
        });
      })
  },
  getProfileUrl: function () {
    return (
      auth().currentUser.photoURL || "/images/profile_placeholder.png"
    );
  },
  sendGroupMessages: function (name, sender_id, profileUrl, message, dispatch) {
    const date = new Date().toString();
    firestore()
      .collection('groups')
      .add({
        name: name,
        profilePicUrl: profileUrl,
        senderId: sender_id,
        text: message,
        timestamp: date,
      })
      .then((docRef) => {
        fireBaseService.getGroupMessages(dispatch);
      })
      .catch((error) => {
        console.log("Error adding document: ", error);
      });
  },
  getGroupMessages: function (dispatch) {
    let messages = [];
    firestore()
      .collection('groups')
      .orderBy("timestamp", 'desc')
      .limit(12)
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(documentSnapshot => {
          const userData = documentSnapshot.data();
          messages.push(userData);
        });
        dispatch({
          type: 'getGroupMessages',
          data: messages,
          error: false,
          loading: false
        })
      })
  }
};

export default fireBaseService;