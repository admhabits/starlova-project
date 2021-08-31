import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import { colors, fonts, responsiveWidth } from '../../../utils';
import Tombol from '../Tombol';
import { Placeholder, PlaceholderMedia, PlaceholderLine, Fade } from 'rn-placeholder';

export const JerseyHolder = () => {
    const dataHolder = ["1", "3", "4", "5", "6", "7"];
    return (
        <Placeholder Animation={Fade}>
            <View style={styles.cardHolderContainer}>
               { dataHolder.map((value, key)=>(
                    <View styles={styles.cardholder} key={key}>
                        <PlaceholderMedia size={responsiveWidth(100)} />
                        <View style={styles.textHolder}>
                            <PlaceholderLine width={80}/>
                            <PlaceholderLine width={50}/>
                        </View>
                    </View>
                ))
               }
            </View>
        </Placeholder>

    )
}

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
    cardHolderContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        marginBottom: 25,
    },
    card: {
        backgroundColor: colors.yellow,
        width: responsiveWidth(150),
        alignItems: 'center',
        padding: 10,
        borderRadius: 8,
        marginBottom: 5,

    },
    cardHolder: {
        width: responsiveWidth(150),
        alignItems: 'center',
        padding: 10,
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
    },

    textHolder : {
        marginTop: 10,
        textAlign: 'center',
    },

});
