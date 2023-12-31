import {View, Text, Image, TouchableOpacity} from 'react-native';
import {StyleSheet} from 'react-native';
import theme from '../../theme/theme';
import {styles} from './backStyle';
import {useNavigation} from '@react-navigation/native';
import {scale} from 'react-native-size-matters';

const Back = ({title, marginTop = 50, marginBottom = 20}: any) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.goBack()}
      style={[
        styles.headerbox,
        {
          marginTop: scale(marginTop),
          marginBottom: scale(marginBottom),
        },
      ]}>
      <Image
        source={require('../../../assets/images/back.png')}
        style={styles.backimg}
      />
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Back;
