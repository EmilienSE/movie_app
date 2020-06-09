// Components/FilmItem.js

import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { getImageFromApi } from '../API/TMDBApi'

class FilmItem extends React.Component {
  render() {
    const { film, displayDetailForFilm } = this.props
    return (
      <TouchableOpacity
        onPress={() => displayDetailForFilm(film.id)}>
        <Image
          style={styles.image}
          source={{uri: getImageFromApi(film.poster_path)}}
        />
        <View>
          <View>
            <Text>{film.title}</Text>
            <Text>{film.vote_average}</Text>
          </View>
          <View>
            <Text numberOfLines={6}>{film.overview}</Text>
          </View>
          <View>
            <Text>Sorti le {film.release_date}</Text>
          </View>
        </View>
      </TouchableOpacity>
    )
  }
}

export default FilmItem
