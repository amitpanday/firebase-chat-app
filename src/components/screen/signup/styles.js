import { Dimensions, StyleSheet } from "react-native";

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ddd'
  },
  formContainer: {
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    padding: (width / 20)
  },
  uploadImage: {
    justifyContent: 'center',
    alignItems: 'center',
    height: (width / 3),
    width: (width / 3),
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 100,
    marginTop: (width / 8),
    backgroundColor: '#fff',
    elevation: 10,
    opacity: 0.9,
    padding: (width / 20)
  },
  cameraIcon: {
    fontSize: (width / 6),
    color: '#000',
    opacity: 0.6
  },
  inputContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: (width / 20)
  },
  input: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    width: width - 40,
    height: 45,
    borderRadius: 10,
    margin: 5,
    elevation: 10
  },
  inputIcon: {
    alignSelf: 'center',
    fontSize: (width / 12),
    opacity: 0.8
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    width: (width / 3),
    height: (width / 7),
    backgroundColor: '#347aeb',
    elevation: 10,
    opacity: 0.8,
    marginHorizontal:10
  },
  buttonText: {
    fontSize: (width / 12),
    color: '#fff'
  },
});

export default styles;