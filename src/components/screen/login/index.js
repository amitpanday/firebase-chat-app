import React, { Component } from 'react';
import {
  View,
  Text,
  Alert,
  TextInput,
  TouchableOpacity
} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import actions from '~/store/actions';

import styles from './styles';

class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    }
  }

  submitUserData = () => {

    // this.validateUserData();
    const { authAction, authData } = this.props;
    const email = 'Last@gmail.com';                            //this.state.email;
    const password = '12345678';                         //this.state.password;
    authAction.signIn(email, password);
    this.props.navigation.navigate('Home');
  }

  validateUserData = () => {
    if (this.state.email === '') {
      Alert.alert('Error', 'Wrong email');
      return;
    } else if (this.state.password < 3) {
      Alert.alert('Error', 'Wrong password');
      return;
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          placeholder={'Enter email'}
          keyboardType={'email-address'}
          value={this.state.email}
          style={styles.input}
          onChangeText={(email) => this.setState({ email })}
        />
        <TextInput
          placeholder={'Enter password'}
          value={this.state.password}
          style={styles.input}
          onChangeText={(password) => this.setState({ password })}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={this.submitUserData}
        >
          <Text style={styles.btnText}>Enter</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const mapStateToProps = state => {

  return {
    authData: state.Auth,
  }
};

const mapDispatchToProps = (dispatch) => {

  return {
    authAction: bindActionCreators(actions.AuthAction, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);