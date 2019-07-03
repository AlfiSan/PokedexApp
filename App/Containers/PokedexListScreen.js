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
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import BottomSheetList from '../Components/BottomSheetList';
// Styles
import styles from './Styles/PokedexListScreenStyle'

class PokedexListScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeSlide: 0,
      pressed: false,
      defaultParams: {offset: 20, limit: 20},
      filterParams: {},
      idFilter: 5,
      pressedModal: false,
      modalFilter: false,
      filterList: [
        {id: 1, label: 'Fighting'},
        {id: 2, label: 'Flying'},
        {id: 3, label: 'Poison'},
        {id: 4, label: 'Ground'},
        {id: 5, label: 'See All'}
      ],
    }
  }

  componentDidMount() {
    this.props.dispatch(GetListAction.getListRequest(this.state.params, false));
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
        this.props.dispatch(GetListAction.getListRequest(id, true));
      } else {
        this.props.dispatch(GetListAction.getListRequest(this.state.params, false));
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

  render () {
    const {loading, data} = this.props;
    let {idFilter} = this.state;
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
              Pokemon
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
        <ScrollView contentContainerStyle={styles.viewList}>
          <PokemonList
            onPress={this.onPress}
            dataPokemon={dataPokemon}
          />
        </ScrollView>
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
