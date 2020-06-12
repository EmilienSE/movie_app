import React from 'react'
import { StyleSheet, Image} from 'react-native'
import { createAppContainer } from 'react-navigation'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { createStackNavigator } from 'react-navigation-stack'
import Search from '../Components/Search'
import FilmDetail from '../Components/FilmDetail'
import FilmList from '../Components/FilmList'
import Favorites from '../Components/Favorites'

const SearchStackNavigator = createStackNavigator({
  Search: {
    screen: Search,
    navigationOptions: {
    	title: 'Rechercher',
    	headerStyle: { backgroundColor: 'black' },
      headerTitleStyle: { color: 'white' },
    }
  },
  FilmDetail: {
    screen: FilmDetail,
    navigationOptions: {
      title: 'Détail Film',
      headerStyle: {backgroundColor: 'black'},
      headerTitleStyle: {color: 'white'},
      headerTintColor: 'white'
    }
  }
})

const FavoritesStackNavigator = createStackNavigator({
  Favorites: {
    screen: Favorites,
    navigationOptions: {
    	title: 'Favoris',
    	headerStyle: { backgroundColor: 'black' },
      headerTitleStyle: { color: 'white' },
    }
  },
  FilmDetail: {
    screen: FilmDetail,
    navigationOptions: {
      title: 'Détail Film',
      headerStyle: {backgroundColor: 'black'},
      headerTitleStyle: {color: 'white'},
      headerTintColor: 'white'
    }
  }
})

const MoviesTabNavigator = createBottomTabNavigator(
  {
    Search: {
      screen: SearchStackNavigator,
      navigationOptions: {
        tabBarIcon: () => {
          return <Image
            source={require('../Images/ic_search.png')}
            style={styles.icon}/>
        }
      }
    },
    Favorites: {
      screen: FavoritesStackNavigator,
      navigationOptions: {
        tabBarIcon: () => {
          return <Image
            source={require('../Images/ic_favorite_black.png')}
            style={styles.icon}/>
        }
      }
    }
  },
  {
    tabBarOptions: {
      activeBackgroundColor: '#DDDDDD',
      inactiveBackgroundColor: '#FFFFFF',
      showLabel: false,
      showIcon: true
    }
  }
)

const styles = StyleSheet.create({
  icon: {
    width: 30,
    height: 30
  }
})

export default createAppContainer(MoviesTabNavigator)
