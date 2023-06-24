import React from 'react'
import { Text, TextInput, TouchableOpacity, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import styles from './styles'

const ForgePasswordPage = () => {
  const navigation = useNavigation()
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Esqueceu sua senha?</Text>
      <TextInput style={styles.input} placeholder="Seu e-mail" />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Recuperar senha</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text>Retornar para a página de Login</Text>
      </TouchableOpacity>
    </View>
  )
}

export default ForgePasswordPage
