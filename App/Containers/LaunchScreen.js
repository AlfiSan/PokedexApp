import React, { Component } from 'react'
import { StatusBar, Image, View } from 'react-native'
import { Images } from '../Themes'

// Styles
import styles from './Styles/LaunchScreenStyles'

export default class LaunchScreen extends Component {

  componentDidMount() {
    setTimeout(() => {
      this.props.navigation.navigate("PokedexListScreen");
    }, 1500);
  }

  render () {
    return (      
      <View style={styles.container}>
        <StatusBar backgroundColor={"#f1c40f"} barStyle='light-content' />
          <View style={styles.section}>
            <Image
                style={styles.Image}
                source={require('../Images/logoPokemon.png')}
            />
          </View>
        </View>
    )
  }
}

 
