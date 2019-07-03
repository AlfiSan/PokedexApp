import React, { Component } from 'react'
import {
  ScrollView,
  View,
  Text,
  Image,
  StatusBar,
  TouchableOpacity,
  ActivityIndicator, RefreshControl
} from 'react-native';
import PokemonList from '../Components/PokedexBasicInfo';

import { connect } from 'react-redux';
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'
import { NavigationActions } from 'react-navigation';
import GetListAction from '../Redux/GetListRedux';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import BottomSheetList from '../Components/BottomSheetList';
import Immutable from 'seamless-immutable';
// Styles
import styles from './Styles/PokedexListScreenStyle'

class PokedexListScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pressed: false,
      defaultParams: {offset: 20, limit: 20},
      idFilter: 5,
      pressedModal: false,
      modalFilter: false,
      refreshing: false,
      filterList: [
        {id: 1, label: 'Normal'},
        {id: 2, label: 'Fighting'},
        {id: 3, label: 'Flying'},
        {id: 4, label: 'Poison'},
        {id: 5, label: 'See All'}
      ],
    }
  }

  componentDidMount() {
    this.props.dispatch(GetListAction.getListRequest(this.state.defaultParams, false, false));
  }

  onPress = (name) => {
    if (!this.state.pressed) {
      this.setState({pressed: true}, () => {
        alert(name)
      });
    }

    this.clearStatePress();
  }

  clearStatePress = async () => {
    this.setState({pressed: false});
    await this.setState({pressedModal: false});
    await this.setState({modalFilter: false});
  }

  //Choose Filter
  chooseFilter = async (id) => {
    let {idFilter} = this.state;

    this.setState({idFilter: id}, () => {
      if(id !== 5) {
        this.props.dispatch(GetListAction.getListRequest(id, false, true));
      } else {
        this.props.dispatch(GetListAction.getListRequest(this.state.defaultParams, false, false));
      }
    });
   
    await this.clearStatePress();
  }

  // Open modal filter
  openModalFilter = () => {
    if (!this.state.pressedModal) {
      this.setState({pressedModal: true}, () => {
         this.setState({modalFilter: true});
         this.setState({pressed: false});
      });
    }
  }

  getMorePokemon = event => {
    let {idFilter} = this.state;
    let paramsOffset = this.state.defaultParams.offset + 20;
    let params = {offset: paramsOffset, limit: 20}

    if(idFilter === 5){
      scrollOffset = Number(
        (
          event.nativeEvent.layoutMeasurement.height +
          event.nativeEvent.contentOffset.y
        ).toFixed(1)
      );
      scrollHeight = Number(event.nativeEvent.contentSize.height.toFixed(1));
      // 200 its depends on activity indicator
      scrollHeight = scrollHeight - 200;

      if (scrollOffset < scrollHeight) {
        return;
      }
      this.setState(
        (state) => Immutable.set(state, "defaultParams", params),
        () => {this.props.dispatch(GetListAction.getListRequest(this.state.defaultParams, true, false))}
      );
    }
  };

  getRefreshList = () => {
    this.props.dispatch(GetListAction.getListRequest(this.state.defaultParams, false, false));
    this.setState({ refreshing: false });
  }

  render () {
    const {loading, data} = this.props;
    let {idFilter, refreshing} = this.state;
    const dataPokemon = data && data.results ? data.results : null;
    const dataPokemonFilter = data && data.pokemon ? data.pokemon : null;

    const ModalFilter = this.state.modalFilter ?
      <BottomSheetList
        modalVisible={this.state.modalFilter}
        closeModal={this.clearStatePress}
        idFilter={this.state.idFilter}
        onPress={this.chooseFilter}
        dataList={this.state.filterList}
      /> : null

    return (
      <View style={styles.container}>
        <StatusBar backgroundColor={"#f1c40f"} translucent={false} barStyle="light" />
        <View style={styles.header}>
          <View style={styles.viewTitle}>
            <Text style={styles.titleText}>
              Pokedex
            </Text>
          </View>
          <TouchableOpacity style={styles.filterIcon} onPress={() => this.openModalFilter()}>
            <Icon
              style={{alignSelf: 'center'}}
              name='filter-variant'
              size={20}
              color={this.state.idFilter !== 5 ? '#f39c12' : '#000000'}
            />
          </TouchableOpacity>
        </View>
        { (loading) &&
            <View style={styles.loading}>
              <ActivityIndicator color={"#f1c40f"} />
            </View>
        }
        <ScrollView 
          contentContainerStyle={styles.viewList}
          onScroll={this.getMorePokemon}
          parallaxHeaderHeight={0}
          refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={() => this.getRefreshList()}
          />
        }>
          <PokemonList
            onPress={this.onPress}
            idFilter={idFilter}
            dataPokemon={idFilter !== 5 ? dataPokemonFilter : dataPokemon}
          />
        </ScrollView >
        {/* Filter Pokemon by Type */}
          {ModalFilter}
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
