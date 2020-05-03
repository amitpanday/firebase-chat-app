import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import { Container, Icon, Button } from 'native-base';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import actions from '~/store/actions';

import styles from './styles';

class SignUp extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: ''
    }
  }

  saveUserData = () => {
    const { authAction } = this.props;
    const data = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password
    };
    authAction.signUp(data);
    this.props.navigation.navigate('Home');
  }

  render() {
    return (
      <Container>
        <View style={styles.container}>
          <View style={styles.formContainer}>
            <View style={styles.uploadImage}>
              <TouchableOpacity>
                {this.state.image ?
                  <Image source={this.state.image} style={styles.uploadedImage} />
                  :
                  <Icon name={'camera'} style={styles.cameraIcon} />
                }
              </TouchableOpacity>
            </View>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                placeholder={'Enter Name'}
                maxLength={50}
                value={this.state.name}
                onChangeText={(name) => this.setState({ name })}
              />
              <TextInput
                style={styles.input}
                keyboardType={'email-address'}
                placeholder={'Enter email address'}
                value={this.state.email}
                onChangeText={(email) => this.setState({ email })}
              />
              <TextInput
                style={styles.input}
                placeholder={'temporary password'}
                maxLength={8}
                value={this.state.password}
                onChangeText={(password) => this.setState({ password })}
                onSubmitEditing={() => this.saveUserData()}
              />
            </View>
            <View style={styles.buttonContainer}>
              <Button
                style={styles.button}
                onPress={() => this.saveUserData()}
              >
                <Text style={styles.buttonText}>SignUp</Text>
              </Button>
              <Button
                style={styles.button}
                onPress={() => this.props.navigation.navigate('Login')}
              >
                <Text style={styles.buttonText}>Login</Text>
              </Button>
            </View>
          </View>
        </View>
      </Container>
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

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);