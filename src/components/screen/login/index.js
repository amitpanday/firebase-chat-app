import React, { Component } from 'react';
import { View, Text, Alert, TextInput, TouchableOpacity } from 'react-native';

import styles from './styles';

class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      phone: '',
      name: ''
    }
  }

  submitHandler = () => {
    if (this.state.phone < 10) {
      Alert.alert('Error', 'Wrong Number');
    } else if (this.state.name < 3) {
      Alert.alert('Error', 'Wrong Name');
    } else {
      //save user data
    }
  }

  render() {
    console.log(this.state.phone);
    return (
      <View style={styles.container}>
        <TextInput
          placeholder={'Phone Number'}
          keyboardType={'number-pad'}
          value={this.state.phone}
          style={styles.input}
          onChangeText={(phone) => this.setState({ phone })}
        />
        <TextInput
          placeholder={'Name'}
          value={this.state.name}
          style={styles.input}
          onChangeText={(name) => this.setState({ name })}
        />
        <TouchableOpacity
          onPress={this.submitHandler}
        >
          <Text style={styles.btnText}>Enter</Text>
        </TouchableOpacity>
      </View>
    );
  }
}


export default Login;