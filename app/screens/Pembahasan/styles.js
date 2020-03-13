import { StyleSheet } from 'react-native';
import { scale } from '../../utils/scaling';
import {FONT_TEXT_PRIMARY, FONT_BOLD_PRIMARY} from '../../styles';

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#fff'
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  container: {
    width: '20%'
  },
  backContainer: {
    padding: scale(15),
    alignItems: 'flex-start'
  },
  buttonBack: {
    justifyContent: 'flex-end',
    width: scale(40),
    height: scale(40)
  },
  titleContainer: {
    width: '70%',
    marginTop: scale(20),
    marginLeft: scale(40)
  },
  titleHeader: {
    ...FONT_BOLD_PRIMARY,
    fontSize: 23,
    color: '#000',
  },
  contentContainer: {
    flexDirection: 'row', 
    justifyContent: 'space-between'
  },
  viewNoSoal: {
    width: scale(50), 
    height: scale(35), 
    backgroundColor: '#AEE7F9', 
    margin: scale(15), 
    borderRadius: 5
  },
  noSoal: {
    ...FONT_BOLD_PRIMARY,
    textAlign: 'center', 
    marginTop: scale(5), 
    fontSize: 20,
  },
  viewPoin: {
    width: scale(100), 
    height: scale(35), 
    marginLeft: scale(20)
  },
  poin: {
    ...FONT_TEXT_PRIMARY,
    textAlign: 'center', 
    marginTop: scale(20), 
    fontSize: 16, 
    color: 'red'
  },
  viewSoal: {
    paddingRight: scale(25), 
    paddingLeft: scale(25)
  },
  soal: {
    ...FONT_TEXT_PRIMARY,
    marginTop: scale(5), 
    fontSize: 16, 
    lineHeight: 25, 
    color: '#515151'
  },
  viewJawaban: {
    width: scale(320),
    height: scale(55),
    borderWidth: 1,
    borderColor: '#A3A3A3',
    marginTop: scale(15),
    marginRight: scale(20),
    marginLeft: scale(20),
    borderRadius: 5,
    justifyContent: 'center'
  },
  jawaban: {
    ...FONT_TEXT_PRIMARY,
    margin: scale(15), 
    fontSize: 15, 
    color: '#515151', 
    alignItems: 'center'
  },
  konfirmasiJawaban: {
    ...FONT_TEXT_PRIMARY,
    margin: scale(15), 
    fontSize: 15, 
    color: '#fff', 
    alignItems: 'center'
  },
  textJawaban: {
    ...FONT_TEXT_PRIMARY,
    margin: scale(15),
    fontSize: 15,
    color: '#515151',
    alignItems: 'center'
  },
  viewJawabanBener: {
    width: scale(320),
    height: scale(55),
    backgroundColor: '#3ECD77',
    marginTop: scale(15),
    marginRight: scale(20),
    marginLeft: scale(20),
    borderRadius: 5
  },
  viewJawabanSalah: {
    width: scale(320),
    height: scale(55),
    backgroundColor: '#F26565',
    marginTop: scale(15),
    marginRight: scale(20),
    marginLeft: scale(20),
    borderRadius: 5,
    justifyContent: 'center'
  },
  titlePembahasan: {
    ...FONT_BOLD_PRIMARY,
    marginLeft: scale(30), 
    marginTop: scale(20),
    fontSize: 16
  },
  viewPembahasan: {
    backgroundColor: '#FAFAFA', 
    width: '85%', 
    alignSelf: 'center', 
    borderRadius: 5, 
    margin: scale(10)
  },
  btnNext: {
    width: scale(25),
    height: scale(50),
    marginLeft: scale(40)
  },
  btnPrevious: {
    width: scale(25),
    height: scale(50),
    marginLeft: scale(40),
    marginRight: '50%'
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
  btnPrevious2: {
    width: scale(25),
    height: scale(50),
    marginLeft: scale(40),
    marginRight: scale(30)
  },
  btnSelesai: {
    width: scale(140),
    height: scale(50)
  },
  pembahasan: {
    ...FONT_TEXT_PRIMARY,
    fontSize: 14,
    color: '#000',
    lineHeight: 18,
    justifyContent: 'center',
    padding: scale(15)
  },
  garis: {
    alignSelf: 'center',
    width: '90%',
    marginTop: scale(15),
    marginBottom: scale(40)
  }
});

export default styles;
