import {
  Alert,
  ImageBackground,
  SafeAreaView,
  StatusBar,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import theme from '../../theme/theme';
import {styles} from '../login/loginStyles';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AndroidSafeArea} from '../../styles/globalStyles';
import {stackNames} from '../../constants/navigationConstants/stackNames';
import {screenNames} from '../../constants/navigationConstants/screenNames';
import {useState} from 'react';
import ModelComponent from '../../components/commonComponents/modelComponent';
import CommonButton from '../../components/commonComponents/commonButton';

const LoginScreen = ({onPress, navigation}: any) => {
  const [testingModelVisible, setTestingModelVisible] = useState(false);

  return (
    <View style={AndroidSafeArea}>
      <StatusBar translucent backgroundColor="transparent" />
      <View style={styles.container}>
        <ImageBackground
          source={require('../../../assets/LoginScreen.png')}
          resizeMode="cover"
          style={styles.image}>
          <View style={styles.heroSection}>
            <View style={styles.text}>
              <Text style={styles.mainText}>
                Welcome to Astro
                <Text style={styles.spanText}>Wheels</Text>
              </Text>
              <View>
                <Text style={styles.subText}>Your Journey Begins Here!</Text>
              </View>
            </View>

            <CommonButton
             
              buttonText={'Tap to Launch'}
              buttonOnpressFunction={()=>navigation.navigate(
                stackNames.AUTH_STACK,
                {
                  screen: screenNames.Login_ID_Screen,
                },
              )}
            />

            <View style={styles.signupSection}>
              <Text style={styles.signupText}>
                You don't have account?
                <TouchableOpacity
                  onPress={() => {
                    console.log('Signup Pressed');
                    setTestingModelVisible(true);
                  }}>
                  <Text
                    style={{
                      color: theme.colors.primary.primary200,
                      fontWeight: '500',
                    }}>
                    Signup
                  </Text>
                </TouchableOpacity>
              </Text>
            </View>
          </View>
        </ImageBackground>

        {/* <LoginScreenSvg/> */}
      </View>
      <ModelComponent
        visibility={true}
        onBackdropPress={() => setTestingModelVisible(false)}
      />
    </View>
  );
};

export default LoginScreen;
