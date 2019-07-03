import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View, Text, Modal, TouchableOpacity, Image, FlatList, StatusBar } from 'react-native';
import styles from './Styles/BottomSheetListStyles';
import { Images, Colors } from '../Themes';
import * as Animatable from 'react-native-animatable';

export default class BottomSheetList extends Component {
  constructor (props) {
    super(props);
    this.state = {
    }
  }

  static propTypes = {
    modalVisible: PropTypes.bool,
    closeModal: PropTypes.func,
    onPress: PropTypes.func,
    dataList: PropTypes.array
  }

  render () {
    const {modalVisible, dataList, closeModal, onPress, idFilter} = this.props;
  return (
    <Modal
      visible={modalVisible}
      animationType={'fade'}
      transparent={true}
      onRequestClose={closeModal}
      >
      <StatusBar backgroundColor='grey' barStyle='dark-content' />
      <TouchableOpacity activeOpacity={0.5} style={styles.overlay} onPress={closeModal}></TouchableOpacity>
      <View style={styles.innerContainer}>
        <Animatable.View
          animation='slideInUp'
          iterationCount={1} 
          duration={300}
          style={styles.box}>
          <View style={styles.viewTitle}>
            <Text style={styles.textTitle}>  Filter By Type </Text>
          </View>
            <FlatList
              data={dataList}
              style={styles.viewList}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item: data }) => 
              <TouchableOpacity 
                style={[styles.rowList, data.id == 5 && {borderBottomWidth: 0}]}
                onPress={() => onPress(data.id)}>
                  <Text style={[styles.textDesc, idFilter == data.id && {color: Colors.lblGreen} ]}>
                    {data.label}
                  </Text>
              </TouchableOpacity>
              }
            />
        </Animatable.View>
      </View>
    </Modal>
  )
  }
}