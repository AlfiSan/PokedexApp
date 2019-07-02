import { createStackNavigator, createAppContainer } from 'react-navigation'
import PokedexDetailScreen from '../Containers/PokedexDetailScreen'
import PokedexListScreen from '../Containers/PokedexListScreen'
import LaunchScreen from '../Containers/LaunchScreen'

import styles from './Styles/NavigationStyles'

// Manifest of possible screens
const PrimaryNav = createStackNavigator({
  PokedexDetailScreen: { screen: PokedexDetailScreen },
  PokedexListScreen: { screen: PokedexListScreen },
  LaunchScreen: { screen: LaunchScreen }
}, {
  // Default config for all screens
  headerMode: 'none',
  initialRouteName: 'LaunchScreen',
  navigationOptions: {
    headerStyle: styles.header
  }
})

export default createAppContainer(PrimaryNav)
