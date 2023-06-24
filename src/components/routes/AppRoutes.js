import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { useAuth } from '../contexts/AuthContext'
import DashboardPage from '../pages/DashboardPage/DashboardPage'
import MoviesPage from '../pages/MoviesPage/MoviesPage'
import MovieDetailsPage from '../pages/MovieDetailsPage/MovieDetailsPage'

const Stack = createStackNavigator()

const AppRoutes = () => {
  const { logout } = useAuth()

  return (
    <Stack.Navigator initialRouteName="Dashboard">
      <Stack.Screen 
        name="Dashboard" 
        component={DashboardPage} 
        options={{
          headerRight: () => (
            <Button title="Logout" onPress={logout} />
          ),
        }}
      />
      <Stack.Screen name="Movies" component={MoviesPage} />
      <Stack.Screen name="MovieDetails" component={MovieDetailsPage} />
    </Stack.Navigator>
  )
}

export default AppRoutes