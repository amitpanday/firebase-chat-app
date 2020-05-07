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
      password: '',
      loading: true
    }
    this.validateUserData = this.validateUserData.bind(this);
  }

  submitUserData = () => {

    if (this.validateUserData()) {
      const { authAction, authData } = this.props;
      const email = this.state.email;
      const password = this.state.password;
      authAction.signIn(email, password);
      if (!authData.loading) {
        this.navigateToHomePage();
      }
    }
  }

  validateUserData = () => {
    if (this.state.email === '') {
      Alert.alert('Required', 'Invalid email & password !');
      return false;
    } else if (this.state.password === '') {
      Alert.alert('Required', 'Invalid email & password!');
      return false;
    }
    return true;
  }

  navigateToHomePage = () => {
    this.props.navigation.navigate('Home');
  }

  render() {
    const { authData } = this.props;
    if (!authData.loading) {
      this.navigateToHomePage();
    }
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