import React, { useContext } from 'react'
import { Button, Text, TouchableOpacity, View } from 'react-native'
import { AuthContext } from '../../contexts/AuthContext'
import styles from './styles'

const DashboardPage = () => {
  const { logout } = useContext(AuthContext)

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem-vindo ao Dashboard</Text>
      <TouchableOpacity style={styles.button} onPress={logout}>
        <Text style={styles.buttonText}>Logout</Text>
      </TouchableOpacity>
    </View>
  )
}

export default DashboardPage
