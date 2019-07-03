import { StyleSheet, Dimensions} from 'react-native';
import { Colors } from '../../Themes/index';
const { width, height } = Dimensions.get('window')

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    flexDirection: 'column',
    justifyContent: 'flex-start'
  },
  header: {
    flexDirection: 'row',
    width: Dimensions.get('window').width,
    height: 55,
    alignItems: 'center',
    backgroundColor: Colors.white, 
    paddingLeft: 16,
    borderBottomWidth: 0,
    elevation: 2,           
  },
  filterIcon:{
    position : 'absolute',
    right: 16,
    alignSelf: 'center',
    justifyContent: 'center'
  },
  viewTitle:{
    justifyContent: 'center',
    padding: 16,
    alignItems: 'center'
  },
  titleText:{
    textAlign: 'center',
    fontSize: 24,
    fontWeight: '500',
    color: Colors.black,
  },
  loading: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 10
  },
  viewList:{
    paddingBottom: 16,
    justifyContent: 'center',
    flexDirection: 'column'
  },
});