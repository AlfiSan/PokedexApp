import { StyleSheet} from 'react-native';
import { Colors } from '../../Themes/index';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    flexDirection: 'column',
    justifyContent: 'flex-start'
  },
  viewTitle:{
    justifyContent: 'center',
    paddingTop: 32,
    paddingBottom: 24,
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