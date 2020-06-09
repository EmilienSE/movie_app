// Components/FilmDetail.js

import React from 'react'
import { View, Text, ActivityIndicator, ScrollView, Image } from 'react-native'
import { getFilmDetailFromApi, getImageFromApi } from '../API/TMDBApi'
import moment from 'moment'
import numeral from 'numeral'

class FilmDetail extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      film: undefined,
      isLoading: true
    }
  }

  componentDidMount() {
    getFilmDetailFromApi(this.props.navigation.state.params.idFilm).then(data => {
      this.setState({
        film: data,
        isLoading: false
      })
    })
  }

  _displayLoading() {
    if (this.state.isLoading) {
      return (
        <View style={styles.loading_container}>
          <ActivityIndicator size='large' />
        </View>
      )
    }
  }

  _displayFilm() {
    const { film } = this.state
    if (film != undefined) {
      return (
        <ScrollView>
          <Image
            source={{uri: getImageFromApi(film.backdrop_path)}}
          />
          <Text>{film.title}</Text>
          <Text>{film.overview}</Text>
          <Text>Sorti le {moment(new Date(film.release_date)).format('DD/MM/YYYY')}</Text>
          <Text>Note : {film.vote_average} / 10</Text>
          <Text>Nombre de votes : {film.vote_count}</Text>
          <Text>Budget : {numeral(film.budget).format('0,0[.]00 $')}</Text>
          <Text>Genre(s) : {film.genres.map(function(genre){
              return genre.name;
            }).join(" / ")}
          </Text>
          <Text>Companie(s) : {film.production_companies.map(function(company){
              return company.name;
            }).join(" / ")}
          </Text>
        </ScrollView>
      )
    }
  }

  render() {
    return (
      <View>
        {this._displayLoading()}
        {this._displayFilm()}
      </View>
    )
  }
}

export default FilmDetail
