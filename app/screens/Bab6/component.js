import React from 'react';
import { View, Image, Text, TouchableOpacity, ScrollView, ImageBackground, StatusBar } from 'react-native';
import styles from './styles';
import PropTypes from 'prop-types';
import IMAGES from '../../configs/images';
import I18n from '../../i18n';

export default class Component extends React.Component {
  onBack = () => {
    this.props.navigation.navigate('ListArtikel');
  };

  render() {
    return (
      <ImageBackground source={IMAGES.backgroundv2} style={styles.background}>
        <StatusBar hidden />
        <View style={styles.headerContainer}>
          <View style={styles.backContainer}>
            <TouchableOpacity onPress={this.onBack}>
              <Image source={IMAGES.buttonBack} resizeMode="contain" style={styles.buttonBack} />
            </TouchableOpacity>
          </View>
          <View style={styles.headerTitle}>
            <Text style={styles.title}>BAB 6</Text>
          </View>
        </View>

        <ScrollView>
          <View style={styles.view_content}>
            <Text style={styles.text_title}>{I18n.t('bab6title')}</Text>
            <Image source={IMAGES.garuda} style={styles.garuda} resizeMode="contain" />
            <Text style={styles.text_bold}>{I18n.t('bab6Content1')}</Text>
            <Text style={styles.text}>{I18n.t('bab6Content1_1')}</Text>
            <Text style={styles.text}>{I18n.t('bab6Content1_2')}</Text>
            <Text style={styles.text}>{I18n.t('bab6Content1_3')}</Text>
            <Text style={styles.text}>{I18n.t('bab6Content1_4')}</Text>
            <Text style={styles.text_bold}>{I18n.t('bab6Content2')}</Text>
            <Text style={styles.text_bold}>{I18n.t('bab6Content3')}</Text>
            <Text style={styles.text}>{I18n.t('bab6Content3_1')}</Text>
            <Text style={styles.text_bold}>{I18n.t('bab6Content4')}</Text>
            <Text style={styles.text}>{I18n.t('bab6Content4_1')}</Text>
            <Text style={styles.text_bold}>{I18n.t('bab6Content5')}</Text>
            <Text style={styles.text}>{I18n.t('bab6Content5_1')}</Text>
            <Text style={styles.text_bold}>{I18n.t('bab6Content6')}</Text>
            <Text style={styles.text}>{I18n.t('bab6Content6_1')}</Text>
            <Text style={styles.text_bold}>{I18n.t('bab6Content7')}</Text>
            <Text style={styles.text_end}>{I18n.t('bab6Content7_1')}</Text>
          </View>
        </ScrollView>
      </ImageBackground>
    );
  }
}

Component.propTypes = {
  navigation: PropTypes.object.isRequired
};
