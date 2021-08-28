import React, {Component} from 'react';
import {StyleSheet, View, Modal, Text} from 'react-native';
import {
  colors,
  fonts,
  responsiveHeight,
  heightMobileUI,
  responsiveWidth,
} from '../../../utils';
import {
  Inputan,
  Jarak,
  Tombol
} from '../../kecil';
import {RFValue} from 'react-native-responsive-fontsize';
import {SliderBox} from 'react-native-image-slider-box';
import ImageViewer from 'react-native-image-zoom-viewer';


export default class JerseySlider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      openImage: false,
      previewImage: false,
      index: 0,
    };
  }

  getEachImages = () => this.props.images.map((val, key)=>({
    url: val, 
    props: { 
      source : val 
    } 
  }))

  clickPreview = (index) => {
    this.setState({
      openImage: true,
      index: index,
      previewImage: this.getEachImages()
      
    });

  };


  render() {
    const {images, jersey} = this.props;
    // console.warn(images)
    const {openImage, previewImage, index} = this.state;
    return (
      <View>
        <SliderBox
          images={images}
          circleLoop
          sliderBoxHeight={responsiveHeight(430)}
          ImageComponentStyle={styles.jersey}
          dotStyle={styles.dotStyle}
          dotColor={colors.green}
          imageLoadingColor={colors.yellow}
          onCurrentImagePressed={(index) => this.clickPreview(index)}
        />

        <Modal 
            visible={openImage} 
            transparent={true} 
            onRequestClose={() => this.setState({openImage: true})}
            animationType="fade"
            >
          <ImageViewer
            index={index}
            imageUrls={previewImage}
            backgroundColor={colors.primary}
            onClick={() => this.setState({openImage: false})}
            enableSwipeDown
            onSwipeDown={() => this.setState({openImage: false})}
            saveToLocalByLongPress={false}
          />
          
          {/*<Text style={styles.badgeRight}>Berat {jersey.berat} Gram</Text>*/}

          <View style={styles.container}>
            <Text style={styles.badgeBottom}>Tipe {jersey.jenis}</Text>
            <Text style={styles.badgeBottom}>Berat {jersey.berat} Gram</Text>         
          </View>

        </Modal>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    justifyContent: 'center',
  },

  jersey: {
    marginTop: 25,
    width: responsiveWidth(344),
  },
  dotStyle: {
    marginTop: -60,
  },
  badgeRight: {
    fontSize: RFValue(18, heightMobileUI),
    fontFamily: fonts.primary.light,
    position: 'absolute',
    right: 10,
    top: 10,
    zIndex: 0,
    color: colors.secondary,
    justifyContent: 'center',
    textTransform: 'uppercase',
  },
  badgeBottom: {
    fontSize: RFValue(18, heightMobileUI),
    fontFamily: fonts.primary.light,
    textAlign: 'center',
    position: 'relative',
    bottom: responsiveHeight(100),

    zIndex: 0,
    color: colors.secondary,
    textTransform: 'uppercase',

  },
});
