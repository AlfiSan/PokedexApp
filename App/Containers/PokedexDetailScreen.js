import React, { Component } from 'react'
import {View,  ScrollView, TouchableOpacity, Text, StatusBar, Image, ActivityIndicator } from 'react-native'
import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'
import { NavigationActions } from 'react-navigation';
import GetDetailsAction from '../Redux/GetDetailsRedux';
// Styles
import styles from './Styles/PokedexDetailScreenStyle'
import { Colors } from '../Themes/index';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

class PokedexDetailScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }

  componentDidMount(){
    const { params } = this.props.navigation.state;
    const name = params && params.name ? params.name : '';
    this.props.dispatch(GetDetailsAction.getDetailsRequest(name));
  }

  goToBack = () => {
    this.props.dispatch(NavigationActions.back());
  }

  Capitalize(str){
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  render () {
    const {data, loading} = this.props;
    const imageUri = data && data.sprites && data.sprites.front_default ? data.sprites.front_default : '';
    const pokeType = data && data.types && data.types[0].type.name ? data.types[0].type.name : '';
    const name  = data && data.name ? data.name : '';
    const order  = data && data.order ? data.order : '';
    const weight  = data && data.weight ? data.weight : '';
    const height  = data && data.height ? data.height : '';
    const baseExperience = data && data.base_experience ? data.base_experience : '';
    const abilities = data && data.abilities ? data.abilities : '';
    const moves = data && data.moves ? data.moves : '';
    const ability = data && data.abilities && 
                    data.abilities[0].ability.name ? data.abilities[0].ability.name : '';
    const move = data && data.moves && 
                 data.moves[0].move.name ? data.moves[0].move.name : '';

    return (
      <View style={styles.container}>
        <StatusBar backgroundColor={Colors.yellow} translucent barStyle="light" />
        <View style={styles.header}>
          <TouchableOpacity onPress={() => this.goToBack()}>
            <Icon
              style={{alignSelf: 'center'}}
              name='arrow-left'
              size={25}
              color={Colors.black}
            />
          </TouchableOpacity>
          <Text style={styles.textTitle}>
            Information
          </Text>
        </View>
        { (loading) &&
            <View style={styles.loading}>
              <ActivityIndicator color={Colors.yellow} />
            </View>
        }
        <ScrollView contentContainerStyle={styles.viewList} showsVerticalScrollIndicator={false}>
          <View style={styles.viewImage}>
            <Image
              style={styles.imgAva}
              source={{uri: imageUri}}
            />
          </View>
          <View style={styles.viewBio}>
            <View style={styles.colName}>
              <Text style={styles.titleName}>
                {order} - {this.Capitalize(name)}
              </Text>
              <Text style={styles.titleSub}>
                {this.Capitalize(pokeType)}
              </Text>
            </View>
            <View style={styles.viewRow}>
              <View style={[styles.colDetail]}>
                <Text style={styles.titleBold}>
                  {weight} kg
                </Text>
                <Text style={styles.titleSub}>
                  Weight
                </Text>
              </View>
              <View style={styles.colDetail}>
                <Text style={styles.titleBold}>
                  {height} m
                </Text>
                <Text style={styles.titleSub}>
                  Height
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.viewDetail}>
            <View style={styles.viewRowDetail}>
              <View style={styles.viewRow1}>
                <Text style={styles.textTitleBlack}>
                  Base Experience
                </Text>
              </View>
              <View style={styles.viewRow2}>
                <Text style={styles.textValueBlack}>
                  {baseExperience}
                </Text>
              </View>
            </View>
          { abilities.length > 1 ?
            abilities.map((data, index) => {
              if(index < 3) {
                return (
                  <View style={styles.viewRowDetail}>
                    <View style={styles.viewRow1}>
                      <Text style={styles.textTitleBlack}>
                        Ability {index + 1}
                      </Text>
                    </View>
                    <View style={styles.viewRow2}>
                      <Text style={styles.textValueBlack}>
                        {data.ability.name}
                      </Text>
                    </View>
                  </View>
                )
              }
            })
            :
            <View style={styles.viewRowDetail}>
              <View style={styles.viewRow1}>
                <Text style={styles.textTitleBlack}>
                  Ability
                </Text>
              </View>
              <View style={styles.viewRow2}>
                <Text style={styles.textValueBlack}>
                  {ability}
                </Text>
              </View>
            </View>
          }
          { moves.length > 1 ?
            moves.map((data, index) => {
              if(index < 3) {
                return (
                  <View style={styles.viewRowDetail}>
                    <View style={styles.viewRow1}>
                      <Text style={styles.textTitleBlack}>
                        Move {index + 1}
                      </Text>
                    </View>
                    <View style={styles.viewRow2}>
                      <Text style={styles.textValueBlack}>
                        {data.move.name}
                      </Text>
                    </View>
                  </View>
                )
              }
            })
          :
            <View style={styles.viewRowDetail}>
              <View style={styles.viewRow1}>
                <Text style={styles.textTitleBlack}>
                  Move
                </Text>
              </View>
              <View style={styles.viewRow2}>
                <Text style={styles.textValueBlack}>
                  {move}
                </Text>
              </View>
            </View>
          }
          </View>
        </ScrollView>
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    loading: state.detailPokedex.fetching,
    data: state.detailPokedex.payload, 
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PokedexDetailScreen)
