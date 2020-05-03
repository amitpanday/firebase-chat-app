import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { Root } from 'native-base';

import Loader from '~/components/common/loader';
import SignUp from '~/components/screen/signup';
import Login from '~/components/screen/login';
import Home from './components/screen/home';
import SingleChat from './components/screen/chat/singleChat'

const authNavigator = createStackNavigator(
  {
    SignUp: SignUp,
    Login: Login
  },
  {
    initialRouteName: "Login",
    headerMode: 'none',
  }
);

const appNavigator = createStackNavigator(
  {
    Home: Home,
    SingleChat: SingleChat
  },
  {
    initialRouteName: "Home",
    headerMode: 'none',
  }
);

const AppNavContainer = createAppContainer(
  createSwitchNavigator(
    {
      Auth: authNavigator,
      App: appNavigator,
      Loader: Loader
    },
    {
      initialRouteName: 'Auth',
    }
  )
);


const App = () => {

  return (
    <Root>
      <AppNavContainer />
    </Root>
  );
}

export default App;