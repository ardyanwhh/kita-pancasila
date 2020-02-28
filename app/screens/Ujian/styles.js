import { StyleSheet } from 'react-native';
import { scale } from '../../utils/scaling';
import {FONT_TEXT_PRIMARY, FONT_BOLD_PRIMARY} from '../../styles';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#fff'
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: scale(15)
  },
  viewNoSoal: {
    width: scale(65),
    height: scale(35),
    backgroundColor: '#AEE7F9',
    margin: scale(15),
    borderRadius: 5
  },
  noSoal: {
    ...FONT_BOLD_PRIMARY,
    textAlign: 'center',
    marginTop: scale(5),
    fontSize: 17,
  },
  exitKuis: {
    width: scale(90),
    height: scale(35),
    backgroundColor: '#F97484',
    borderColor: '#E8495C',
    borderWidth: 2,
    margin: scale(15),
    borderRadius: 5
  },
  textExit: {
    ...FONT_BOLD_PRIMARY,
    textAlign: 'center',
    marginTop: scale(5),
    fontSize: 16,
    color: '#fff'
  },
  soalContainer: {
    paddingRight: scale(25), 
    paddingLeft: scale(25)
  },
  textSoal: {
    ...FONT_TEXT_PRIMARY,
    marginTop: scale(5),
    marginBottom: scale(10),
    fontSize: 16,
    lineHeight: 25,
    color: '#515151'
  },
  jawabanContainer: {
    width: scale(320),
    height: scale(55),
    borderWidth: 1,
    borderColor: '#A3A3A3',
    marginTop: scale(20),
    marginRight: scale(20),
    marginLeft: scale(20),
    borderRadius: 5,
    justifyContent: 'center'
  },
  textJawaban: {
    ...FONT_TEXT_PRIMARY,
    margin: scale(15),
    fontSize: 15,
    color: '#515151',
    alignItems: 'center'
  },
  nextPrevious: {
    flexDirection: 'row',
    padding: scale(50),
    justifyContent: 'space-between'
  },
  btnNext: {
    width: scale(25),
    height: scale(50)
  }
});

export default styles;
