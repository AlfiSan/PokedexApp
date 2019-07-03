import { StyleSheet, Dimensions } from 'react-native';
import { Colors, Metrics } from '../../Themes/';
const { height, width } = Dimensions.get('window');

export default StyleSheet.create({
  overlay: {
    backgroundColor: '#000000',
    opacity: 0.50,
    position: 'absolute',
    top:0,
    left:0,
    right:0,
    bottom:0,
    width: '100%',
    height: '100%'
  },
  innerContainer: {
    position: 'absolute',
    top:0,
    left:0,
    right:0,
    bottom:0,
    width: '100%',
    height: '100%',
  },
  box: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    backgroundColor: Colors.white,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    zIndex: 5,
    paddingTop: 16,
  },
  viewTitle:{
    paddingLeft: 12,
    paddingTop: 5,
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  viewList:{
    marginLeft: 10,
    marginTop: 10,
    marginBottom: 38,
    flex: 1,
    flexDirection: 'row',
  },
  rowList:{
    flexDirection: 'row',
    justifyContent: 'flex-start',
    paddingTop: 8,
    width: width,
    paddingBottom: 10,
    borderBottomWidth: 0.5,
    borderBottomColor: Colors.borderGrey
  },
  iconStyle:{
    alignSelf: 'center', 
  },
  textDesc:{
    color: Colors.black,
    padding: 8,        
    fontSize: 16,
    lineHeight: 20,
    textAlign:'center'
  },
  textTitle:{
    color: Colors.lblGrey,        
    fontSize: 14,
    textAlign:'center'
  },

})
