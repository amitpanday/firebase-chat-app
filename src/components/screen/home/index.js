import React, { Component } from 'react'
import { FlatList, View, Text, TouchableOpacity, Image } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import actions from '~/store/actions';
import styles from './styles';


class Home extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { authAction, authData } = this.props;
    const currentUserId = authData.authData.user_id;
    authAction.getAllUser(currentUserId);
  }

  renderActiveUser = ({ item }) => {
    const { imageUrl, profilePicUrl, name, user_id } = item;
    return (
      <TouchableOpacity
        key={user_id}
        style={styles.item}
        onPress={() => this.props.navigation.navigate('SingleChat', {
          receiverData: item
        })}
      >
        <View style={styles.imageContent}>
          <View style={styles.image}>
            {imageUrl ?
              <Image source={imageUrl} style={styles.userImage} />
              :
              <Image source={{ uri: profilePicUrl }} style={styles.userImage} />
            }
          </View>
        </View>
        <View style={styles.titleContent}>
          <Text style={styles.title}>{name}</Text>
        </View>
      </TouchableOpacity>
    );
  }

  render() {
    let data = this.props.authData.users;
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.leftSide}>
            <Text style={styles.title}>Contact List</Text>
          </View>
          <View style={styles.rightSide}>
            <TouchableOpacity
              style={styles.groupButton}
              onPress={() => this.props.navigation.navigate('GroupChat')}
            >
              <Text style={styles.groupButtonText}>Group Chat</Text>
            </TouchableOpacity>
          </View>
        </View>
        <FlatList
          data={data}
          renderItem={(item) => this.renderActiveUser(item)}
          keyExtractor={item => item.index}
        />
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

export default connect(mapStateToProps, mapDispatchToProps)(Home);