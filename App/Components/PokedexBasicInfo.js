import React, { Component } from 'react'

// COMPONENTS
import { Text, View, FlatList, TouchableOpacity ,Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Images, Colors } from '../Themes/index';

// STYLES
import styles from './Styles/PokedexBasicInfoStyle'

export default class PokedexBasicInfo extends Component {

  render () {
    const {dataPokemon, onPress} = this.props;
    return (
      <View style={styles.container}>
        <FlatList
          data={dataPokemon}
          keyExtractor={(item, index) => index}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity 
                underlayColor={'#ddd'}
                onPress={() => onPress(item.name)}  >
                <View style={styles.list}>
                  <Text style={styles.textName}> {item.name} </Text>
                  <Icon
                    style={styles.iconStyle}
                    name='chevron-right'
                    size={20}
                    color='#000000'
                  />;
                </View>
              </TouchableOpacity>
            )
          }}
        />
      </View>
    )
  }
}
