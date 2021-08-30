import React from 'react';
import {ActivityIndicator, StyleSheet, Text, View, ScrollView, Image} from 'react-native';
import {colors, fonts, heightMobileUI} from '../../../utils';
import {CardKeranjang} from '../../kecil';
import { Empty } from '../../../assets';
import {RFValue} from 'react-native-responsive-fontsize';

const ListKeranjang = ({
  getListKeranjangLoading,
  getListKeranjangResult,
  getListKeranjangError,
}) => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        {getListKeranjangResult ? (
          Object.keys(getListKeranjangResult.pesanans).reverse().map((key) => {
            return (
              <CardKeranjang
                keranjang={getListKeranjangResult.pesanans[key]}
                keranjangUtama={getListKeranjangResult}
                key={key}
                id={key}
              />
            );
          })
        ) : getListKeranjangLoading ? (
          <View style={styles.loading}>
            <ActivityIndicator color={colors.primary} />
          </View>
        ) : getListKeranjangError ? (
          <Text>{getListKeranjangError}</Text>
        ) : (
          <View style={styles.emptyImage}>
            <Image source={Empty} style={styles.empty}/>
            <Text style={styles.textEmpty}>Data Kosong</Text>
          </View>
        )}
      </View>
    </ScrollView>
  );
};

export default ListKeranjang;

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  loading: {
    flex: 1,
    alignSelf: 'center',
    marginTop: 25,
   
  },
  emptyImage : {
    alignItems: 'center',
    marginTop: 25
  },
  empty: {
    flex: 1,
    width: 300,
    height: 250
  },
  textEmpty: {
    color: colors.primary,
    fontFamily: fonts.primary.light,
    fontSize: RFValue(28, heightMobileUI)
  }
});
