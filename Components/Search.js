import React from 'react'
import { StyleSheet, View, TextInput, TouchableOpacity, Text, FlatList, ActivityIndicator, Button } from 'react-native'
import FilmList from './FilmList'
import { getFilmsFromApiWithSearchedText } from '../API/TMDBApi'

class Search extends React.Component {

  constructor(props) {
    super(props)
    this.searchedText = ""
    this.page = 0
    this.totalPages = 0
    this.state = {
      films: [],
      isLoading: false
    }
    this._loadFilms = this._loadFilms.bind(this);
  }

  _loadFilms() {
    if (this.searchedText.length > 0) {
      this.setState({ isLoading: true })
      getFilmsFromApiWithSearchedText(this.searchedText, this.page+1).then(data => {
          this.page = data.page
          this.totalPages = data.total_pages
          this.setState({
            films: [ ...this.state.films, ...data.results ],
            isLoading: false
          })
      })
    }
  }

  _searchTextInputChanged(text) {
    this.searchedText = text
  }

  _searchFilms() {
    this.page = 0
    this.totalPages = 0
    this.setState({
      films: [],
    }, () => {
        this._loadFilms()
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

  render() {
    return (
      <View style={styles.main_container}>
       <TextInput
         style={styles.textinput}
         placeholder='Titre du film'
         onChangeText={(text) => this._searchTextInputChanged(text)}
         onSubmitEditing={() => this._searchFilms()}
       />
        <TouchableOpacity style={styles.button_search} onPress={() => this._searchFilms()}>
          <Text style={styles.button_search_text}>Rechercher</Text>
        </TouchableOpacity>
       <FilmList
         films={this.state.films}
         navigation={this.props.navigation}
         loadFilms={this._loadFilms}
         page={this.page}
         totalPages={this.totalPages}
       />
       {this._displayLoading()}
     </View>
    )
  }
}

const styles = StyleSheet.create({
  main_container: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: 'black'
  },
  textinput: {
    marginLeft: 5,
    marginRight: 5,
    height: 50,
    backgroundColor: 'white',
    color: 'grey',
    borderWidth: 1,
    borderRadius:20,
    paddingLeft: 5
  },
  loading_container: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 100,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center'
  },
  button_search: {
    marginLeft: 5,
    marginRight: 5,
    height: 50,
    backgroundColor: 'orange',
    borderRadius:20,
    paddingLeft: 5,
    marginTop: 5,
    justifyContent: 'center',
    alignItems: 'center'
  },
  button_search_text: {
	color: 'white'
  }
})

export default Search
