/* eslint-disable react/no-unused-prop-types */
/* eslint-disable react-native/no-color-literals */
import React from 'react';
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  AsyncStorage,
} from 'react-native';
import PropTypes from 'prop-types';
import firebase from 'firebase';
import styles from './styles';
import IMAGES from '../../configs/images';
import MainScreen from '../../components/layouts/MainScreen';

export default class Component extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      points: 0,
      correct: [],
      answerSaved: [],
      answers1: '',
      answers2: '',
      answers3: '',
      answers0: '',
      question: '',
      pemabahasan: '',
      urutan: [],
      keterangan: ''
    };
  }

  onBack = () => {
    this.props.navigation.navigate('FinishLatihanSoal');
  };

  getData = async () => {
    const username = await AsyncStorage.getItem('username');
    const urutan = this.state.urutan.splice();

    for (let indexUrutan = 0; indexUrutan < 10; indexUrutan++) {
      firebase
      .database()
      .ref(`users/${username}/urutan/${indexUrutan}`)
      .on('value', snap => urutan[indexUrutan] = snap.val());
    }

    this.setState({urutan: urutan});

    firebase
      .database()
      .ref(`latihan_soal_items/${this.state.urutan[this.state.index]}/correct`)
      .on('value', snap => this.setState({correct: snap.val()}));

    const answerSaved = this.state.answerSaved.splice();

    for (let indexAns = 0; indexAns < 10; indexAns++) {
      firebase
        .database()
        .ref(`users/${username}/answers/${indexAns}`)
        .on('value', snap => (answerSaved[indexAns] = snap.val()));
    }

    this.setState({answerSaved: answerSaved});

    firebase
      .database()
      .ref(`latihan_soal_items/${this.state.urutan[this.state.index]}/answers/answer1/text`)
      .on('value', snap => this.setState({answers1: snap.val()}));

    firebase
      .database()
      .ref(`latihan_soal_items/${this.state.urutan[this.state.index]}/answers/answer2/text`)
      .on('value', snap => this.setState({answers2: snap.val()}));
    
    firebase
      .database()
      .ref(`latihan_soal_items/${this.state.urutan[this.state.index]}/answers/answer3/text`)
      .on('value', snap => this.setState({answers3: snap.val()}));
    
    firebase
      .database()
      .ref(`latihan_soal_items/${this.state.urutan[this.state.index]}/answers/answer0/text`)
      .on('value', snap => this.setState({answers0: snap.val()}));

    firebase
      .database()
      .ref(`latihan_soal_items/${this.state.urutan[this.state.index]}/question`)
      .on('value', snap => this.setState({question: snap.val()}));

    firebase
      .database()
      .ref(`latihan_soal_items/${this.state.urutan[this.state.index]}/pembahasan`)
      .on('value', snap => this.setState({pemabahasan: snap.val()}));
  };

  pressNext = () => {
    this.setState({index: this.state.index + 1}, () => {
      this.getData();
    });
  };

  pressPrevious = () => {
    this.setState({index: this.state.index - 1}, () => {
      this.getData();
    });
  };

  pressFinish = async () => {
    this.props.navigation.navigate('FinishLatihanSoal');
  };

  navigate() {
    const index = this.state.index + 1;
    if (index == 1) {
      return (
        <View>
          <TouchableOpacity onPress={this.pressNext}>
            <Image
              source={IMAGES.next}
              resizeMode="contain"
              style={styles.btnNext}
            />
          </TouchableOpacity>
        </View>
      );
    } else if (index < 10) {
      return (
        <View style={styles.nextPrevious}>
          <View>
            <TouchableOpacity onPress={this.pressPrevious}>
              <Image
                source={IMAGES.previous}
                resizeMode="contain"
                style={styles.btnPrevious}
              />
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity onPress={this.pressNext}>
              <Image
                source={IMAGES.next}
                resizeMode="contain"
                style={styles.btnNext}
              />
            </TouchableOpacity>
          </View>
        </View>
      );
    } else if (index == 10) {
      return (
        <View style={styles.nextPrevious}>
          <View>
            <TouchableOpacity onPress={this.pressPrevious}>
              <Image
                source={IMAGES.previous}
                resizeMode="contain"
                style={styles.btnPrevious2}
              />
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity onPress={this.pressFinish}>
              <Image
                source={IMAGES.buttonSelesai}
                resizeMode="contain"
                style={styles.btnSelesai}
              />
            </TouchableOpacity>
          </View>
        </View>
      );
    }
  }

  checkNullAnswer = () => {
    console.log(this.state.answerSaved[0]);
  }

  checkAnswer = (data) => {
    if (data == this.state.answerSaved[this.state.index]) {
      if (data != this.state.correct) {
        return styles.jawabanContainerSalah
      } else {
        return styles.jawabanContainerBener
      }
    } else {
      if (data == this.state.correct) {
        return styles.jawabanContainerBener
      } else {
        return styles.jawabanContainer
      }
    }
  }

  componentDidMount() {
    this.getData();
    this.checkNullAnswer();
  }

  render() {
    return (
      <ScrollView>
        <MainScreen style={styles.mainContainer}>
          <View style={styles.header}>
            <View style={styles.container}>
              <TouchableOpacity
                style={styles.backContainer}
                onPress={this.onBack}>
                <Image
                  source={IMAGES.buttonBack}
                  resizeMode="contain"
                  style={styles.buttonBack}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.titleContainer}>
              <Text style={styles.titleHeader}>PEMBAHASAN</Text>
            </View>
          </View>

          <View>
            <View style={styles.contentContainer}>
              <View style={styles.viewNoSoal}>
                <Text style={styles.noSoal}>{this.state.index + 1}/10</Text>
              </View>
              <View style={styles.viewPoin}>
                <Text style={styles.poin}>Poin: {this.state.points}/1</Text>
              </View>
            </View>

            <View style={styles.viewSoal}>
              <Text style={styles.soal}>{this.state.question}</Text>
            </View>

            <View>
              <TouchableOpacity disabled={true}>
                <View
                  style={this.checkAnswer(this.state.answers1)}
                >
                  <Text>{this.state.answers1}</Text>
                </View>
              </TouchableOpacity>
            </View>

            <View>
              <TouchableOpacity disabled={true}>
                <View
                  style={this.checkAnswer(this.state.answers0)}
                >
                  <Text>{this.state.answers0}</Text>
                </View>
              </TouchableOpacity>
            </View>

            <View>
              <TouchableOpacity disabled={true}>
                <View
                  style={this.checkAnswer(this.state.answers2)}
                >
                  <Text>{this.state.answers2}</Text>
                </View>
              </TouchableOpacity>
            </View>

            <View>
              <TouchableOpacity disabled={true}>
                <View
                  style={this.checkAnswer(this.state.answers3)}
                >
                  <Text>{this.state.answers3}</Text>
                </View>
              </TouchableOpacity>
            </View>

            <Text style={styles.titlePembahasan}>Pembahasan: </Text>
            <View style={styles.viewPembahasan}>
              <Text style={styles.pembahasan}>{this.state.pemabahasan}</Text>
            </View>

            <Text>{this.state.keterangan}</Text>

            <Image
              source={IMAGES.garis}
              style={styles.garis}
              resizeMode="contain"
            />

            {this.navigate()}
          </View>
        </MainScreen>
      </ScrollView>
    );
  }
}

Component.propTypes = {
  navigation: PropTypes.object.isRequired,
};
