import { StyleSheet } from 'react-native';
import { scale } from '../../utils/scaling';

const styles = StyleSheet.create({
  background: {
    width: '100%',
    height: '100%'
  },
  mainContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: scale(70)
  },
  text: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold'
  },
  piala: {
    width: scale(180),
    height: scale(180),
    marginTop: scale(45),
    marginBottom: scale(20)
  },
  titleSkor: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold'
  },
  skorContainer: {
    width: scale(90),
    height: scale(45),
    backgroundColor: '#FBDD56',
    borderRadius: 5,
    margin: scale(10)
  },
  skor: {
    textAlign: 'center',
    marginTop: scale(5),
    fontSize: 26,
    fontWeight: 'bold',
    color: '#165C84'
  },
  btnTutupKuis: {
    width: scale(280),
    height: scale(50),
    marginTop: scale(40)
  }
});

export default styles;
