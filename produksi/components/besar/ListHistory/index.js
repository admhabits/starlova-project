import React from 'react';
import {ScrollView, StyleSheet, Text, View, ActivityIndicator, Image} from 'react-native';
import {connect} from 'react-redux';
import {colors, fonts, heightMobileUI} from '../../../utils';
import { Empty } from '../../../assets';
import {CardHistory} from '../../kecil';
import {RFValue} from 'react-native-responsive-fontsize';


const ListHistory = ({
  getListHistoryLoading,
  getListHistoryResult,
  navigation,
}) => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        {getListHistoryResult ? (
          Object.keys(getListHistoryResult).reverse().map((key) => {
            return (
              <CardHistory
                pesanan={getListHistoryResult[key]}
                key={key}
                navigation={navigation}
                id={key}
              />
            );
          })
        ) : getListHistoryLoading ? (
          <View style={styles.loading}>
            <ActivityIndicator size="large" color={colors.primary} />
          </View>
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

const mapStateToProps = (state) => ({
  getListHistoryLoading: state.HistoryReducer.getListHistoryLoading,
  getListHistoryResult: state.HistoryReducer.getListHistoryResult,
});

export default connect(mapStateToProps, null)(ListHistory);

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 30,
    marginTop: 30,
  },
  loading: {
    flex: 1,
    marginTop: 10,
    marginBottom: 50,
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
    fontFamily: fonts.primary.semibold,
    fontSize: RFValue(25, heightMobileUI)
  }
});
