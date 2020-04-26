import React, { useState, useEffect } from 'react';
import ClassExample from './components/screen/classexample';
import Loader from '~/components/common/loader';
import { firebaseService, UserContext } from './lib'

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    firebaseService.signIn().then((user) => {
      const userData = user.user;
      setUser(userData);
    })
      .catch(error => {
        alert('Something went wrong');
        return false;
      });

  }, [false]);

  if (!user) {
    return <Loader />
  }

  return (
    <UserContext.Provider value={user}>
      <ClassExample />
    </UserContext.Provider>
  );
}

export default App;