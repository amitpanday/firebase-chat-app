import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';
import { COLLECTIONS } from '~/config'

export default class FirebaseService {
  messageRef = database().ref(COLLECTIONS.MESSAGES);

  signIn() {
    const user = auth().signInAnonymously();
    return user;
  }

  fetchMessages() {
    const messages = database().ref(COLLECTIONS.MESSAGES);
    return messages;
  }

  async createMessage(message, uid) {
    const date = new Date().getTime();
    await database()
      .ref(COLLECTIONS.MESSAGES)
      .push()
      .set({
        user_id: uid,
        message: message,
        created_at: date
      });
  }
}