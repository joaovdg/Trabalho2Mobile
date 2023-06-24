import React, { useEffect, useState } from 'react'
import { FlatList, Text, TouchableOpacity, View } from 'react-native'
import styles from './styles'

const MoviesPage = ({ navigation }) => {
  const [filmes, setFilmes] = useState([])
  const baseURL = 'https://api.otaviolube.com/api/filmes?populate=*'

  useEffect(() => {
    fetch(baseURL)
      .then(data => data.json())
      .then(objeto => {
        setFilmes(objeto.data)
      })
  }, [])

  const renderFilm = ({ item }) => {
    return (
      <TouchableOpacity 
        style={styles.item} 
        onPress={() => navigation.navigate('MovieDetails', { filme: item.attributes })}
      >
        <Text style={styles.title}>{item.attributes.titulo}</Text>
      </TouchableOpacity>
    )
  }

  return (
    <View style={styles.container}>
      <Text style={styles.pageTitle}>Filmes</Text>
      {filmes.length > 0 ? (
        <FlatList 
          data={filmes}
          renderItem={renderFilm}
          keyExtractor={(item) => item.id.toString()}
        />
      ) : (
        <Text>Carregando...</Text>
      )}
    </View>
  )
}

export default MoviesPage