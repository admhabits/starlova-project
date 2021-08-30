import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import { colors, fonts, responsiveWidth } from '../../../utils';
import Tombol from '../Tombol';

const CardJersey = ({jersey, navigation}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.card} 
            onPress={() => navigation.navigate('JerseyDetail', { jersey })
        }>
        <Image source={{uri: jersey.gambar[0]}} style={styles.gambar} />
        <Text style={styles.text}>{jersey.nama} </Text>
      </TouchableOpacity>

      {/*<Tombol type="text" title="Detail" padding={7}/>*/}
    </View>
  );
};

export default CardJersey;

const styles = StyleSheet.create({
    container: {
        marginBottom: 25
    },
    card: {
        backgroundColor: colors.yellow,
        width: responsiveWidth(150),
        alignItems: 'center',
        padding: 10,

        // shadowColor: '#000',
        // shadowOffset: {
        //   width: 0,
        //   height: 2,
        // },
        // shadowOpacity: 0.1,
        // shadowRadius: 3.84,
        // elevation: 5,
        // padding: 10,

        borderRadius: 8,
        marginBottom: 5,

    },
    gambar: {
        width: 124,
        height: 124
    },
    text: {
        fontFamily: fonts.primary.semibold,
        fontSize: 10,
        textTransform: 'uppercase',
        textAlign: 'center',
        color: colors.primary
    }
});
