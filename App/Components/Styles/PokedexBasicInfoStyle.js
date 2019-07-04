import { StyleSheet } from 'react-native'
import { Colors, Metrics, Fonts} from '../../Themes/';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    paddingTop:8,
    paddingBottom:8,
    marginBottom:24,
  },
  list:{
    flex:1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: Metrics.doubleBaseMargin,
    marginRight: Metrics.doubleBaseMargin,
    marginTop: Metrics.baseMargin,
    marginBottom: Metrics.baseMargin,
    padding: Metrics.basePadding,
  },
  viewName:{
    flexDirection: 'row',
    paddingTop: 10,
    paddingBottom: 10,
    justifyContent: 'flex-start',
  },
  viewImage:{
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  imgPokeball:{
    height: 20,
    width: 20,
  },
  textName:{
    marginLeft: 16,
    fontSize: Fonts.size.medium,
    textAlign: 'left',
    color: Colors.black,
    fontWeight: '500'
  },
  iconStyle:{
    alignSelf: 'center',
  }
})
