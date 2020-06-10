import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import Search from '../Components/Search'
import FilmDetail from '../Components/FilmDetail'

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
    	headerStyle: { backgroundColor: 'black' },
      headerTitleStyle: { color: 'white' },
      headerTintColor: 'white'
    }
  }
})

export default createAppContainer(SearchStackNavigator)
