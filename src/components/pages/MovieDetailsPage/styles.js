import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f5f5f5'
  },
  image: {
    width: '80%',
    height: 200,
    marginBottom: 20,
    resizeMode: 'cover'
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    fontWeight: 'normal',
    marginBottom: 10,
    textAlign: 'justify',
    paddingHorizontal: 10
  },
})