import React, {Component} from 'react';
import {ScrollView, StyleSheet, Text, View, StatusBar } from 'react-native';
import {
  BannerSlider,
  HeaderComponent,
  ListJerseys,
  ListLiga,
  Tombol,
} from '../../components';
import {colors, fonts} from '../../utils';
import { Jarak } from '../../components';
import { connect } from 'react-redux';
import { getListLiga } from '../../actions/LigaAction';
import { limitJersey } from '../../actions/JerseyAction'

class Home extends Component {

  componentDidMount() {
    this._unsubscribe = this.props.navigation.addListener('focus', () => {
      this.props.dispatch(getListLiga());
      this.props.dispatch(limitJersey(4));
    });
  }

  componentWillUnmount() {
    this._unsubscribe();
  }


  render() {
    const { navigation } = this.props
    return (
      <View style={styles.page}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <HeaderComponent navigation={navigation} page="Home"/>
          <BannerSlider />
          <View style={styles.pilihLiga}>
            <Text style={styles.label}>Pilih Liga</Text>
            <ListLiga navigation={navigation}/>
          </View>

          <View style={styles.pilihJersey}>
            <Text style={styles.label}>

              Pilih <Text style={styles.boldLabel}>Jersey</Text> Yang Anda
              Inginkan
            </Text>
            <ListJerseys navigation={navigation}/>

            <Tombol 
                title="Lihat Semua" 
                type="text" 
                padding={10} 
                onPress={()=> navigation.navigate('ListJersey')} />
          </View>

          <Jarak height={80}/>
        </ScrollView>
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  getListLigaLoading: state.LigaReducer.getListLigaLoading,
  getListLigaResult: state.LigaReducer.getListLigaResult,
  getListLigaError: state.LigaReducer.getListLigaError,
});

export default connect()(Home)

const styles = StyleSheet.create({
  page: {
    flex: 1, backgroundColor: colors.white, 
    marginTop: StatusBar.currentHeight,
  },
  pilihLiga: {
    marginHorizontal: 40,
    marginTop: 10,
  },
  pilihJersey: {
    marginHorizontal: 40,
    marginTop: 10,
  },
  label: {
    fontSize: 18,
    fontFamily: fonts.primary.regular,
  },
  boldLabel: {
    fontSize: 18,
    fontFamily: fonts.primary.bold,
  },
});
