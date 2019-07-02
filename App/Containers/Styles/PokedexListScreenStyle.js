import { StyleSheet, Dimensions} from 'react-native';
import { Colors, Fonts } from '../../../Themes/index';
const { width, height } = Dimensions.get('window')

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    flexDirection: 'column',
    justifyContent: 'flex-start'
  },
  viewTitle:{
    margin: 16,
    justifyContent: 'center',
    padding: 10,
    alignItems: 'center'
  },
  titleText:{
    textAlign: 'left',
    color: Colors.black,
    paddingRight: 8,
    lineHeight: 24
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