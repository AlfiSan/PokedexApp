import React, { Component } from 'react'
import {
  ScrollView,
  View,
  Text,
  Image,
  StatusBar,
  TouchableOpacity,
  ActivityIndicator
} from 'react-native';
import PokemonList from '../Components/PokedexBasicInfo';
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/PokedexListScreenStyle'

class PokedexListScreen extends Component {
  render () {
    return (
      <View style={styles.container}>
      <StatusBar backgroundColor={"#f1c40f"} translucent barStyle="light" />
      <View style={styles.viewTitle}>
        <Text style={styles.titleText}>
          Pokemon}
        </Text>
      </View>
      { (loading) &&
          <View style={styles.loading}>
            <ActivityIndicator size='large' color={"#f1c40f"} />
          </View>
      }
      <ScrollView contentContainerStyle={styles.viewList}>
        <PokemonList
            
          />
      </ScrollView>
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    loading: state.listPokedex.loading,
    data: state.listPokedex.data,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PokedexListScreen)
