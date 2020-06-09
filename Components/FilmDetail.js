// Components/FilmDetail.js

import React from 'react'
import { StyleSheet, View } from 'react-native'

class FilmDetail extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      film: undefined,
      isLoading: true
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
    flex: 1
  }
})

export default FilmDetail
