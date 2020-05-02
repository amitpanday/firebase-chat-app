import React from 'react'
import { Provider } from 'react-redux'
import AppContainer from '../app';
import store from '~/store';

const App = () => {

  return (
    <Provider store={store}>
      <AppContainer />
    </Provider>
  );
}

export default App;