import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f5f5f5'
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: '#3a4f35',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 20,
    padding: 10
  },
  button: {
    backgroundColor: '#3a4f35',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#e9f5e6',
    fontSize: 16,
    fontWeight: 'bold'
  }
})