import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ddd'
  },
  fabButton: {
    backgroundColor: '#fff',
    elevation: 10
  },
  addIcon: {
    fontSize: (width / 10),
    color: '#326fa8'
  },
  item: {
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    width: width,
    height: (width / 5.5),
    backgroundColor: '#fff',
    padding: 2,
    marginVertical: 5,
    elevation: 2,
    opacity: 0.9
  },
  imageContent: {
    flex: 0.2,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center'
  },
  titleContent: {
    flex: 0.8,
    justifyContent: 'center',
    alignContent: 'center'
  },
  image: {
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    width: (width / 6),
    height: (width / 6),
    borderRadius: 50,
    backgroundColor: '#ddd'
  },
  title: {
    fontSize: (width / 17),
    color: '#000',
    opacity: 0.8
  },
  userImage: {
    width: (width / 6),
    height: (width / 6),
    borderRadius: 50,
    resizeMode: 'cover',
  },
  userIcon: {
    fontSize: (width / 10),
    color: '#000'
  }
});