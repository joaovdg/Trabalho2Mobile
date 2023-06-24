import React from 'react'
import { Image, Text, View } from 'react-native'
import styles from './styles'

const MovieDetailsPage = ({ route }) => {
  const { filme } = route.params

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{ uri: filme.poster }}
      />
      <Text style={styles.title}>{filme.titulo}</Text>
      <Text style={styles.description}>{filme.sinopse}</Text>
    </View>
  )
}

export default MovieDetailsPage