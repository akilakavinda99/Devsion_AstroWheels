/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  ViroARScene,
  ViroText,
  // ViroConstants,
  ViroARSceneNavigator,
  ViroTrackingStateConstants,
  Viro360Image,
  ViroScene,
  ViroARPlaneSelector,
  ViroNode,
  Viro3DObject,
  ViroAmbientLight,
  ViroSpotLight,
  ViroQuad,
  ViroAnimations,
} from '@viro-community/react-viro';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import RootNavigationStack from './src/navigations/rootNavigation';

const HelloWorldSceneAR = () => {
  const [text, setText] = useState('Initializing AR...');

  function onInitialized(state, reason) {
    console.log('guncelleme', state, reason);
    if (state === ViroTrackingStateConstants.TRACKING_NORMAL) {
      setText('SP-2345 GUNTRACER');
    } else if (state === ViroTrackingStateConstants.TRACKING_NONE) {
      // Handle loss of tracking
    }
  }
  ViroAnimations.registerAnimations({
    rotate: {
      properties: {
        rotateY: '+=90', // Rotate by 90 degrees along the Y axis
      },
      duration: 1000, // Animation duration in milliseconds
    },
  });

  const [rotation, setRotation] = useState([0, 0, 0]);

  return (
    <ViroARScene onTrackingUpdated={onInitialized}>
      <ViroText
        text={text}
        scale={[0.5, 0.5, 0.5]}
        position={[0, 0, -1]}
        style={styles.helloWorldTextStyle}
      />
      <ViroAmbientLight color={'#aaaaaa'} />
      <ViroNode position={[0, -0.1, 0]}>
        <ViroNode
          position={[0, -0.8, 0]}
          dragType="FixedToWorld"
          onDrag={() => {}}
          onRotate={() => {
            console.log('dfsffsd');
          }}>
          {/* Spotlight to cast light on the object and a shadow on the surface, see
              the Viro documentation for more info on lights & shadows */}
          <ViroSpotLight
            innerAngle={5}
            outerAngle={45}
            direction={[0, -1, -0.2]}
            position={[0, 3, 0]}
            color="#ffffff"
            castsShadow={true}
            influenceBitMask={2}
            shadowMapSize={2048}
            shadowNearZ={2}
            shadowFarZ={5}
            shadowOpacity={0.7}
          />
          <Viro3DObject
            source={require('./assets/dr/scene.gltf')}
            position={[0, 0, -1]}
            scale={[0.02, 0.05, 0.02]}
            type="GLTF"
            lightReceivingBitMask={3}
            shadowCastingBitMask={2}
            transformBehaviors={['billboardY']}
            onRotate={(rotateState, rotationFactor, source) => {
              setRotation([0, 0 + rotationFactor, 0]);
            }}
            resources={[
              require('./assets/dr/textures/Material_normal.png'),
              require('./assets/dr/textures/Material_baseColor.png'),
              require('./assets/dr/textures/Material_metallicRoughness.png'),

              require('./assets/dr/scene.bin'),
            ]}
            animation={{
              name: 'rotate', // Use the registered animation name
              run: true, // Start the animation
              loop: true, // Loop the animation
            }}
          />
          <ViroQuad
            rotation={[-90, 0, 0]}
            width={0.5}
            height={0.5}
            arShadowReceiver={true}
            lightReceivingBitMask={2}
          />
        </ViroNode>
      </ViroNode>

      {/* <ViroNode position={[0, 0, -1]} dragType="FixedToWorld" onDrag={() => { }} >
        <Viro3DObject
          source={require('./emoji_smile.vrx')}
          position={[0, .1, 0]}
          scale={[.2, .2, .2]}
          type="VRX"
        />
      </ViroNode> */}
    </ViroARScene>
  );
};

const TestSreen = ({navigation}) => {
  return (
    <View>
      <Text>Test</Text>
      <Button title="Nav" onPress={() => navigation.navigate('Tabs')} />
    </View>
  );
};

const TestSreen2 = () => {
  return (
    <View>
      <Text>Test1</Text>
    </View>
  );
};

const TestSreen3 = () => {
  return (
    <View>
      <Text>Test</Text>
    </View>
  );
};
const Tab = createBottomTabNavigator();

const AuthStackNav = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <AuthStackNav.Navigator>
      <AuthStackNav.Screen name="Test" component={TestSreen} />
    </AuthStackNav.Navigator>
  );
};

const Tabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Test2" component={TestSreen2} />
      <Tab.Screen name="Test3" component={TestSreen3} />
    </Tab.Navigator>
  );
};

const MainStackNav = createNativeStackNavigator();
function App() {
  return (
    <RootNavigationStack />
    // <ViroARSceneNavigator
    //   autofocus={true}
    //   initialScene={{
    //     scene: HelloWorldSceneAR,
    //   }}
    //   style={{
    //     flex: 1,
    //   }}></ViroARSceneNavigator>
  );
}
var styles = StyleSheet.create({
  f1: {flex: 1},
  helloWorldTextStyle: {
    // fontFamily: ,
    fontSize: 10,
    fontWeight: '700',
    color: '#ffffff',
    textAlignVertical: 'center',
    textAlign: 'center',
  },
});

export default App;
