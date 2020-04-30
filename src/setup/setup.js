import React from 'react';
import AppContainer from '../app';
import { UserContext } from '../lib'

const App = () => {

  const user = null;

  return (
    <UserContext.Provider value={user}>
      <AppContainer />
    </UserContext.Provider>
  );
}

export default App;