import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native';
import { Container, Icon, Row } from 'native-base';

import styles from './style';

class SideBar extends Component {

  render() {

    return (
      <Container style={styles.container}>
        <Row size={0.65} >
          <View style={styles.menuContainer}>
            <View style={styles.menuTitle}>
              <Text style={styles.menuName}>Name</Text>
            </View>
          </View>
        </Row>
      </Container>
    );
  };

}

export default SideBar;