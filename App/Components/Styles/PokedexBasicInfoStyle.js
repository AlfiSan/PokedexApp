import { StyleSheet } from 'react-native'
import { Colors, Metrics} from '../../Themes/';

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
  textName:{
    fontSize: 14,
    textAlign: 'left',
    color: Colors.black,
    fontWeight: '500'
  },
  iconStyle:{
    alignSelf: 'center',
  }
})
