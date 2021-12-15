import React from 'react';
import {StyleSheet, Image, TouchableOpacity, View} from 'react-native';
import {connect} from 'react-redux';
import { getJerseyByLiga } from '../../../actions/JerseyAction';
import {colors, responsiveHeight, responsiveWidth} from '../../../utils';
import { Placeholder, PlaceholderMedia, PlaceholderLine, Fade } from 'rn-placeholder'

export const LigaPlaceholder = () => {
  return (
    <Placeholder Animation={Fade}>
      <View style={styles.placeholderContainer}>
        <View style={styles.cardholder}>
          <PlaceholderMedia style={styles.logoPlaceholder}/>
        </View>
        <View style={styles.cardholder}>
          <PlaceholderMedia style={styles.logoPlaceholder}/>
        </View>
        <View style={styles.cardholder}>
          <PlaceholderMedia style={styles.logoPlaceholder}/>
        </View>
        <View style={styles.cardholder}>
          <PlaceholderMedia style={styles.logoPlaceholder}/>
        </View>
      </View>
    </Placeholder>
  )
}

const CardLiga = ({liga, navigation, id, dispatch}) => {
  const toJerseyByLiga = (id, namaLiga) => {

    // ke Jersey Action 
    dispatch(getJerseyByLiga(id, namaLiga));

    // navigate ke ListJersey
    navigation.navigate('ListJersey');

  };

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => toJerseyByLiga(id, liga.namaLiga)}>
      <Image source={{uri: liga.image}} style={styles.logo} />
    </TouchableOpacity>
  );
};



export default connect()(CardLiga);

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    padding: 10,
    borderRadius: 15,
  },

  logo: {
    width: responsiveWidth(50),
    height: responsiveHeight(60),
  },

  cardholder: {
    backgroundColor: colors.white,
    shadowColor: '#000',
    width: responsiveWidth(70),
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    padding: 10,
    borderRadius: 15,
  },

  placeholderContainer : {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  logoPlaceholder: {
    width: responsiveWidth(50),
    height: responsiveHeight(60),
    borderRadius: 100,
  },
});
