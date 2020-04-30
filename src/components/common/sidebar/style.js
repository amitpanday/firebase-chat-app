import { Dimensions, StyleSheet } from 'react-native';

const { width, height } = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    backgroundColor: "#fff",
  },
  drawerProfileCover: {
    flex: 1,
    height: '13rem',
    backgroundColor: "rgb(75,0,130)",
    justifyContent: 'center',
    alignItems: 'center',
  },
  menuContainer: {
    justifyContent: 'flex-start',
    alignContent: 'flex-start',
    padding: 5
  },
  menuList: {
    marginVertical: 5,
    width: width,
    height: width,
  },
  menuTitle: {
    padding: 2,
    paddingLeft: 20,
  },
  userInfoContainer: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  nameText: {
    textAlign: 'center',
    fontWeight: '700',
    fontSize: 8,
    color: '#fff',
    opacity: 0.73
  },
  menuName: {
    textAlign: 'right',
    fontWeight: '600',
    fontSize: 16,
    color: '#0021db',
    opacity: 0.73
  },
  footerText: {
    textAlign: "center",
    marginTop: 5
  },
  menuicon: {
    fontSize: 16,
    color: '#0021db',
    opacity: 0.60,
    elevation: 30
  }
});
