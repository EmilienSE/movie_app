// Components/Search.js

import React from 'react'
import { StyleSheet, View } from 'react-native'

class Search extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      films: [],
      isLoading: false
    }
  }

  render() {
    return (
      <View style={styles.main_container} />
    )
  }
}

const styles = StyleSheet.create({
  main_container: {
    flex: 1,
    marginTop: 20
  }
})

export default Search
