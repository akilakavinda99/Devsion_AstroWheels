import React, {useRef} from 'react';
import Carousel from 'react-native-reanimated-carousel';
import {
  Button,
  Dimensions,
  ImageBackground,
  Text,
  View,
  Image,
  TouchableHighlight,
} from 'react-native';
import Back from '../back/backScreen';
import {useEffect} from 'react';
import {
  addDataToFirebase,
  getDataFromFirebase,
  updateDataInFirebase,
} from '../../utiils/firebaseServices/firebaseCrud';
import SpeedCircle from '../../../assets/svgData/spaceShipScreen/speedCircle';
import ArIcon from '../../../assets/svgData/spaceShipScreen/arIcon';
import theme from '../../theme/theme';
import DesignIcon from '../../../assets/svgData/spaceShipScreen/designIcon';
import PropulsionIcon from '../../../assets/svgData/spaceShipScreen/propulsionIcon';
import {styles} from './spaceShipStyles';
import {style} from '../destination/destinationStyle';
import InteriorIcon from '../../../assets/svgData/spaceShipScreen/interiorIcon';
import FeaturesIcon from '../../../assets/svgData/spaceShipScreen/featuresIcon';
import LinearGradient from 'react-native-linear-gradient';
import SliderPrevious from '../../../assets/svgData/spaceShipScreen/sliderPreviousIcon';
import SliderNext from '../../../assets/svgData/spaceShipScreen/sliderNextIcon';
const SpaceshipsScreen = () => {
  const carouselRef = useRef(null);
  const width = Dimensions.get('window').width;
  const height = Dimensions.get('window').height;

  const handlePrevSlide = () => {
    if (carouselRef.current) {
      console.log(carouselRef.current.getCurrentIndex());
      carouselRef.current.scrollTo({
        index: 3,
      });
    }
  };

  const handleNextSlide = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollTo({
        index: carouselRef.current.getCurrentIndex() + 1,
      });
    }
  };

  // useEffect(() => {
  //   const getDataa = async () => {
  //     const data = await addDataToFirebase({reference: 'spaceships/1',data:});
  //     console.log(data);
  //   };
  //   getDataa();
  // }, []);

  //   useEffect(() => {
  //     const seat = [
  //       {
  //         packageId: 1,
  //         seats: [
  //           {
  //             seatId: 1,
  //             bookedDates: ['2023-09-01', '2023-09-01', '2023-09-01'],
  //           },
  //         ],
  //       },
  //     ];
  //     const getDataa = async () => {
  //       const data = await updateDataInFirebase({
  //         reference: 'spaceships/1',
  //         data: {seat: seat},
  //       });
  //       console.log(data);
  //     };
  //     getDataa();
  //   }, []);

  return (
    <ImageBackground
      source={require('../../../assets/images/Background.png')}
      style={{flex: 1}}>
      <Back title="dsds" marginTop={25} marginBottom={5} />
      <View
        style={{
          flex: 1,
        }}>
        <Carousel
          // mode=''
          ref={carouselRef}
          loop
          width={width}
          height={height}
          autoPlay={false}
          data={[...new Array(6).keys()]}
          scrollAnimationDuration={1000}
          onScrollEnd={index => console.log('scroll end', index)}
          onSnapToItem={index => console.log('current index:', index)}
          renderItem={({index}) => (
            <View style={styles.mainContainer}>
              <View style={styles.spaceShipRow}>
                <View>
                  <Image
                    source={require('../../../s3.png')}
                    style={styles.spaceShipImage}
                    resizeMode="cover"
                  />
                </View>
                <View
                  style={{
                    marginRight: 20,
                    marginTop: 20,
                  }}>
                  <View style={styles.speedCircle}>
                    <SpeedCircle />
                  </View>
                  <Text style={styles.speedText}>
                    Unleashing the Power of Stars for Cosmic Odyssey
                  </Text>
                </View>
              </View>
              <View style={styles.headingView}>
                <View>
                  <Text style={styles.headingText}>Quantum Glidecraft</Text>
                </View>
                <View style={styles.arIcon}>
                  <ArIcon />
                </View>
              </View>
              <View style={styles.detailsContainer}>
                <View style={styles.detailsFirstRow}>
                  <View style={styles.detailsCardMainView}>
                    <View style={styles.detailsHeaderRow}>
                      <Text style={styles.detailsHeaderText}>Design</Text>
                      <DesignIcon />
                    </View>
                    <Text style={styles.detailsDescription}>
                      Compact, streamlined craft with a quantum entanglement
                      propulsion system.
                    </Text>
                    {/* <Text>Quantum Glidecraft</Text>
                  <Text>Quantum Glidecraft</Text> */}
                  </View>
                  <View style={styles.detailsCardMainView}>
                    <View style={styles.detailsHeaderRow}>
                      <Text style={styles.detailsHeaderText}>Propulsion</Text>
                      <PropulsionIcon />
                    </View>
                    <Text style={styles.detailsDescription}>
                      Compact, streamlined craft with a quantum entanglement
                      propulsion system.
                    </Text>
                    {/* <Text>Quantum Glidecraft</Text>
                  <Text>Quantum Glidecraft</Text> */}
                  </View>
                </View>
                <View style={styles.detailsFirstRow}>
                  <View style={styles.detailsCardMainView}>
                    <View style={styles.detailsHeaderRow}>
                      <Text style={styles.detailsHeaderText}>Interior</Text>
                      <InteriorIcon />
                    </View>
                    <Text style={styles.detailsDescription}>
                      Compact, streamlined craft with a quantum entanglement
                      propulsion system.
                    </Text>
                    {/* <Text>Quantum Glidecraft</Text>
                  <Text>Quantum Glidecraft</Text> */}
                  </View>
                  <View style={styles.detailsCardMainView}>
                    <View style={styles.detailsHeaderRow}>
                      <Text style={styles.detailsHeaderText}>Features</Text>
                      <FeaturesIcon />
                    </View>
                    <Text style={styles.detailsDescription}>
                      Compact, streamlined craft with a quantum entanglement
                      propulsion system.
                    </Text>
                    {/* <Text>Quantum Glidecraft</Text>
                  <Text>Quantum Glidecraft</Text> */}
                  </View>
                </View>
              </View>
            </View>
          )}
        />
      </View>
      <View
        style={{
          flex: 0.13,
          justifyContent: 'space-evenly',
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <View>
          <SliderNext />
        </View>
        <View>
          <LinearGradient
            colors={['rgba(0, 0, 0, 0.00)', 'rgba(0, 0, 0, 0.10)', '#40235E']} // Replace with your desired gradient colors
            start={{x: 0, y: 0.5}}
            end={{x: 1, y: 0.5}}
            style={{
              borderRadius: 15,
              overflow: 'hidden', // Ensure gradient is clipped within button boundaries
            }}>
            <TouchableHighlight
              style={{
                paddingTop: 16,
                paddingBottom: 16,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                color: ' #fff',
                backgroundColor: '#40235E',
                borderWidth: 2,
                borderRadius: 15,
                width: 150,
              }}
              activeOpacity={0.9}
              underlayColor={theme.colors.primary.primary600}>
              <Text
                style={{
                  backgroundColor: 'transparent',
                  color: theme.colors.white,
                  fontWeight: '500',
                  fontSize: 20,
                  fontFamily: theme.fonts.medium,
                }}>
                Book
              </Text>
            </TouchableHighlight>
          </LinearGradient>
        </View>
        <View>
          <SliderPrevious />
        </View>
      </View>
    </ImageBackground>
  );
};

export default SpaceshipsScreen;
