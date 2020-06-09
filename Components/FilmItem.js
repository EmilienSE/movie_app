// Components/FilmItem.js

import React from 'react'
import { StyleSheet, View } from 'react-native'

class FilmItem extends React.Component {
  render() {
    return (
      <View style={styles.date_container} />
    )
  }
}

const styles = StyleSheet.create({
  main_container: {
    height: 190,
    flexDirection: 'row'
  }
})

export default FilmItem
