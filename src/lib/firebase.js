import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';
import { COLLECTIONS } from '~/config'


const fireBaseService = {

  createUserInFireBase: function (email, password) {
    return auth().createUserWithEmailAndPassword('pandaygamit584@gmail.com', '12345678');
  },
  insertUserIntoUserTable: function (data) {
    database()
      .ref(COLLECTIONS.USERS)
      .push()
      .set({
        user_id: data.uid,
        email: data.email,
        imageUrl: '',
        name: data.name,
        profilePicUrl: '',
      });
  },
  signInUser: function (email, password) {
    const user = auth().signInWithEmailAndPassword('pandaygamit584@gmail.com', '12345678');
    return user;
  },
  logOutUser: function () {
    auth().signOut()
      .then(() => console.log('User signed out!'));
  },
  checkUserLoggedIn: function () {
    const subscriber = auth().onAuthStateChanged(this.onAuthStateChanged);
    console.log("subscriber =>", subscriber);
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