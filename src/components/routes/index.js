import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { useAuth } from '../contexts/AuthContext'
import AuthRoutes from './AuthRoutes'
import AppRoutes from './AppRoutes'

export default function Routes() {
  const { user } = useAuth()

  return (
    <NavigationContainer>
      { user ? <AppRoutes /> : <AuthRoutes /> }
    </NavigationContainer>
  )
}