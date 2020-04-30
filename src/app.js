import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { Root } from 'native-base';

import Home from './components/screen/home';
import Loader from '~/components/common/loader';


const authNavigator = createStackNavigator(
  {
    Login: Loader
  },
  {
    initialRouteName: "Login",
    headerMode: 'none',
  }
);

const appNavigator = createStackNavigator(
  {
    Home: Home
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
      initialRouteName: 'Loader',
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