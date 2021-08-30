import React, {Component} from 'react';
import {StyleSheet, Text, View, Image, Alert, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import {colors, fonts, numberWithCommas, responsiveWidth} from '../../../utils';
import Jarak from '../Jarak';
import {updateStatus} from '../../../actions/HistoryAction';

class CardHistory extends Component {
  componentDidMount() {
    const { pesanan } = this.props;
    this.props.dispatch(updateStatus(pesanan.order_id));
  }

  masukMidtrans = () => {
    const {pesanan} = this.props;
    if (pesanan.status === 'lunas') {
      Alert.alert('Info', 'Pesanan Sudah Lunas');
    } else {
      this.props.navigation.navigate('Midtrans', {url: pesanan.url});
    }
  };

  render() {
    const {pesanan, updateStatusLoading} = this.props;
    const history = pesanan.pesanans;
    
    return (
      <TouchableOpacity style={updateStatusLoading ? (styles.container) : (styles.changeContainer(pesanan))} onPress={() => this.masukMidtrans()}>
        <Text style={styles.tanggal}>{pesanan.tanggal}</Text>
        {Object.keys(history).map((key, index) => {
          return (
            <View key={index} style={styles.history}>
              <Text style={styles.textBold}>{index + 1}.</Text>
              <Image
                source={{uri: history[key].product.gambar[0]}}
                style={styles.jersey}
              />
              <View style={styles.desc}>
                <Text style={styles.nama}>{history[key].product.nama}</Text>
                <Text style={styles.harga}>
                  Rp. {numberWithCommas(history[key].product.harga)}
                </Text>

                <Jarak height={5} />

                <Text style={styles.textBold}>
                  Total Pesan : {history[key].jumlahPesan}
                </Text>
                <Text style={styles.textLight}>
                  Total Harga : Rp. {numberWithCommas(history[key].totalHarga)}
                </Text>
              </View>
            </View>
          );
        })}

        <Jarak height={10} />

        <View style={styles.footer}>
          <View style={styles.label}>
            <Text style={styles.textBlue}>Status :</Text>
            <Text style={styles.textBlue}>
              Ongkir ({pesanan.estimasi} Hari) :
            </Text>
            <Text style={styles.textBlue}>Total Harga :</Text>
          </View>

          <View style={styles.label}>
            <Text style={updateStatusLoading ? styles.paymentLoad : styles.changeColor(pesanan)}>
              {updateStatusLoading ? 'Loading' : pesanan.status}
            </Text>
            <Text style={styles.textBlueLight}>
              Rp. {numberWithCommas(pesanan.ongkir)}
            </Text>
            <Text style={styles.textBlueLight}>
              Rp. {numberWithCommas(pesanan.totalHarga + pesanan.ongkir)}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

const mapStateToProps = (state) => ({
  updateStatusLoading: state.HistoryReducer.updateStatusLoading,
});

export default connect(mapStateToProps, null)(CardHistory);

const styles = StyleSheet.create({
  container : {
    backgroundColor: colors.white,
    padding: 15,
    borderWidth: 1,
    borderStyle: 'dashed',
    borderRadius: 10,
    borderColor: colors.border,
    marginBottom: 20,
  },
  changeContainer: (data) => {
    if(data.status === "pending"){
      return {
        backgroundColor: colors.white,
        padding: 15,
        borderWidth: 1.5,
        borderStyle: 'dashed',
        borderRadius: 10,
        borderColor: colors.salmon,
        marginBottom: 20,
      }
    } else {
      if(data.status === "expire"){
        return {
           backgroundColor: colors.white,
           padding: 15,
           borderWidth: 1.5,
           borderStyle: 'dashed',
           borderColor: colors.border,
           borderRadius: 10,
           marginBottom: 20,
        }
      } else {
        // Sukses Payment Color

        return {
           backgroundColor: colors.white,
           padding: 15,
           borderWidth: 1.5,
           borderStyle: 'dashed',
           borderColor: colors.green,
           borderRadius: 10,
           marginBottom: 20,
        }
      }
    }

  },

  history: {
    flexDirection: 'row',
    marginTop: 10,
  },
  jersey: {
    width: responsiveWidth(66),
    height: responsiveWidth(66),
  },
  tanggal: {
    fontSize: 14,
    fontFamily: fonts.primary.semibold,
  },
  textBold: {
    fontSize: 11,
    fontFamily: fonts.primary.bold,
  },

  textLight: {
    fontSize: 11,
    fontFamily: fonts.primary.light,
  },

  desc: {
    marginLeft: responsiveWidth(7),
  },
  nama: {
    fontSize: 13,
    color: colors.primary,
    fontFamily: fonts.primary.bold,
    textTransform: 'capitalize',
  },
  harga: {
    fontSize: 12,
    fontFamily: fonts.primary.regular,
    color: colors.primary,
  },
  footer: {
    flexDirection: 'row',
  },
  label: {
    flex: 1,
  },
  textBlue: {
    fontSize: 13,
    fontFamily: fonts.primary.bold,
    color: colors.primary,
    textTransform: 'capitalize',
    textAlign: 'right',
  },

  paymentLoad : {
      fontSize: 13,
      fontFamily: fonts.primary.semibold,
      color: colors.border,
      textTransform: 'capitalize',
      textAlign: 'right',
  },

  changeColor: (data) => {
    if(data.status === "pending"){
      return {
            fontSize: 13,
            fontFamily: fonts.primary.semibold,
            color: colors.salmon,
            textTransform: 'capitalize',
            textAlign: 'right',
      }
    } else {
      if(data.status === "expire"){
        return {
          fontSize: 13,
          fontFamily: fonts.primary.bold,
          color: colors.border,
          textTransform: 'capitalize',
          textAlign: 'right',
        }
      } else {
        // Sukses Payment Color
        return {
          fontSize: 13,
          fontFamily: fonts.primary.semibold,
          color: colors.green,
          textTransform: 'capitalize',
          textAlign: 'right',
        }
      }
    }
  },

  textBlueLight: {
    fontSize: 13,
    fontFamily: fonts.primary.semibold,
    color: colors.primary,
    textTransform: 'capitalize',
    textAlign: 'right',
  },
});
