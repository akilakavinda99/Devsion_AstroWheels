/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

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
import {useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import RootNavigationStack from './src/navigations/rootNavigation';
import {AppProvider} from './src/context/AppContext';
import {StyleSheet} from 'react-native';
import RNBootSplash from 'react-native-bootsplash';
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
            direction={[6, -5, -0.2]}
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
            source={require('./er.glb')}
            position={[0, 0, -1]}
            scale={[0.05, 0.05, 0.05]}
            type="GLB"
            lightReceivingBitMask={3}
            shadowCastingBitMask={2}
            transformBehaviors={['billboardY']}
            onRotate={(rotateState, rotationFactor, source) => {
              setRotation([0, 0 + rotationFactor, 0]);
            }}
            // resources={[
            //   require('./assets/dr/textures/Material_normal.png'),
            //   require('./assets/dr/textures/Material_baseColor.png'),
            //   require('./assets/dr/textures/Material_metallicRoughness.png'),

            //   require('./assets/dr/scene.bin'),
            // ]}
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

// <ViroARSceneNavigator
//   autofocus={true}
//   initialScene={{
//     scene: HelloWorldSceneAR,
//   }}
//   style={{
//     flex: 1,
//   }}></ViroARSceneNavigator>

function App() {
  useEffect(() => {
    RNBootSplash.hide({fade: true, duration: 500});
  }, []);

  return (
    <AppProvider>
      {/* <ViroARSceneNavigator
        autofocus={true}
        initialScene={{
          scene: HelloWorldSceneAR,
        }}
        style={{
          flex: 1,
        }}></ViroARSceneNavigator> */}
      <RootNavigationStack />
    </AppProvider>
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
