import { Dimensions, StyleSheet } from 'react-native';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center'
  },
  input: {
    padding: 10,
    borderWidth: 1,
    borderColor: '#000',
    width: '90%',
    marginBottom: 10,
    borderRadius: 5
  },
  btnText: {
    color: '#000',
    fontSize: 22
  }
});

export default styles;