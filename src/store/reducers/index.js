import { combineReducers } from 'redux';
import Auth from './auth/auth';
import Messages from './message/message'

export default combineReducers({
  Auth,
  Messages
});