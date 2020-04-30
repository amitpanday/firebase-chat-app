import React, { Component } from 'react';
import { Notification } from './src/lib';
import Setup from '~/setup/setup';


class App extends Component {

  componentDidMount() {
    Notification.getNotification();
  }

  render() {
    return (
      <Setup />
    );
  }
}

export default App;
