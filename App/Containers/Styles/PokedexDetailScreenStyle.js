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
  header:{
    flexDirection: 'row',
    paddingTop: 48,
    paddingBottom: 16,
    paddingLeft: 16,
    paddingRight: 16,
    justifyContent: 'flex-start',
    width: width,
    zIndex: 5,
  },
  textTitle:{
    fontSize: 22,
    color: Colors.black,
    textAlign: 'left',
    marginLeft: 32
  },
  viewImage:{
    justifyContent: 'center',
    marginTop: 10,
    height: 140,
    width: 140,
    alignSelf: 'center',
    alignItems: 'center',
    borderRadius: 70,
    backgroundColor: Colors.white,
    borderBottomWidth: 0,
    elevation: 8,
    display: 'flex',
    flexDirection: 'column',
    zIndex: 10,
  },
  imgAva:{
    height: 120,
    width: 120,
    borderRadius: 60,
    backgroundColor: Colors.white,
  },
  viewBio:{
    backgroundColor: Colors.white,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    alignSelf: 'center',
    paddingTop: 16,
    paddingBottom: 16,
    borderRadius: 10,
    borderWidth: 0,
    elevation: 4,
    height: '25%',
    width: '98%',
    marginTop: -14,
  },
  colName: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderBottomWidth: 0.5,
    paddingBottom: 10,
    borderBottomColor: Colors.borderGrey
  },
  titleName:{
    fontSize: 18,
    color: Colors.black,
    textAlign: 'center',
    fontWeight: 'bold',
    alignSelf: 'center'
  },
  titleSub:{
    fontSize: 14,
    color: Colors.black,
    textAlign: 'center',
    alignSelf: 'center'
  },
  viewRow:{
    flex:10,
    paddingBottom: 24,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  colDetail:{
    flex: 5,
    padding: 16,
    flexDirection: 'column',
    justifyContent: 'flex-start'
  },
  titleBold:{
    fontSize: 32,
    color: Colors.black,
    textAlign: 'center',
    fontWeight: 'bold',
    alignSelf: 'center'
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
  viewDetail:{
    marginTop: 10,
    paddingBottom: 10,
    backgroundColor: Colors.white,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  viewRowDetail:{
    flex:10,
    flexDirection: 'row',
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 16,
    justifyContent: 'flex-start'
  },
  viewRow1:{
    flex:5,
    paddingLeft: 6,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  viewRow2:{
    flex:5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  textTitleBlack:{
    fontSize: 16,
    color: Colors.black,
    textAlign: 'center',
    fontWeight: 'bold',
    alignSelf: 'center'
  },
  textValueBlack:{
    fontSize: 16,
    color: Colors.black,
    textAlign: 'center',
    alignSelf: 'center'
  },
  viewList:{
    paddingBottom: 16,
    justifyContent: 'flex-start',
    flexDirection: 'column'
  },
})
