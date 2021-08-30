import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import { connect } from 'react-redux';
import {IconHapus} from '../../../assets';
import {
  colors,
  fonts,
  numberWithCommas,
  responsiveHeight,
  responsiveWidth,
} from '../../../utils';
import Jarak from '../Jarak';
import { deleteKeranjang } from '../../../actions/KeranjangAction'

const CardKeranjang = ({keranjang, keranjangUtama, id, dispatch}) => {

  const hapusKeranjang = () => {
    dispatch(deleteKeranjang(id, keranjangUtama, keranjang))
  }

  return (
    <View style={styles.container}>
      <Image source={{ uri : keranjang.product.gambar[0]}} style={styles.gambar} />

      <View style={styles.desc}>
        

        <View>
          <Text style={styles.nama}>{keranjang.product.nama}</Text>
          <Text style={styles.harga}>
            Rp. {numberWithCommas(keranjang.product.harga)}
          </Text>

          <Jarak height={responsiveHeight(14)}/>

          <View style={styles.rowsCart}>
            <Text style={styles.textBold}>Ukuran : </Text>
            <Text style={styles.textBold}>{keranjang.ukuran}</Text>
          </View>

          <Jarak height={responsiveHeight(2)}/>

          <View style={styles.rowsCart}>
            <Text style={styles.textBold}>
              Sub Total Harga :
            </Text>        
            <Text style={styles.totalharga}>
              Rp. {numberWithCommas(keranjang.totalHarga)}
            </Text>
          </View>

          <Jarak height={responsiveHeight(2)}/>

          <View style={styles.rowsCart}>
            <Text style={styles.textBold}>Total Pesan : </Text>
            <Text style={styles.textBold}>{keranjang.jumlahPesan}</Text>
          </View>
          <View style={styles.notes}>
            <Jarak height={responsiveHeight(10)}/>
            <Text style={styles.textBold}>Keterangan :</Text>
            <Jarak height={responsiveHeight(2)}/>
            <Text style={styles.textLight}>{keranjang.keterangan} </Text>
            <Jarak height={responsiveHeight(10)}/>
          </View>
        </View>
 
      </View>

      <TouchableOpacity style={styles.hapus} onPress={() => hapusKeranjang()}>
        <IconHapus height={responsiveHeight(30)}/>
      </TouchableOpacity>
    </View>
  );
};

export default connect()(CardKeranjang);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginTop: 15,
    backgroundColor: colors.white,
    // shadowColor: '#000',
    // shadowOffset: {
    //   width: 0,
    //   height: 2,
    // },
    // shadowOpacity: 0.15,
    // shadowRadius: 3.84,
    // elevation: 5,
    marginHorizontal: 30,
    borderColor: 'dodgerblue',
    borderWidth: 1,
    borderRadius: 10,
    borderStyle: 'dashed',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
  },

  desc : {
    maxWidth: 300
  },

  gambar: {
    width: responsiveWidth(77),
    height: responsiveHeight(88),
    resizeMode: 'contain',
  },
  hapus: {
    flex: 1,
    alignItems: 'center',
    marginLeft: 10,
    position: 'absolute',
    right: 10,
    bottom: 10,
  },
  nama: {
    fontFamily: fonts.primary.bold,
    fontSize: 12,
    textTransform: 'uppercase',
    width: 225,
    color: colors.primary
  },

   harga: {

    fontFamily: fonts.primary.semibold,
    fontSize: 11,
    color: colors.primary
  },
  totalharga: {
    fontFamily: fonts.primary.regular,
    fontSize: 11,
    color: colors.dodgerblue
  },
  text: {
    fontFamily: fonts.primary.regular,
    fontSize: 11,
  },
  textBold: {
    fontFamily: fonts.primary.bold,
    fontSize: 11,
  },
  textLight: {
    fontFamily: fonts.primary.light,
    fontSize: 11,
  },

  textSemibold: {
    fontFamily: fonts.primary.semibold,
    fontSize: 11,
  },
  rowsCart: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 225.
  },

});
