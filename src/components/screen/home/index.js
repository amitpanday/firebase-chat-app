import React, { Component } from 'react'
import { FlatList, View, Text, TouchableOpacity, Image } from 'react-native';
import { Icon } from 'native-base';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import actions from '~/store/actions';
import styles from './styles';


class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: ''
    };
  }

  componentDidMount() {
    const { authAction, authData } = this.props;
    authAction.getAllUser();
    this.setState({
      data: authData.users
    });
  }

  renderActiveUser = ({ item }) => {
    const { image, name, user_id } = item;
    return (
      <TouchableOpacity
        key={user_id}
        style={styles.item}
        onPress={() => this.props.navigation.navigate('SingleChat', {
          user_id: user_id
        })}
      >
        <View style={styles.imageContent}>
          <View style={styles.image}>
            {image ?
              <Image source={image} style={styles.userImage} />
              :
              <Icon name={'person'} style={styles.userIcon} />
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
    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.data}
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