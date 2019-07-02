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
import GetListAction from '../Redux/GetListRedux';
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/PokedexListScreenStyle'

class PokedexListScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeSlide: 0,
      pressed: false,
    }
  }

  componentDidMount() {
    const params = {offset: 20, limit: 20}
    this.props.dispatch(GetListAction.getListRequest(params));
  }

  onPress = (name) => {
    if (!this.state.pressed) {
      this.setState({pressed: true}, () => {
        alert(name)
      });
    }

    this.clearStatePress();
  }

  clearStatePress() {
    this.setState({pressed: false});
  }

  render () {
    const {loading, data} = this.props;
    const dataPokemon = data && data.results ? data.results : null;

    return (
      <View style={styles.container}>
        <StatusBar backgroundColor={"#f1c40f"} translucent barStyle="light" />
        <View style={styles.viewTitle}>
          <Text style={styles.titleText}>
            Pokemon
          </Text>
        </View>
        { (loading) &&
            <View style={styles.loading}>
              <ActivityIndicator size='large' color={"#f1c40f"} />
            </View>
        }
        <ScrollView contentContainerStyle={styles.viewList}>
          <PokemonList
            onPress={this.onPress}
            dataPokemon={dataPokemon}
          />
        </ScrollView>
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    loading: state.listPokedex.fetching,
    data: state.listPokedex.payload,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PokedexListScreen)
